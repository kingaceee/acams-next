'use client';

import { HTMLAttributes, ReactElement } from 'react';
import cs from 'clsx';

export interface PropType extends HTMLAttributes<HTMLDivElement> {
  text: string;
  children: ReactElement<{ id: string }>;
}

function LabelBox({ text, children, ...divProps }: PropType) {
  return (
    <div {...divProps} className={cs('form__box', divProps.className)}>
      <label htmlFor={children.props?.id} className='form__tit'>
        {text}
      </label>
      <div className='form__item'>{children}</div>
    </div>
  );
}

export default LabelBox;
