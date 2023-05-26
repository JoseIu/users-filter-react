import SearchIcon from '../icons/SearchIcon';
import style from './InputSerch.module.css';

const InputSearch = props => (
	<div className={style.searhContainer}>
		<SearchIcon className={style.icon} />
		<input {...props} className={style.input} type='text' />
	</div>
);

export default InputSearch;
