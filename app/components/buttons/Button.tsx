
import styles from './Button.module.scss'

interface ButtonProps {
	id?: string;
	label?: string;
	publType?: string;
}

export default function Button({id, label, publType}: ButtonProps) {
	return (
		<button
			type="button"
			id={id}
			className={`${styles.btn} ${publType ? styles[publType] : ''}`}
		>
			{label}
		</button>
	);
}
