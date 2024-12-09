
import Checkbox from '../input/Checkbox';
import InputBox from '../input/InputBox';
import Radio from '../input/Radio';
import styles from './Form.module.scss'

interface formRow {
	col2?: boolean;
	rowLabel?: string;
	rowType?: string;
  radioBox?: [];
  inputBox?: inputBox;
  inputBtn: inputBox[];
}
interface inputBox {
	id?: string;
	for?: string;
	name?: string;
	label?: string;
	btnLabel?: string;
	timer?: boolean;
}

interface SelectProps {
	id?: string;
	title?: string;
	formRow: formRow[];
}

export default function FormGroup({id, title, formRow, }: SelectProps) {
	return (
		<div id={id} className={styles.form__group}>
			<strong className={styles.form__title}>{title}</strong>
			
      {formRow.map((row, index) => (
			<div key={index} className={`${styles.form__row} ${row.col2 ? styles.col2 : ''}`}>
				<div className={styles.form__box}>
					<label className={styles.form__tit}>{row.rowLabel}</label>
					<div className={styles.form__item}>
						{row.rowType === 'inputBox' && row.inputBox && (
						<InputBox
							id={row.inputBox.id}
							for={row.inputBox.for}
							button={row.inputBox.btnLabel}
							timer={row.inputBox.timer}
						/>
						)}
					{row.rowType === 'radioBox' && (
					<div className={styles.radio__box}>
						{row.inputBtn && row.inputBtn.map((btn, id) => (
							<Radio
								key={id}
								id={btn.id}
								for={btn.for}
								name={btn.name}
								label={btn.label}
							/>
						))}
					</div>
					)}
						{/* {row.rowType === chkboxBox && 
						<div className={styles.chkbox__box}>
							{chkboxBtn.map((btn, index) => (
							<Checkbox
								key={index}
								id={btn.id}
								for={btn.for}
								name={btn.name}
								label={btn.label}
							/>
							))}
						</div>
						}
						{row.rowType ===inputBox && 
						<InputBox
							id={inputBox.id}
							for={inputBox.for}
						/>
						} */}
					</div>
				</div>
			</div>
      ))}
		</div>
	);
}
