import { USER_ROLES } from '../constants/userRoles';
import style from './UserRole.module.css';

/* asignamos los coleres a cada rol */
const ROLE_STYLES = {
	[USER_ROLES.TEACHER]: ['Profesor', style.teacher],
	[USER_ROLES.STUDENT]: ['Alumno', style.student],
	[USER_ROLES.OTHER]: ['otro', style.other]
};
const UserRole = ({ role }) => {
	/* destructuring de ROLE_STYLES */
	const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other;
	return (
		<span className={`${style.roleSpan} ${roleClassname}`}>{roleName}</span>
	);
};
export default UserRole;
