import styles from './index.module.scss';

import React, { FormEventHandler, useCallback, useMemo, useState } from 'react';
import cs from 'clsx';

import { nullCheck } from '@/libs/utils';

import useBoolean from '@/hooks/useBoolean';

import Radio from '@/components/input/Radio';
import Button from '@/components/buttons/Button';

import LabelBox from '@/apply/components/LabelBox';
import LanguageRadio, { PropTypes as LanguageRadioPropTypes } from '@/apply/components/LanguageRadio';
import PackageRadio, { PropTypes as PackageRadioPropTypes } from '@/apply/components/PackageRadio';
// import PriceSummary from '@/apply/components/PriceSummary';
import ConfirmCheckBox, { PropTypes as ConfirmCheckBoxPropTypes } from '@/apply/components/ConfirmCheckBox';
import ExistingMemberForm, { Info as ExistingMemberFormInfo } from '@/apply/components/ExistingMemberForm';
import NewMemberForm, { Info as NewMemberFormInfo } from '@/apply/components/NewMemberForm';

import CertificationSelectContainer, {
  PropTypes as CertificationSelectContainerPropTypes,
} from '@/apply/containers/CertificationSelectContainer';
import MembershipRadiosContainer, { PropTypes as MembershipRadioContainerPropTypes } from '@/apply/containers/MembershipRadiosContainer';

export interface Info {
  type: 'NEW' | 'EXISTING';
  membershipNumber: string;
  lastNameEng: string;
  firstNameEng: string;
  lastNameKor: string;
  firstNamekor: string;
  companyEng: string;
  companyKor: string;
  departmentEng: string;
  departmentKor: string;
  industry: string;
  positionEng: string;
  positionKor: string;
  officeNumber: string;
  phoneNumber: string;
  subEmail: string;
  email: string;
  honorific: string;
  certificationId?: string;
  language?: string;
  package?: string;
  membershipId?: string;
}

export interface PropTypes {
  onSubmit: (info: Info) => Promise<void>;
}

function ApplyForm({ onSubmit }: PropTypes) {
  const [type, setType] = useState<'NEW' | 'EXISTING'>('NEW');

  const [memberInfo, setMemberInfo] = useState<ExistingMemberFormInfo & NewMemberFormInfo>({
    membershipNumber: '',
    lastNameEng: '',
    firstNameEng: '',
    lastNameKor: '',
    firstNamekor: '',
    companyEng: '',
    companyKor: '',
    departmentEng: '',
    departmentKor: '',
    industry: '',
    positionEng: '',
    positionKor: '',
    officeNumber: '',
    phoneNumber: '',
    subEmail: '',
    email: '',
    verified: false,
    honorific: '',
  });

  const [selectedCertification, setSelectedCertification] = useState<CertificationSelectContainerPropTypes['selected']>();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageRadioPropTypes['selectedLanguage']>();
  const [selectedPackage, setSelectedPackage] = useState<PackageRadioPropTypes['selectedPackage']>();
  const [selectedMembership, setSelectedMembership] = useState<MembershipRadioContainerPropTypes['selectedMembership']>();

  const { value: confirmCheckStatus, setFalse: unCheck, setTrue: allCheck } = useBoolean(false);

  const initInput = () => {
    setMemberInfo({
      membershipNumber: '',
      lastNameEng: '',
      firstNameEng: '',
      lastNameKor: '',
      firstNamekor: '',
      companyEng: '',
      companyKor: '',
      departmentEng: '',
      departmentKor: '',
      industry: '',
      positionEng: '',
      positionKor: '',
      officeNumber: '',
      phoneNumber: '',
      subEmail: '',
      email: '',
      verified: false,
      honorific: '',
    });

    setSelectedCertification(undefined);
    setSelectedLanguage(undefined);
    setSelectedPackage(undefined);
    setSelectedMembership(undefined);
  };

  const handleChangeType = (type: 'NEW' | 'EXISTING') => {
    setType(type);
    initInput();
  };

  const handleChangeInfo = (value: Partial<ExistingMemberFormInfo | NewMemberFormInfo>) => {
    setMemberInfo(prevInfo => ({ ...prevInfo, ...value }));
  };

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

  const handleChangeConfirmCheck: ConfirmCheckBoxPropTypes['onChangeCheck'] = useCallback(
    value => {
      if (value) allCheck();
      else unCheck();
    },
    [allCheck, unCheck]
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    if (!submitStatus) return;

    await onSubmit({
      ...memberInfo,
      type: type,
      certificationId: selectedCertification?.id,
      language: selectedLanguage,
      package: selectedPackage,
      membershipId: selectedMembership?.id,
    });
  };

  const submitStatus = useMemo(() => {
    if (
      type === 'EXISTING' &&
      !nullCheck({ data: { ...memberInfo }, keys: ['membershipNumber', 'lastNameEng', 'firstNameEng', 'email'] })
    ) {
      return false;
    }

    if (
      type === 'NEW' &&
      !nullCheck({
        data: { ...memberInfo },
        keys: [
          'lastNameEng',
          'firstNameEng',
          'lastNameKor',
          'firstNamekor',
          'companyEng',
          'companyKor',
          'departmentEng',
          'departmentKor',
          'industry',
          'positionEng',
          'positionKor',
          'officeNumber',
          'phoneNumber',
          'subEmail',
          'email',
          'honorific',
        ],
      })
    ) {
      return false;
    }

    if (confirmCheckStatus && memberInfo.verified) {
      if (!selectedCertification?.id && !selectedMembership?.id) {
        return false;
      }

      if (selectedCertification?.id && (!selectedLanguage || !selectedPackage)) {
        return false;
      }

      return true;
    }

    return false;
  }, [type, memberInfo, confirmCheckStatus, selectedPackage, selectedCertification, selectedMembership?.id, selectedLanguage]);

  return (
    <form className={`${styles.apply__form}`} onSubmit={handleSubmit}>
      <div className='form__group'>
        <strong className='form__title'>신청자 정보</strong>

        <div className='form__row'>
          <LabelBox text='ACAMS 가입 구분'>
            <div className='radio__box'>
              <Radio name='type' id='new' label='신규가입' onChange={() => handleChangeType('NEW')} checked={type === 'NEW'} />
              <Radio
                name='type'
                id='existing'
                label='기존 ACAMS 회원'
                onChange={() => handleChangeType('EXISTING')}
                checked={type === 'EXISTING'}
              />
            </div>
          </LabelBox>
        </div>
        {type === 'NEW' && <NewMemberForm info={{ ...memberInfo }} onChange={handleChangeInfo} />}
        {type === 'EXISTING' && <ExistingMemberForm info={{ ...memberInfo }} onChange={handleChangeInfo} />}
      </div>

      <div className='form__group'>
        <strong className='form__title'>프로그램 신청 내용</strong>
        <div className='form__row'>
          <LabelBox text='자격증'>
            <CertificationSelectContainer onChange={handleChangeCertification} selected={selectedCertification} />
          </LabelBox>
        </div>

        {selectedCertification && (
          <div className='form__row'>
            <LabelBox text='응시언어'>
              <LanguageRadio
                languages={selectedCertification?.languages}
                onChange={handleChangeLanguage}
                selectedLanguage={selectedLanguage}
              />
            </LabelBox>
          </div>
        )}

        {selectedCertification && (
          <div className='form__row'>
            <LabelBox text='패키지'>
              <PackageRadio selectedPackage={selectedPackage} onChange={handleChangePackage} />
            </LabelBox>
          </div>
        )}

        <div className='form__row'>
          <LabelBox text='멤버쉽' message={<p className={cs('alert--text')}>자격증 신청시 멤버십을 반드시 보유해야 합니다.</p>}>
            <MembershipRadiosContainer type={type} selectedMembership={selectedMembership} onChange={handleChangeMembership} />
          </LabelBox>
        </div>
      </div>

      {/* <div className={`${styles.apply__box} ${styles.priced}`}>
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
      </div> */}

      <div className={`${styles.apply__box} ${styles.benefit}`}>
        <strong className={styles.title}>할인 혜택</strong>
        <div className={styles.desc}>
          <p>AML HUB를 통해 ACAMS 프로그램 신청 시</p>
          <p>공식 가격보다 10% 할인된 가격으로 결제하실 수 있습니다.</p>
          <p>(공공기관 종사자는 5% 할인된 가격으로 결제하실 수 있습니다) </p>
          <p>결제 절차는 ACAMS에서 직접 진행됩니다.</p>
        </div>
      </div>

      <div className={`${styles.apply__box} ${styles.check}`}>
        <strong className={styles.title}>확인사항</strong>
        <ConfirmCheckBox onChangeCheck={handleChangeConfirmCheck} />
      </div>

      <div className={styles.apply__footer}>
        <Button type='submit' label='신청하기' publType='primary' disabled={!submitStatus} />
      </div>
    </form>
  );
}

export default ApplyForm;
