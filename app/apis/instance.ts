import axios, { AxiosRequestConfig, Method } from 'axios';

import { API_URL } from '@/constants/url';

import { createSearchParams } from '@/libs/utils';

const instance = axios.create({
  baseURL: API_URL,
});

export interface RequestFunction<Argument = void, Response = void> {
  (args: Argument): Promise<Response>;
}

export interface CreateRequestOptions {
  method: Method;
  endpoint: string;
  body?: { [key: string]: string | number | Blob | File[] | string[] | number[] | undefined };
  params?: { [key: string]: string | number | Array<string> | Array<number> | undefined };
}

export const createRequest = async <T = void>({ method, endpoint, body, params }: CreateRequestOptions): Promise<T> => {
  const { data } = await instance({
    method,
    url: `${API_URL}${endpoint}${createSearchParams(params)}`,
    data: body,
  });

  if (data.code !== 'OK') {
    throw data;
  }

  return data.data;
};
