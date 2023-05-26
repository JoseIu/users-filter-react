import { useState } from 'react';
import { SORT_OPTIONS } from '../constants/sortOptions';
import { USER_ROLES } from '../constants/userRoles';
import style from './UserList.module.css';
import UserListFilters from './UserListFilters';
import UserListRows from './UserListRows';

const UserList = ({ initialUseres }) => {
	const { search, onlyActive, sortBy, ...setFilterFunctions } = useFilters();

	const { users, toggleUserActive } = useUsers(initialUseres);

	let useresFiltered = filterOnlyActive(users, onlyActive);
	useresFiltered = filterUsersByName(useresFiltered, search);
	useresFiltered = filterBySort(useresFiltered, sortBy);

	// console.log(users);
	return (
		<div className={style.list}>
			<h1 className={style.title}>Listado de usuarios</h1>

			<UserListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFilterFunctions}
			/>

			<UserListRows
				users={useresFiltered}
				toggleUserActive={toggleUserActive}
			/>
		</div>
	);
};
/* custom HOOK */
const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: SORT_OPTIONS.DEFAULT
	});
	const setSearch = search =>
		setFilters({
			...filters,
			search
		});

	const setOnlyActive = onlyActive => {
		/* si esta activado onlyActives ponemos por defecto en el select */
		if (onlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE)
			setFilters({
				...filters,
				sortBy: SORT_OPTIONS.DEFAULT,
				onlyActive
			});
		else
			setFilters({
				...filters,
				onlyActive
			});
	};
	const setSortBy = sortBy =>
		setFilters({
			...filters,
			sortBy
		});

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
};
const useUsers = initialUseres => {
	const [users, setUsers] = useState(initialUseres);
	const toggleUserActive = userID => {
		const newUsers = [...users];
		const userIndex = newUsers.finIndex(user => user.id === userID);
		if (userIndex === -1) return;
		newUsers[userIndex].active = !newUsers[userIndex].active;
		setUsers(newUsers);
	};

	return { users, toggleUserActive };
};
/* Filtramos por lo que escriba */
const filterUsersByName = (users, search) => {
	if (!search) return [...users];
	const normalizedSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().includes(normalizedSearch)
	);
};
/* Filtramos solo activos */
const filterOnlyActive = (users, search) => {
	if (!search) return [...users];

	return users.filter(user => user.active);
};
/* filtramos alfabéticamente */
const filterBySort = (users, sortBy) => {
	const usersFiltered = [...users];
	switch (sortBy) {
		case SORT_OPTIONS.NAME:
			return usersFiltered.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case SORT_OPTIONS.ROLE:
			return usersFiltered.sort((a, b) => {
				if (a.role === b.role) return 0;
				if (a.role === USER_ROLES.TEACHER) return -1;
				if (a.role === USER_ROLES.STUDENT && b.role === USER_ROLES.OTHER)
					return -1;
				return 1;
			});
		case SORT_OPTIONS.ACTIVE:
			return usersFiltered.sort((a, b) => {
				if (a.active === b.active) return 0;
				if (a.active && !b.active) return -1;
				return 1;
			});
		default:
			return usersFiltered;
	}
};

export default UserList;
