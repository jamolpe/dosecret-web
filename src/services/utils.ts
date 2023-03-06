export const API_BASE = 'http://localhost:3001';
export const ERROR_AUTH = 'NOT_AUTH';

export interface ApiResponse<T> {
  body: T;
  code: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleRequest = (response: Response): ApiResponse<any> => {
  if ([403, 401].includes(response.status)) {
    const err = new Error('Not authorized');
    err.name = ERROR_AUTH;
    throw err;
  }
  if (!response.ok) {
    throw new Error('request error happened');
  }
  return { body: response.json(), code: response.status };
};
