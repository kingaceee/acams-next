import { useState } from 'react';
import styles from './index.module.scss';

import Checkbox, { PropTypes as CheckboxPropTypes } from '@/components/input/Checkbox';

interface ITEM {
  id: string;
  label: string;
  link?: string;
}

const LIST: Array<ITEM> = [{ id: 'price', label: '할인 적용된 정확한 결제 금액은 ACAMS 결제 메일을 통해 확인 가능합니다.' }];

export interface PropTypes {
  onChangeCheck: (isAllChecked: boolean) => void;
}

function ConfirmCheckBox({ onChangeCheck }: PropTypes) {
  const [checked, setChecked] = useState({ price: false, procedure: false, term: false, privacy: false });

  const handleCheck: CheckboxPropTypes['onChange'] = e => {
    setChecked(prev => {
      return { ...prev, [e.target.id]: e.target.checked };
    });

    onChangeCheck(false);
  };

  return (
    <ul className={styles.check__list}>
      <li>
        <Checkbox
          id='price'
          label='할인 적용된 정확한 결제 금액은 ACAMS 결제 메일을 통해 확인 가능합니다.'
          checked={checked.price}
          onChange={handleCheck}
        />
      </li>
      <li>
        <Checkbox id='procedure' label='신청 절차 안내를 확인 하였습니다.' />
      </li>
      <li>
        <Checkbox id='term' link='이용약관' label='을 확인하였습니다.' />
      </li>
      <li>
        <Checkbox id='privacy' link='개인정보처리방침' label='을 확인하였습니다.' />
      </li>
    </ul>
  );
}

export default ConfirmCheckBox;
