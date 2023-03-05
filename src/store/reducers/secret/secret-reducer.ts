import { createSlice } from '@reduxjs/toolkit';
import { Secret } from '../../../services/models/secret';
import { createSecret, loadSecret, removeSecret } from './secret-actions';

export interface SecretState {
  creating: boolean;
  loading: boolean;
  removing: boolean;
  secret: Secret | null;
  createdUuid: string | null;
}

const initialState: SecretState = {
  creating: false,
  loading: false,
  removing: false,
  secret: null,
  createdUuid: null
};

export const secretSlice = createSlice({
  name: 'secret',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadSecret.pending, (state) => {
      state.loading = true;
      state.secret = null;
    });
    builder.addCase(loadSecret.fulfilled, (state, action) => {
      state.loading = false;
      state.secret = action.payload;
    });
    builder.addCase(loadSecret.rejected, (state) => {
      state.loading = false;
      state.secret = null;
    });
    builder.addCase(createSecret.pending, (state) => {
      state.creating = true;
      state.createdUuid = null;
    });
    builder.addCase(createSecret.fulfilled, (state, action) => {
      state.creating = false;
      state.createdUuid = action.payload;
    });
    builder.addCase(createSecret.rejected, (state) => {
      state.creating = false;
      state.createdUuid = null;
    });
    builder.addCase(removeSecret.pending, (state) => {
      state.removing = true;
    });
    builder.addCase(removeSecret.fulfilled, (state) => {
      state.removing = false;
    });
    builder.addCase(removeSecret.rejected, (state) => {
      state.removing = false;
    });
  }
});
