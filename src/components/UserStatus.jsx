import CheckCircleIcon from './icons/CheckCircleIcon';
import CrossCircleIcon from './icons/CrossCircleIcon';
import style from './UserStatus.module.css';

const UserStatus = ({ active }) => {
	// console.log(active);
	const activeClasName = active ? style.active : style.inactive;
	const Icon = active ? CheckCircleIcon : CrossCircleIcon;
	return (
		<div className={activeClasName}>
			<Icon className={style.icon} />
			<span>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
};

export default UserStatus;
