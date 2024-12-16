import styles from './Radio.module.scss';

import { InputHTMLAttributes } from 'react';
import cs from 'clsx';

export interface PropTypes extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  hidden?: boolean;
}

export default function Radio({ label, hidden, ...radioProps }: PropTypes) {
  return (
    <div className={cs(styles.radio__btn, { [styles.hidden]: hidden })}>
      <input {...radioProps} type='radio' />
      <label htmlFor={radioProps.id}>{label}</label>
    </div>
  );
}
