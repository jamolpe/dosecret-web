import { createAsyncThunk } from '@reduxjs/toolkit';
import { Secret } from '../../../services/models/secret';
import { deleteSecret, getSecret, postSecret } from '../../../services/secret';

export const loadSecret = createAsyncThunk(
  'secret/loadSecret',
  async (uuid: string) => {
    try {
      const secretResponse = await getSecret(uuid);
      return secretResponse.body;
    } catch (error) {
      console.log(`error ${error}`);
      throw error;
    }
  }
);

export const createSecret = createAsyncThunk(
  'secret/createSecret',
  async (secret: Secret) => {
    try {
      const createResponse = await postSecret(secret);
      return createResponse.body;
    } catch (error) {
      console.log(`error ${error}`);
      throw error;
    }
  }
);

export const removeSecret = createAsyncThunk(
  'secret/removeSecret',
  async (uuid: string) => {
    try {
      const deleteResponse = await deleteSecret(uuid);
      return deleteResponse.body;
    } catch (error) {
      console.log(`error ${error}`);
      throw error;
    }
  }
);
