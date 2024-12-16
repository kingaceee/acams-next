import styles from './Checkbox.module.scss';

import { InputHTMLAttributes } from 'react';

export interface PropTypes extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  link?: string;
  label?: string;
}

export default function Checkbox({ link, label, ...inputProps }: PropTypes) {
  return (
    <div className={styles.chkbox__btn}>
      <input {...inputProps} type='checkbox' />
      <label htmlFor={inputProps.id}>
        <a>{link}</a> {label}
      </label>
    </div>
  );
}
