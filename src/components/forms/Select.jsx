import ArrowDown from '../icons/ArrowDow';
import style from './Select.module.css';

const Select = props => (
	<div className={style.wrapper}>
		<select {...props} className={style.select}></select>
		<ArrowDown className={style.arrow} />
	</div>
);

export default Select;
