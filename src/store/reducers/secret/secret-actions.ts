import { createAsyncThunk } from '@reduxjs/toolkit';
import { Secret, SecretOwner } from '../../../services/models/secret';
import { deleteSecret, getSecret, postSecret } from '../../../services/secret';
import { RootState } from '../../store';

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
  async (secret: Secret, { getState }) => {
    try {
      const state = <RootState>getState();
      const createResponse = await postSecret({
        ...secret,
        session: state.auth.session
      });
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
