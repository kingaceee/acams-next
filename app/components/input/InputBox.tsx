
import styles from './InputBox.module.scss'

interface InputProps {
	id?: string;
	for?: string;
	value?: string;
	placeholder?: string;
	label?: string;
	button?: string;
	timer?: boolean;
}

export default function InputBox(input: InputProps) {
	return (
		<>
			<div className={styles.input__box}>
				<input type="text" id={input.id} value={input.value} placeholder={input.placeholder} />
				{input.timer && <span className={styles.timer}>00:00</span>}
			</div>
			
			{input.button && <button type="button" className="btn default">{input.button}</button>}
		</>
	);
}
