import { Secret, SecretOwner } from './models/secret';
import { handleRequest } from './utils';

export const getSecret = async (uuid: string) => {
  const response = await fetch(`/api/secret/${uuid}`, {
    method: 'GET'
  });
  return handleRequest(response);
};

export const postSecret = async (
  secretCreate: { session: string | undefined } & Secret
) => {
  const response = await fetch(`/api/secret`, {
    method: 'POST',
    body: JSON.stringify(secretCreate),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return handleRequest(response);
};

export const deleteSecret = async (uuid: string) => {
  const response = await fetch(`/api/secret/${uuid}`, {
    method: 'DELETE'
  });
  return handleRequest(response);
};
