import styles from './index.module.scss';

import { useEffect, useRef, useState } from 'react';
import cs from 'clsx';

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

  const { value: isActiveVerify, setTrue: activeVerify } = useBoolean(false);
  const { value: isVerify, setTrue: successVerify, setFalse: notVerify } = useBoolean(false);
  const { value: isExpired, setTrue: expire, setFalse: refresh } = useBoolean(false);

  const [time, setTime] = useState(0);

  const timerEventId = useRef<NodeJS.Timeout>(null);

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEmail(e.target.value);
    if (isVerify) notVerify();
  };

  const handleChangeCode: React.ChangeEventHandler<HTMLInputElement> = e => {
    const code = e.target.value;

    if (Number.isFinite(Number(code)) && code.length <= DEFAULT_LENGTH) setCode(e.target.value);
  };

  const handleClickEmailButton = async () => {
    const result = await onRequestVerifyCode(email);
    if (!result) return;

    setTime(DEFAULT_TIME);
    setCode('');
    activeVerify();
    refresh();

    if (timerEventId.current) clearInterval(timerEventId.current);
    timerEventId.current = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
  };

  const handleClickCodeButton = async () => {
    const result = await onVerify({ email, code });

    if (result) {
      if (timerEventId.current) clearInterval(timerEventId.current);
      successVerify();
      setTime(0);
    }
  };

  useEffect(() => {
    if (time === 0) {
      if (timerEventId.current) {
        if (!isVerify) expire();
        clearInterval(timerEventId.current);
      }
    }
  }, [expire, isVerify, time]);

  const timer = `
    ${Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0')}
    :${Math.floor(time % 60)
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
            disabled={isVerify}
            onChange={handleChangeEmail}
            button={
              <button type='button' className='btn default' disabled={isVerify} onClick={handleClickEmailButton}>
                이메일 인증
              </button>
            }
          />
        </LabelBox>
      </div>
      <div className={cs('form__row', { hidden: !isActiveVerify })}>
        <LabelBox text='인증숫자' message={<p className={cs([styles.alert], 'alert--text')}>{message.verify}</p>}>
          <InputBox
            type='number'
            placeholder='인증숫자 6자리를 입력해주세요'
            value={code}
            onChange={handleChangeCode}
            disabled={isVerify || isExpired}
            button={
              <button type='button' className='btn default' disabled={isVerify || isExpired} onClick={handleClickCodeButton}>
                {(() => {
                  if (isExpired) return '인증코드 만료';
                  if (isVerify) return '인증 완료';
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
