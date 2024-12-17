import { useEffect, useState } from 'react';

import { sendCodeByEmail, verifyCode } from '@/api/verification';

import { isResponseError } from '@/libs/ResponseError';
import { isEmail } from '@/libs/utils';

import EmailVerification, { PropTypes as EmailVerificationPropTypes } from '@/apply/components/EmailVerification';

import { EMAIL_MESSAGE, VERIFY_MESSAGE } from './message';

export interface PropTypes {
  type: 'NEW' | 'EXISTING';
  label: string;
  onChange: ({ email, verified }: { email: string; verified: boolean }) => void;
}

function EmailVerificationContainer({ type, label, onChange }: PropTypes) {
  const [message, setMessage] = useState<{ email: string; verify: string }>({
    email: '',
    verify: '',
  });

  const handleRequestSendCode: EmailVerificationPropTypes['onRequestVerifyCode'] = async (email: string) => {
    if (!isEmail(email)) {
      setMessage(prev => ({ ...prev, email: EMAIL_MESSAGE.INVALID_EMAIL_FORMAT }));
      return false;
    }

    try {
      const result = await sendCodeByEmail({ email });
      setMessage(prev => ({ ...prev, verify: '' }));
      return result;
    } catch (error) {
      if (isResponseError(error)) {
        if (error.code === 'GLOBAL-001') {
          setMessage(prev => ({ ...prev, email: EMAIL_MESSAGE.INVALID_EMAIL_FORMAT }));
          return false;
        }
        if (error.code === 'GLOBAL-999') {
          setMessage(prev => ({ ...prev, email: EMAIL_MESSAGE.EMAIL_SEND_FAILURE }));
          return false;
        }
      }
      throw error;
    }
  };

  const handleRequestVerification: EmailVerificationPropTypes['onVerify'] = async ({ email, code }) => {
    try {
      const result = await verifyCode({ email, code });

      if (result) onChange({ email, verified: true });
      return result;
    } catch (error) {
      if (isResponseError(error)) {
        if (error.code === 'VERIFICATION-001') {
          setMessage(({ ...prev }) => ({ ...prev, verify: VERIFY_MESSAGE.NOT_FOUND }));
          return false;
        }
        if (error.code === 'VERIFICATION-002') {
          setMessage(({ ...prev }) => ({ ...prev, verify: VERIFY_MESSAGE.INVALID_CODE }));
          return false;
        }
        if (error.code === 'VERIFICATION-003') {
          setMessage(({ ...prev }) => ({ ...prev, verify: VERIFY_MESSAGE.EXPIRED_CODE }));
          return false;
        }
      }
      throw error;
    }
  };

  useEffect(() => {
    if (type === 'EXISTING') {
      setMessage({ email: EMAIL_MESSAGE.EXISTING_MEMBER, verify: '' });
    }

    if (type === 'NEW') {
      setMessage({ email: '', verify: '' });
    }
  }, [type]);

  return (
    <EmailVerification
      type={type}
      label={label}
      message={message}
      onRequestVerifyCode={handleRequestSendCode}
      onVerify={handleRequestVerification}
    />
  );
}

export default EmailVerificationContainer;
