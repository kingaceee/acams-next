'use client';

import { HTMLAttributes, ReactElement, ReactNode } from 'react';
import cs from 'clsx';

export interface PropType extends HTMLAttributes<HTMLDivElement> {
  text: string;
  children: ReactElement<{ id: string }>;
  message?: ReactNode;
}

function LabelBox({ text, children, message, ...divProps }: PropType) {
  return (
    <div {...divProps} className={cs('form__box', divProps.className)}>
      <label htmlFor={children.props?.id} className='form__tit'>
        {text}
      </label>
      <div className='form__item'>{children}</div>
      {message}
    </div>
  );
}

export default LabelBox;
