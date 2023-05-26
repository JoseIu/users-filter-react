import { SORT_OPTIONS } from '../constants/sortOptions';
import InputCheckBox from './forms/InputCheckBox';
import InputSearch from './forms/InputSearch';
import Select from './forms/Select';
import style from './UserListFilters.module.css';

const UserListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<div className={style.form}>
		<div className={style.row}>
			<InputSearch
				className={style.search}
				placeholder='Buscar....'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			/>

			<Select
				className={style.select}
				value={sortBy}
				onChange={ev => setSortBy(Number(ev.target.value))}
			>
				<option value={SORT_OPTIONS.DAFULT}>Por defecto</option>
				<option value={SORT_OPTIONS.NAME}>Por nombre</option>
				<option value={SORT_OPTIONS.ROLE}>Por rol</option>
				{!onlyActive && (
					<option value={SORT_OPTIONS.ACTIVE}>Por activación</option>
				)}
			</Select>
		</div>
		<div className={style.row}>
			<div className={style.active}>
				<InputCheckBox
					name='active'
					checked={onlyActive}
					onChange={ev => setOnlyActive(ev.target.checked)}
				/>
				<span htmlFor='active'>Sólo activos</span>
			</div>
		</div>
	</div>
);

export default UserListFilters;
