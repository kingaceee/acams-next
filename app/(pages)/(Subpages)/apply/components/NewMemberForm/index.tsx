import { useContext } from 'react';
import cs from 'clsx';

import { isEnglish, isKorean } from '@/libs/utils';

import InputBox, { PropTypes as InputBoxPropTypes } from '@/components/input/InputBox';
import Select from '@/components/input/Select';

import LabelBox from '@/apply/components/LabelBox';
import EmailVerificationContainer, {
  PropTypes as EmailVerificationContainerPropTypes,
} from '@/apply/containers/EmailVerificationContainer';
import { ApplyErrorContext } from '@/apply/containers/ApplyContainer';

const INDUSTRY_OPTIONS = [
  { label: 'Accounting Firm', value: 'ACCOUNTING_FIRM' },
  { label: 'Banking', value: 'BANKING' },
  { label: 'Casino/Gaming', value: 'CASINO_GAMBLING' },
  { label: 'Consultant', value: 'CONSULTANT' },
  { label: 'Credit Union', value: 'CREDIT_UNION' },
  { label: 'Government Enforcement', value: 'GOVERNMENT_ENFORCEMENT' },
  { label: 'Government Regulatory', value: 'GOVERNMENT_REGULATORY' },
  { label: 'Insurance', value: 'INSURANCE' },
  { label: 'Law Firm', value: 'LAW_FIRM' },
  { label: 'Luxury Retail', value: 'LUXURY_RETAIL' },
  { label: 'MSB', value: 'MSB' },
  { label: 'Securities Dealers', value: 'SECURITIES_DEALERS' },
  { label: 'Software', value: 'SOFTWARE' },
  { label: 'Other', value: 'OTHER' },
];

const HONORIFIC_OPTIONS = [
  { label: 'Mr.', value: 'MR' },
  { label: 'Ms.', value: 'MS' },
  { label: 'Mrs.', value: 'MRS' },
  { label: 'Dr.', value: 'DR' },
  { label: 'Prof.', value: 'PROF' },
];

export interface Info {
  lastNameEng: string;
  firstNameEng: string;
  lastNameKor: string;
  firstNamekor: string;
  companyEng: string;
  companyKor: string;
  industry: string;
  departmentEng: string;
  departmentKor: string;
  positionEng: string;
  positionKor: string;
  email: string;
  verified: boolean;
  officeNumber: string;
  phoneNumber: string;
  subEmail: string;
  honorific: string;
}

export interface PropTypes {
  info: Info;
  onChange: (value: Info) => void;
}

function NewMemberForm({ info, onChange }: PropTypes) {
  const { error, initError } = useContext(ApplyErrorContext);

  const handleChangeEng: InputBoxPropTypes['onChange'] = e => {
    if (isEnglish(e.target.value)) {
      onChange({ ...info, [e.target.id]: e.target.value });
    }
  };

  const handleChangeKor: InputBoxPropTypes['onChange'] = e => {
    if (isKorean(e.target.value)) {
      onChange({ ...info, [e.target.id]: e.target.value });
    }
  };

  const handleChangeNumber: InputBoxPropTypes['onChange'] = e => {
    const value = e.target.value;
    const id = e.target.id;

    if (Number.isFinite(Number(value))) {
      onChange({ ...info, [id]: value });
      if (error.id === id) initError();
    }
  };

  const handleChangeEmail: EmailVerificationContainerPropTypes['onChange'] = ({ email, verified }) => {
    onChange({ ...info, email, verified });
  };

  return (
    <>
      <div className='form__row col2'>
        <LabelBox text='성(영문)'>
          <InputBox id='lastNameEng' value={info.lastNameEng} onChange={handleChangeEng} />
        </LabelBox>
        <LabelBox text='이름(영문)'>
          <InputBox id='firstNameEng' value={info.firstNameEng} onChange={handleChangeEng} />
        </LabelBox>
      </div>

      <div className='form__row col2'>
        <LabelBox text='성(한글)'>
          <InputBox id='lastNameKor' value={info.lastNameKor} onChange={handleChangeKor} />
        </LabelBox>
        <LabelBox text='이름(한글)'>
          <InputBox id='firstNamekor' value={info.firstNamekor} onChange={handleChangeKor} />
        </LabelBox>
      </div>

      <div className='form__row col2'>
        <LabelBox text='회사명(영문)'>
          <InputBox id='companyEng' value={info.companyEng} onChange={handleChangeEng} />
        </LabelBox>
        <LabelBox text='회사명(한글)'>
          <InputBox id='companyKor' value={info.companyKor} onChange={handleChangeKor} />
        </LabelBox>
      </div>

      <div className='form__row'>
        <LabelBox text='업종'>
          <Select
            placeholder='선택하세요'
            options={INDUSTRY_OPTIONS}
            selected={info.industry}
            onChange={e => onChange({ ...info, industry: e.target.value })}
          />
        </LabelBox>
      </div>

      <div className='form__row col2'>
        <LabelBox text='부서명(영문)'>
          <InputBox id='departmentEng' value={info.departmentEng} onChange={handleChangeEng} />
        </LabelBox>
        <LabelBox text='부서명(한글)'>
          <InputBox id='departmentKor' value={info.departmentKor} onChange={handleChangeKor} />
        </LabelBox>
      </div>

      <div className='form__row col2'>
        <LabelBox text='직책(영문)'>
          <InputBox id='positionEng' value={info.positionEng} onChange={handleChangeEng} />
        </LabelBox>
        <LabelBox text='직책(한글)'>
          <InputBox id='positionKor' value={info.positionKor} onChange={handleChangeKor} />
        </LabelBox>
      </div>
      <EmailVerificationContainer type='NEW' label='회사이메일' onChange={handleChangeEmail} />
      <div className='form__row'>
        <LabelBox text='유선번호' message={<p className={cs('alert--text')}>{error.id === 'officeNumber' && error.message}</p>}>
          <InputBox id='officeNumber' value={info.officeNumber} onChange={handleChangeNumber} />
        </LabelBox>
      </div>

      <div className='form__row'>
        <LabelBox text='휴대폰번호' message={<p className={cs('alert--text')}>{error.id === 'phoneNumber' && error.message}</p>}>
          <InputBox id='phoneNumber' value={info.phoneNumber} onChange={handleChangeNumber} />
        </LabelBox>
      </div>

      <div className='form__row'>
        <LabelBox text='개인이메일' message={<p className={cs('alert--text')}>{error.id === 'subEmail' && error.message}</p>}>
          <InputBox type='email' id='subEmail' value={info.subEmail} onChange={e => onChange({ ...info, subEmail: e.target.value })} />
        </LabelBox>
      </div>

      <div className='form__row'>
        <LabelBox text='영문호칭'>
          <Select
            placeholder='선택하세요'
            options={HONORIFIC_OPTIONS}
            onChange={e => {
              onChange({ ...info, honorific: e.target.value });
            }}
            selected={info.honorific}
          />
        </LabelBox>
      </div>
    </>
  );
}

export default NewMemberForm;
