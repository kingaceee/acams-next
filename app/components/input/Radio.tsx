
import styles from './Radio.module.scss'

interface RadioProps {
	id?: string;
	for?: string;
	value?: string | number;
	name?: string;
	label?: string;
}

export default function Radio(radio: RadioProps) {
	return (
		<div className={styles.radio__btn}>
			<input type="radio" id={radio.id} value={radio.value} name={radio.name} />
			<label htmlFor={radio.for}>{radio.label}</label>
		</div>
	);
}