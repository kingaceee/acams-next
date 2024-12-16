import { createRequest, CreateRequestOptions, RequestFunction } from './instance';

export interface SendCodeByEmailArgs {
  email: string;
}

export const sendCodeByEmail: RequestFunction<SendCodeByEmailArgs, boolean> = body => {
  return createRequest({
    method: 'POST',
    endpoint: '/verification/email',
    body: { ...body },
  });
};

export interface VerifyCodeArgs {
  email: string;
  code: string;
}

export const verifyCode: RequestFunction<VerifyCodeArgs, boolean> = body => {
  return createRequest({
    method: 'POST',
    endpoint: '/verification',
    body: { ...body },
  });
};
