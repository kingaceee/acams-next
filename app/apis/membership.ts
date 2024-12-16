import { createRequest, CreateRequestOptions, RequestFunction } from './instance';

export interface GetmembershipResponse {
  id: string;
  name: string;
  privatePrice: number;
  publicPrice: number;
}

export const getMemberships: RequestFunction<void, Array<GetmembershipResponse>> = () => {
  return createRequest({
    method: 'GET',
    endpoint: '/memberships',
  });
};
