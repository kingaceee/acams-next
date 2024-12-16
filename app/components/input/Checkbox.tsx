import styles from './Checkbox.module.scss';

import { InputHTMLAttributes, ReactNode } from 'react';

export interface PropTypes extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
}

export default function Checkbox({ label, ...inputProps }: PropTypes) {
  return (
    <div className={styles.chkbox__btn}>
      <input {...inputProps} type='checkbox' />
      {label && label}
    </div>
  );
}
