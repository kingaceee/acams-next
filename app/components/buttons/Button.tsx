import styles from './Button.module.scss';

import { ButtonHTMLAttributes } from 'react';
import cs from 'clsx';

export interface PropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  publType?: 'primary' | 'border';
}

export default function Button({ label, publType, type = 'button', ...buttonProps }: PropTypes) {
  return (
    <button
      {...buttonProps}
      type={type}
      className={cs({
        [styles.btn]: true,
        [styles.primary]: publType === 'primary',
        [styles.border]: publType === 'border',
      })}
    >
      {label}
    </button>
  );
}
