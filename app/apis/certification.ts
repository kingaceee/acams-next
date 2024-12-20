import { createRequest, RequestFunction } from './instance';

export interface GetCertificationResponse {
  id: string;
  alias: string;
  name: string;
  languages: Array<string>;
  privatePrice: number;
  publicPrice: number;
}

export const getCertifications: RequestFunction<void, Array<GetCertificationResponse>> = () => {
  return createRequest({
    method: 'GET',
    endpoint: '/certifications',
  });
};
