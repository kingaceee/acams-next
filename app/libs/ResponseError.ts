export interface ApiErrorResponse {
  code: string;
  message: string;
}

class ResponseError {
  readonly code: string;
  readonly message: string;

  constructor(error: ApiErrorResponse) {
    this.code = error.code;
    this.message = error.message;
  }
}

export default ResponseError;

export function isApiErrorResponse(arg: unknown): arg is ApiErrorResponse {
  return typeof arg === 'object' && arg !== null && 'code' in arg && 'message' in arg;
}

export function isResponseError(arg: unknown): arg is ResponseError {
  return arg instanceof ResponseError;
}
