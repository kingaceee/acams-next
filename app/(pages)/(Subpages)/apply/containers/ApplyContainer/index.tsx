'use client';

import styles from './index.module.scss';

import React, { useState } from 'react';

import useBoolean from '@/hooks/useBoolean';

import Radio from '@/components/input/Radio';
import InputBox from '@/components/input/InputBox';
import Select from '@/components/input/Select';
import Button from '@/components/buttons/Button';
// import FormGroup from "@/components/form/Form";

import LabelBox from '@/apply/components/LabelBox';
import LanguageRadio, { PropTypes as LanguageRadioPropTypes } from '@/apply/components/LanguageRadio';
import PackageRadio, { PropTypes as PackageRadioPropTypes } from '@/apply/components/PackageRadio';
import PriceSummary from '@/apply/components/PriceSummary';
import ConfirmCheckBox, { PropTypes as ConfirmCheckBoxPropTypes } from '@/apply/components/ConfirmCheckBox';
import Complete from '@/apply/components/Complete';

import CertificationSelectContainer, {
  PropTypes as CertificationSelectContainerPropTypes,
} from '@/apply/containers/CertificationSelectContainer';
import MembershipRadiosContainer, { PropTypes as MembershipRadioContainerPropTypes } from '@/apply/containers/MembershipRadiosContainer';

const userInfo = [
  {
    rowLabel: 'ACAMS 가입 구분',
    rowType: 'radioBox',
    inputBtn: [
      {
        id: 'serDiv1',
        for: 'serDiv1',
        name: 'serDiv',
        label: '신규가입',
      },
      {
        id: 'userDiv2',
        for: 'userDiv2',
        name: 'userDiv',
        label: '기존  ACAMS 회원',
      },
    ],
  },
  {
    rowLabel: 'ACAMS 회원번호',
    rowType: 'inputBox',
    inputBox: [
      {
        id: 'input1',
        for: 'input1',
      },
    ],
  },
];
const select_business = [
  {
    value: 'option1',
    label: ' Accounting Firm',
  },
  {
    value: 'option2',
    label: 'Banking',
  },
  {
    value: 'option3',
    label: 'Casino/Gaming',
  },
  {
    value: 'option4',
    label: 'Consultant',
  },
  {
    value: 'option5',
    label: 'Credit Union',
  },
  {
    value: 'option6',
    label: 'Government - Enforcement',
  },
  {
    value: 'option7',
    label: 'Government - Regulatory',
  },
  {
    value: 'option8',
    label: 'Insurance',
  },
  {
    value: 'option9',
    label: 'Law Firm',
  },
  {
    value: 'option10',
    label: 'Luxury Retail',
  },
  {
    value: 'option11',
    label: 'MSB',
  },
  {
    value: 'option12',
    label: 'Securities Dealer/Investment Firm',
  },
  {
    value: 'option13',
    label: 'Software/Technology',
  },
  {
    value: 'option14',
    label: 'Other',
  },
];
const select_title = [
  {
    value: 'option1',
    label: 'Mr.',
  },
  {
    value: 'option2',
    label: 'Ms.',
  },
  {
    value: 'option3',
    label: 'Mrs.',
  },
  {
    value: 'option4',
    label: 'Dr.',
  },
  {
    value: 'option5',
    label: 'Prof.',
  },
];

function ApplyContainer() {
  const [selectedCertification, setSelectedCertification] = useState<CertificationSelectContainerPropTypes['selected']>();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageRadioPropTypes['selectedLanguage']>();
  const [selectedPackage, setSelectedPackage] = useState<PackageRadioPropTypes['selectedPackage']>();
  const [selectedMembership, setSelectedMembership] = useState<MembershipRadioContainerPropTypes['selectedMembership']>();

  const { value: submitStatus, setFalse: disableSubmit, setTrue: enableSubmit } = useBoolean(true);

  const handleChangeCertification: CertificationSelectContainerPropTypes['onChange'] = selected => {
    setSelectedCertification(selected);
  };

  const handleChangeLanguage: LanguageRadioPropTypes['onChange'] = language => {
    setSelectedLanguage(language);
  };

  const handleChangeMembership: MembershipRadioContainerPropTypes['onChange'] = membership => {
    setSelectedMembership(membership);
  };

  const handleChangePackage: PackageRadioPropTypes['onChange'] = packageId => {
    setSelectedPackage(packageId);
  };

  const handleChangeSubmitStatus: ConfirmCheckBoxPropTypes['onChangeCheck'] = value => {
    if (value) enableSubmit();
    else disableSubmit();
  };

  return (
    <>
      <div className={styles.apply}>
        <div className={styles.apply__side}>
          <div className={styles.desc}>
            <p>본 사이트는 ACAMS 프로그램 신청 중개 서비스를 제공합니다.</p>
            <p>신청 절차 완료 후 시험 응시 및 자격 요건 등 관련 사항은 ACAMS 공식 사이트를 통해 확인하시기 바랍니다.</p>
          </div>

          <div className={styles.apply__info}>
            <p className={styles.info__title}>신청 절차 안내</p>
            <ol className={styles.info__list}>
              <li>
                <p className={styles.info__tit}>1. 신청자 정보 입력</p>
                <span className={styles.info__desc}>기존 회원과 신규 가입 여부에 따라 필요한 정보를 정확히 입력해 주세요.</span>
              </li>
              <li>
                <p className={styles.info__tit}>2. 프로그램 선택</p>
                <span className={styles.info__desc}>신청을 원하는 ACAMS 프로그램을 선택해 주세요.</span>
              </li>
              <li>
                <p className={styles.info__tit}>3. 이메일 인증</p>
                <span className={styles.info__desc}>
                  입력하신 이메일 주소로 발송된 인증 메일을 열어 인증코드를 확인하여 이메일 소유 인증을 완료해 주세요.
                </span>
              </li>
              <li>
                <p className={styles.info__tit}>4. 신청 완료</p>
                <span className={styles.info__desc}>입력한 내용을 최종 확인한 후, 신청하기 버튼을 클릭하여 신청을 완료해 주세요.</span>
              </li>
              <li>
                <p className={styles.info__tit}>5. 신청 정보 전달</p>
                <span className={styles.info__desc}>귀하의 신청 정보는 ACAMS로 전달되며, 접수 처리에 약 3~5일이 소요 됩니다.</span>
              </li>
              <li>
                <p className={styles.info__tit}>6. 신청 결과 안내</p>
                <span className={styles.info__desc}>
                  ACAMS에서 발송하는 신청 접수 확인 메일을 통해 결제 및 향후 절차에 대한 정보를 확인하실 수 있습니다.
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* [Dev] hidden class toggle 노출/비노출 */}
        <form className={`${styles.apply__form} `}>
          <div className='form__group'>
            <strong className='form__title'>신청자 정보</strong>

            <div className='form__row'>
              <LabelBox text='ACAMS 가입 구분'>
                <div className='radio__box'>
                  <Radio id='userDiv1' for='userDiv1' name='userDiv' label='신규가입' />
                  <Radio id='userDiv2' for='userDiv2' name='userDiv' label='기존 ACAMS 회원' />
                </div>
              </LabelBox>
            </div>

            <div className='form__row'>
              <LabelBox text='ACAMS 회원번호'>
                <InputBox id='membershipNumber' />
              </LabelBox>
            </div>

            <div className='form__row col2'>
              <LabelBox text='성(영문)'>
                <InputBox id='lastNameEng' />
              </LabelBox>
              <LabelBox text='이름(영문)'>
                <InputBox id='firstNameEng' />
              </LabelBox>
            </div>

            <div className='form__row col2'>
              <LabelBox text='성(한글)'>
                <InputBox id='lastNameKor' />
              </LabelBox>
              <LabelBox text='이름(한글)'>
                <InputBox id='firstNamekor' />
              </LabelBox>
            </div>

            <div className='form__row col2'>
              <LabelBox text='회사명(영문)'>
                <InputBox id='companyEng' />
              </LabelBox>
              <LabelBox text='회사명(한글)'>
                <InputBox id='companyKor' />
              </LabelBox>
            </div>

            <div className='form__row'>
              <LabelBox text='업종'>
                <Select placeholder='선택하세요' options={select_business} />
              </LabelBox>
            </div>

            <div className='form__row col2'>
              <LabelBox text='부서명(영문)'>
                <InputBox id='departmentEng' />
              </LabelBox>
              <LabelBox text='부서명(한글)'>
                <InputBox id='departmentKor' />
              </LabelBox>
            </div>

            <div className='form__row col2'>
              <LabelBox text='직책(영문)'>
                <InputBox id='positionEng' />
              </LabelBox>
              <LabelBox text='직책(한글)'>
                <InputBox id='positionKor' />
              </LabelBox>
            </div>

            <div className='form__row'>
              <div className='form__box'>
                <label htmlFor='' className='form__tit'>
                  이메일
                </label>
                <div className='form__item'>
                  <InputBox type='email' id='input4' for='input4' buttonText='이메일 인증' />
                </div>
                {/* [Dev] hidden class 추가시 비노출 */}
                <p className='alert--text hidden'>
                  ACAMS 회원번호의 계정에 등록된 이메일로 신청 가능하며, <br />
                  입력한 이메일의 소유자 인증이 필요 합니다.
                </p>
                <p className='alert--text'>
                  ACAMS 회원번호의 계정에 등록된 이메일로 신청 가능하며, <br />
                  입력한 이메일의 소유자 인증이 필요 합니다.
                </p>
              </div>
            </div>

            <div className='form__row'>
              <div className='form__box'>
                <label htmlFor='' className='form__tit'>
                  인증숫자
                </label>
                <div className='form__item'>
                  <InputBox
                    type='number'
                    id='input4'
                    for='input4'
                    placeholder='인증숫자 6자리를 입력해주세요'
                    // [Dev] 인증완료시 text 변경 -- 인증 완료
                    buttonText='인증코드 입력'
                    timer={true}
                  />
                </div>
              </div>
            </div>

            <div className='form__row'>
              <LabelBox text='유선번호'>
                <InputBox id='membershipNumber' />
              </LabelBox>
            </div>

            <div className='form__row'>
              <LabelBox text='휴대폰번호'>
                <InputBox id='membershipNumber' />
              </LabelBox>
            </div>

            <div className='form__row'>
              <LabelBox text='개인이메일'>
                <InputBox id='membershipNumber' />
              </LabelBox>
            </div>

            <div className='form__row'>
              <LabelBox text='영문호칭'>
                <Select placeholder='선택하세요' options={select_title} />
              </LabelBox>
            </div>
          </div>

          <div className='form__group'>
            <strong className='form__title'>프로그램 신청 내용</strong>
            <div className='form__row'>
              <LabelBox text='자격증'>
                <CertificationSelectContainer onChange={handleChangeCertification} selected={selectedCertification} />
              </LabelBox>
            </div>

            <div className='form__row'>
              <LabelBox text='응시언어'>
                <LanguageRadio
                  languages={selectedCertification?.languages}
                  onChange={handleChangeLanguage}
                  selectedLanguage={selectedLanguage}
                />
              </LabelBox>
            </div>

            <div className='form__row'>
              <LabelBox text='패키지'>
                <PackageRadio selectedPackage={selectedPackage} onChange={handleChangePackage} />
              </LabelBox>
            </div>

            <div className='form__row'>
              <LabelBox text='멤버쉽'>
                <MembershipRadiosContainer selectedMembership={selectedMembership} onChange={handleChangeMembership} />
              </LabelBox>
            </div>
          </div>

          <div className={`${styles.apply__box} ${styles.priced}`}>
            <strong className={styles.title}>비용</strong>
            <PriceSummary
              certification={{
                privatePrice: selectedCertification?.privatePrice ?? 0,
                publicPrice: selectedCertification?.publicPrice ?? 0,
              }}
              membership={{
                privatePrice: selectedMembership?.privatePrice ?? 0,
                publicPrice: selectedMembership?.publicPrice ?? 0,
              }}
            />
          </div>

          <div className={`${styles.apply__box} ${styles.check}`}>
            <strong className={styles.title}>확인사항</strong>
            <ConfirmCheckBox onChangeCheck={handleChangeSubmitStatus} />
          </div>

          <div className={styles.apply__footer}>
            <Button label='신청하기' publType='primary' disabled={submitStatus} />
          </div>
        </form>
        <Complete />
      </div>
    </>
  );
}

export default ApplyContainer;
