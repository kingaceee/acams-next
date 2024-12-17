'use client';

import styles from './index.module.scss';

import { useEffect, useRef, useState, createContext } from 'react';

import { Language, PackageType, registEnrollment, RegistEnrollmentBaseArgs } from '@/api/enrollment';

import { isEmail, isPhoneNumber } from '@/libs/utils';

import Complete from '@/apply/components/Complete';
import SideInfo from '@/apply/components/SideInfo';
import ApplyForm, { PropTypes as ApplyFormPropTypes } from '@/apply/components/ApplyForm';

export const ApplyErrorContext = createContext({
  error: {
    id: '',
    message: '',
  },
  initError: () => {},
});

function ApplyContainer() {
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState({ id: '', message: '' });

  const formWrapperRef = useRef<HTMLDivElement>(null);

  const initError = () => {
    setError({ id: '', message: '' });
  };

  const handleSubmit: ApplyFormPropTypes['onSubmit'] = async data => {
    const requestData: RegistEnrollmentBaseArgs = {
      email: data.email,
      lastNameEng: data.lastNameEng,
      firstNameEng: data.firstNameEng,
      certificationId: data.certificationId,
      language: data.language as Language,
      packageType: data.package as PackageType,
      membershipId: data.membershipId,
    };

    try {
      if (data.type === 'EXISTING') {
        if (data.membershipNumber.length !== 10) {
          setError({ id: 'membershipNumber', message: 'ACAMS 회원번호는 10자리입니다.' });
          return;
        }

        await registEnrollment({
          ...requestData,
          createType: 'EXISTING',
          membershipNumber: data.membershipNumber,
        });

        setComplete(true);
      }

      if (data.type === 'NEW') {
        if (isPhoneNumber(data.officeNumber)) {
          setError({ id: 'officeNumber', message: '번호 확인 부탁드립니다.' });
          return;
        }

        if (isPhoneNumber(data.phoneNumber)) {
          setError({ id: 'phoneNumber', message: '번호 확인 부탁드립니다.' });
          return;
        }

        if (isEmail(data.subEmail)) {
          setError({ id: 'subEmail', message: '번호 확인 부탁드립니다.' });
          return;
        }

        await registEnrollment({
          ...requestData,
          createType: 'NEW',
          lastNameKor: data.lastNameKor,
          firstNameKor: data.firstNamekor,
          companyNameEng: data.companyEng,
          companyNameKor: data.companyKor,
          industry: data.industry,
          departmentEng: data.departmentEng,
          departmentKor: data.departmentKor,
          positionKor: data.positionKor,
          positionEng: data.positionEng,
          officeNumber: data.officeNumber,
          phoneNumber: data.phoneNumber,
          subEmail: data.subEmail,
          honorific: data.honorific,
        });

        setComplete(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (error.id !== '' && formWrapperRef.current) {
      const input = formWrapperRef.current.querySelector(`input[id="${error.id}"]`);
      if (input) (input as HTMLInputElement).focus();
    }
  }, [error]);

  return (
    <>
      <ApplyErrorContext.Provider value={{ error, initError }}>
        <div className={styles.apply} ref={formWrapperRef}>
          <SideInfo />
          {!complete && <ApplyForm onSubmit={handleSubmit} />}
          {complete && <Complete />}
        </div>
      </ApplyErrorContext.Provider>
    </>
  );
}

export default ApplyContainer;
