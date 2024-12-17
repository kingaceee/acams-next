import { createRequest, RequestFunction } from './instance';

export interface SendCodeByEmailArgs {
  email: string;
}

export const sendCodeByEmail: RequestFunction<SendCodeByEmailArgs, boolean> = ({ email }) => {
  return createRequest({
    method: 'POST',
    endpoint: '/verification/email',
    body: { target: email },
  });
};

export interface VerifyCodeArgs {
  email: string;
  code: string;
}

export const verifyCode: RequestFunction<VerifyCodeArgs, boolean> = ({ code, email }) => {
  return createRequest({
    method: 'POST',
    endpoint: '/verification',
    body: { target: email, code: code },
  });
};
