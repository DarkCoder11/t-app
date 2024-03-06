import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { UserService } from 'api';

export const getUsersList = createAsyncThunk('usersSlice/getUsersList', async () => {
  try {
    const response = await UserService.getUsersRequest();

    return response.data;
  } catch (error) {
    const Error = error as AxiosError;

    throw Error;
  }
});

export const getUserData = createAsyncThunk('usersSlice/getUserData', async (id: number) => {
  try {
    const response = await UserService.getUserInfoRequest(id);

    return response.data;
  } catch (error) {
    const Error = error as AxiosError;

    throw Error;
  }
});
