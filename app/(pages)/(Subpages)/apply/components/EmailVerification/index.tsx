import styles from './index.module.scss';

import { useCallback, useEffect, useRef, useState } from 'react';
import cs from 'clsx';
import _ from 'lodash';

import useBoolean from '@/hooks/useBoolean';

import InputBox from '@/components/input/InputBox';

import LabelBox from '@/apply/components/LabelBox';

const DEFAULT_TIME = 180; // 3분
const DEFAULT_LENGTH = 6;

export interface PropTypes {
  type: 'NEW' | 'EXISTING';
  message: { email: string; verify: string };
  label: string;
  onRequestVerifyCode: (email: string) => Promise<boolean>;
  onVerify: ({ email, code }: { email: string; code: string }) => Promise<boolean>;
}

function EmailVerification({ message, label, onRequestVerifyCode, onVerify }: PropTypes) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const { value: activeVerify, setTrue: showVerify } = useBoolean(false);

  const { value: isVerified, setTrue: successVerify, setFalse: notVerify } = useBoolean(false);
  const { value: isExpired, setTrue: expire, setFalse: refresh } = useBoolean(false);

  const [startDate, setStartDate] = useState<number>();
  const [showTimer, setShowTimer] = useState(0);

  const timerEventId = useRef<NodeJS.Timeout>(null);

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEmail(e.target.value);
    if (isVerified) notVerify();
  };

  const handleChangeCode: React.ChangeEventHandler<HTMLInputElement> = e => {
    const code = e.target.value;

    if (Number.isFinite(Number(code)) && code.length <= DEFAULT_LENGTH) setCode(e.target.value);
  };

  const handleClickEmailButton = _.debounce(
    async () => {
      const result = await onRequestVerifyCode(email);
      if (!result) return;

      setStartDate(Date.now());
      setShowTimer(DEFAULT_TIME);
      setCode('');
      showVerify();
      refresh();
    },
    3000,
    { leading: true, trailing: false }
  );

  const handleClickCodeButton = useCallback(async () => {
    const result = await onVerify({ email, code });

    if (result) {
      if (timerEventId.current) clearInterval(timerEventId.current);
      successVerify();
      setStartDate(undefined);
      setShowTimer(0);
    }
  }, [email, code, onVerify, successVerify]);

  const setTimerEvent = useCallback(() => {
    if (startDate) {
      if (timerEventId.current) clearInterval(timerEventId.current);

      timerEventId.current = setInterval(() => {
        const result = Math.floor((Date.now() - startDate) / 1000);

        if (result >= DEFAULT_TIME) {
          if (timerEventId.current) clearInterval(timerEventId.current);
          setShowTimer(0);
          expire();
        } else {
          setShowTimer(DEFAULT_TIME - result);
        }
      }, 1000);
    }
  }, [expire, startDate]);

  useEffect(() => {
    if (showTimer === 0) {
      if (timerEventId.current) {
        if (!isVerified) expire();
        clearInterval(timerEventId.current);
      }
    }
  }, [showTimer, isVerified, expire]);

  useEffect(() => {
    const tempFunc = () => {
      if (document.visibilityState === 'visible') {
        setTimerEvent();
      }
    };

    setTimerEvent();
    document.addEventListener('visibilitychange', tempFunc);

    return () => {
      if (timerEventId.current) clearInterval(timerEventId.current);
      document.removeEventListener('visibilitychange', tempFunc);
    };
  }, [setTimerEvent]);

  const timer = `
    ${Math.floor((showTimer % 3600) / 60)
      .toString()
      .padStart(2, '0')}
    :${Math.floor(showTimer % 60)
      .toString()
      .padStart(2, '0')}`;

  return (
    <>
      <div className='form__row'>
        <LabelBox text={label} message={<p className={cs([styles.alert], 'alert--text')}>{message.email}</p>}>
          <InputBox
            type='email'
            id='email'
            value={email}
            disabled={isVerified}
            onChange={handleChangeEmail}
            button={
              <button type='button' className='btn default' disabled={isVerified} onClick={handleClickEmailButton}>
                {isVerified ? '이메일 인증 완료' : '이메일 인증'}
              </button>
            }
          />
        </LabelBox>
      </div>
      <div className={cs('form__row', { hidden: !activeVerify })}>
        <LabelBox text='인증숫자' message={<p className={cs([styles.alert], 'alert--text')}>{message.verify}</p>}>
          <InputBox
            type='number'
            placeholder='인증숫자 6자리를 입력해주세요'
            value={code}
            onChange={handleChangeCode}
            disabled={isVerified || isExpired}
            button={
              <button type='button' className='btn default' disabled={isVerified || isExpired} onClick={handleClickCodeButton}>
                {(() => {
                  if (isExpired) return '인증코드 만료';
                  if (isVerified) return '인증 완료';
                  return '인증코드 입력';
                })()}
              </button>
            }
            timer={timer}
          />
        </LabelBox>
      </div>
    </>
  );
}

export default EmailVerification;
