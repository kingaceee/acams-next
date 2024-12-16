import { InputHTMLAttributes } from 'react';
import cs from 'clsx';

import styles from './InputBox.module.scss';

export interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  buttonText?: string;
  timer?: boolean;
  hidden?: boolean;
  for?: string;
  type?: string;
}

export default function InputBox({ buttonText, timer, hidden, type = 'text', ...inputProps }: PropTypes) {
  return (
    <>
      <div className={cs(styles.input__box, { hidden: hidden })}>
        <input type={type} {...inputProps} />
        {timer && <span className={styles.timer}>00:00</span>}
      </div>

      {buttonText && (
        <button type='button' className='btn default'>
          {buttonText}
        </button>
      )}
    </>
  );
}
