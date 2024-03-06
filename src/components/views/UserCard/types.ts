import { TUserList } from 'store/slices/usersSlice/types';

export interface IUserCardProps {
  user: TUserList;
  openPage: (id: number) => void;
}
