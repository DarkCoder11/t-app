import { createSlice } from '@reduxjs/toolkit';

import { getUserData, getUsersList } from './thunks';

import type { TInitialState } from './types';

const initialState: TInitialState = {
  users: [],
  usersInfo: null,
  usersInfoError: null,
  usersListError: null,
  usersInfoLoading: false,
  usersListLoading: false,
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    clearState: (state) => {
      state.users = [];
      state.usersInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersList.pending, (state) => {
        state.usersListLoading = true;
        state.usersListError = null;
      })
      .addCase(getUsersList.fulfilled, (state, action) => {
        state.usersListLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsersList.rejected, (state, action) => {
        state.usersListLoading = false;
        state.usersListError = action.error.message as string;
      })
      .addCase(getUserData.pending, (state) => {
        state.usersInfoLoading = true;
        state.usersInfoError = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.usersInfoLoading = false;
        state.usersInfo = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.usersInfoLoading = false;
        state.usersInfoError = action.error.message as string;
      });
  },
});

export const { clearState } = usersSlice.actions;

export default usersSlice.reducer;
