import styles from './index.module.scss';

import { MouseEvent, ReactNode, useEffect, useState } from 'react';

import useBoolean from '@/hooks/useBoolean';

import Checkbox, { PropTypes as CheckboxPropTypes } from '@/components/input/Checkbox';
import Modal from '@/components/modal/Modal';

import Terms from '@/terms/components/TermsComponent';
import Privacy from '@/privacy/components/PrivacyComponent';

interface Item {
  id: 'price' | 'procedure' | 'term' | 'privacy';
  label: ReactNode;
}

export interface PropTypes {
  onChangeCheck: (isAllChecked: boolean) => void;
}

function ConfirmCheckBox({ onChangeCheck }: PropTypes) {
  const [checked, setChecked] = useState({ price: false, procedure: false, term: false, privacy: false });

  const { value: isOpenTermsModal, setTrue: openTermsModal, setFalse: closeTermModal } = useBoolean(false);
  const { value: isOpenPrivacyModal, setTrue: openPrivacyModal, setFalse: closePrivacyModal } = useBoolean(false);

  const handleCheck: CheckboxPropTypes['onChange'] = e => {
    setChecked(prev => {
      return { ...prev, [e.target.id]: e.target.checked };
    });
  };

  const handleOpenModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const name = (e.target as HTMLAnchorElement).dataset.name;

    if (name === 'term') openTermsModal();
    if (name === 'privacy') openPrivacyModal();
  };

  useEffect(() => {
    const isAllChecked = Object.values(checked).every(value => value);
    onChangeCheck(isAllChecked);
  }, [checked, onChangeCheck])

  const list: Array<Item> = [
    { id: 'price', label: <label htmlFor='price'>할인 적용된 정확한 결제 금액은 ACAMS 결제 메일을 통해 확인 가능합니다.</label> },
    { id: 'procedure', label: <label htmlFor='procedure'>신청 절차 안내를 확인 하였습니다.</label> },
    {
      id: 'term',
      label: (
        <label htmlFor='term'>
          <a data-name='term' onClick={handleOpenModal}>
            이용약관
          </a>
          을 확인하였습니다.
        </label>
      ),
    },
    {
      id: 'privacy',
      label: (
        <label htmlFor='privacy'>
          <a data-name='privacy' onClick={handleOpenModal}>
            개인정보처리방침
          </a>
          을 확인하였습니다.
        </label>
      ),
    },
  ];

  return (
    <>
      <ul className={styles.check__list}>
        {list.map(item => (
          <li key={item.id}>
            <Checkbox id={item.id} label={item.label} checked={checked[item.id]} onChange={handleCheck} />
          </li>
        ))}
      </ul>
      <Modal isOpen={isOpenTermsModal} modalTitle='이용약관' buttons={[{ label: '확인', publType: 'primary', onClick: closeTermModal }]}>
        <Terms />
      </Modal>

      <Modal
        isOpen={isOpenPrivacyModal}
        modalTitle='개인정보처리방침'
        buttons={[{ label: '확인', publType: 'primary', onClick: closePrivacyModal }]}
      >
        <Privacy />
      </Modal>
    </>
  );
}

export default ConfirmCheckBox;
