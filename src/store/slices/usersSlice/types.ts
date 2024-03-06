export type TInitialState = {
  users: TUserList[];
  usersInfoLoading: boolean;
  usersListLoading: boolean;
  usersInfo: TUserList | null;
  usersInfoError: Error | null | string;
  usersListError: Error | null | string;
};

export type TUserList = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  website: string;
  company: TCompany;
};

export type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TGeo;
};

export type TGeo = {
  lat: string;
  lng: string;
};
