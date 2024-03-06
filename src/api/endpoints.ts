export const endpoints = {
  UsersService: {
    getUsers: (): string => '/users',
    getUsersInfo: (id: number): string => `/users/${id}`,
  },
};
