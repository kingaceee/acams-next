import { InputHTMLAttributes, ReactNode } from 'react';
import cs from 'clsx';

import styles from './InputBox.module.scss';

export interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  button?: ReactNode;
  timer?: ReactNode;
  hidden?: boolean;
}

export default function InputBox({ button, timer, hidden, type = 'text', ...inputProps }: PropTypes) {
  return (
    <>
      <div className={cs(styles.input__box, { hidden: hidden })}>
        <input type={type} {...inputProps} />
        {timer && <span className={styles.timer}>{timer}</span>}
      </div>
      {button && button}
    </>
  );
}
