
import styles from './Select.module.scss'

interface Options {
	value?: string | string[];
	label?: string | string[];
}

interface SelectProps {
	id?: string;
	name?: string;
	placeholder?: string;
  options: Options[];
}

export default function Select({id, name, placeholder, options}: SelectProps) {
	return (
		<select id={id} name={name} className={styles.select}>
			<option disabled selected>{placeholder}</option>
      {options.map((option, index) => (
			<option key={index} value={option.value}>{option.label}</option>
      ))}
		</select>
	);
}
