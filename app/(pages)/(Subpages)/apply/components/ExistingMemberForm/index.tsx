import { useContext } from 'react';
import cs from 'clsx';

import { isEnglish } from '@/libs/utils';

import InputBox, { PropTypes as InputBoxPropTypes } from '@/components/input/InputBox';

import LabelBox from '@/apply/components/LabelBox';

import EmailVerificationContainer, {
  PropTypes as EmailVerificationContainerPropTypes,
} from '@/apply/containers/EmailVerificationContainer';
import { ApplyErrorContext } from '@/apply/containers/ApplyContainer';

export interface Info {
  membershipNumber: string;
  lastNameEng: string;
  firstNameEng: string;
  email: string;
  verified: boolean;
}

export interface PropTypes {
  info: Info;
  onChange: (value: Info) => void;
}

function ExistingMemberForm({ info, onChange }: PropTypes) {
  const { error, initError } = useContext(ApplyErrorContext);

  const handleChangeNumber: InputBoxPropTypes['onChange'] = e => {
    const value = e.target.value;

    if (Number.isFinite(Number(value))) {
      if (value.length <= 10) {
        onChange({ ...info, membershipNumber: value });
        if (error.id === 'membershipNumber') initError();
      }
    }
  };

  const handleChangeLastName: InputBoxPropTypes['onChange'] = e => {
    if (isEnglish(e.target.value)) {
      onChange({ ...info, lastNameEng: e.target.value });
    }
  };

  const handleChangeFirstName: InputBoxPropTypes['onChange'] = e => {
    if (isEnglish(e.target.value)) {
      onChange({ ...info, firstNameEng: e.target.value });
    }
  };

  const handleChangeEmail: EmailVerificationContainerPropTypes['onChange'] = ({ email, verified }) => {
    onChange({ ...info, email, verified });
  };

  return (
    <>
      <div className='form__row'>
        <LabelBox text='ACAMS 회원번호' message={<p className={cs('alert--text')}>{error.id === 'membershipNumber' && error.message}</p>}>
          <InputBox id='membershipNumber' value={info.membershipNumber} onChange={handleChangeNumber} />
        </LabelBox>
      </div>
      <div className='form__row col2'>
        <LabelBox text='성(영문)'>
          <InputBox id='lastNameEng' value={info.lastNameEng} onChange={handleChangeLastName} />
        </LabelBox>
        <LabelBox text='이름(영문)'>
          <InputBox id='firstNameEng' value={info.firstNameEng} onChange={handleChangeFirstName} />
        </LabelBox>
      </div>
      <EmailVerificationContainer type='EXISTING' label='이메일' onChange={handleChangeEmail} />
    </>
  );
}

export default ExistingMemberForm;
