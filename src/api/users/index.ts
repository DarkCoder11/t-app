import client from 'api/client';
import { endpoints } from 'api/endpoints';

export const getUsersRequest = () => client.get(endpoints.UsersService.getUsers());

export const getUserInfoRequest = (id: number) =>
  client.get(endpoints.UsersService.getUsersInfo(id));
