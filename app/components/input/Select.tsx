import styles from './Select.module.scss';

import { SelectHTMLAttributes } from 'react';
import cs from 'clsx';

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: Option[];
  selected?: Option['value'];
}

export default function Select({ placeholder, options, selected, ...selectProps }: SelectProps) {
  return (
    <select {...selectProps} value={selected} className={cs(styles.select, selectProps.className)}>
      <option disabled value=''>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
