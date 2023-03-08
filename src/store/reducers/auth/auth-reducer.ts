import Cookies from 'js-cookie';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { loadUserInfo, loginUser } from './auth-actions';

export interface AuthState {
  loggin: boolean;
  logged: boolean;
  user?: string;
  session?: string;
}

const authCookie = Cookies.get('accessToken');

const initialState: AuthState = {
  loggin: false,
  logged: !!authCookie,
  user: '',
  session: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, payload) => {
      state.session = payload.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loggin = true;
      state.logged = false;
      state.user = '';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loggin = false;
      state.logged = true;
      state.user = action.payload.email;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loggin = false;
      state.logged = false;
      state.user = '';
    });
    builder.addCase(loadUserInfo.pending, (state) => {
      state.user = '';
    });
    builder.addCase(loadUserInfo.fulfilled, (state, action) => {
      state.user = action.payload.email;
    });
    builder.addCase(loadUserInfo.rejected, (state) => {
      state.user = '';
    });
  }
});

export const { setSession } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
