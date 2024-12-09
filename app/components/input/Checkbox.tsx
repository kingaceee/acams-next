
import Link from 'next/link';
import styles from './Checkbox.module.scss'

interface CheckboxProps {
	id?: string;
	for?: string;
	value?: string | number;
	name?: string;
	link?: string;
	label?: string;
}

export default function Checkbox(chkbox: CheckboxProps) {
	return (
		<div className={styles.chkbox__btn}>
			<input type="checkbox" id={chkbox.id} value={chkbox.value} name={chkbox.name} />
			<label htmlFor={chkbox.for}>
				<a>{chkbox.link}</a>
				{chkbox.label}
			</label>
		</div>
	);
}
