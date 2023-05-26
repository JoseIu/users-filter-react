import UserRow from './UserRow';

const UserListRows = ({ users }) => {
	/* Comprovamos si existe usuarios, si lo hay lo pintamos */
	if (!users.length) return <p>No hay usuario</p>;

	return users.map(user => <UserRow key={user.id} {...user} />);
};

export default UserListRows;
