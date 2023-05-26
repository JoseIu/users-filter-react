import CheckIcon from '../icons/CheckIcon';
import style from './InputCheckBox.module.css';

const InputCheckBox = props => (
	<label className={style.label}>
		<input {...props} type='checkbox' className={style.input} />
		<CheckIcon className={style.check} />
	</label>
);

export default InputCheckBox;
