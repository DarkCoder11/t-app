export type RoutesProps = {
  path: string;
  component: JSX.Element;
} & Partial<{
  inLayout: boolean;
}>;

export enum Routes {
  Error = '*',
  Home = '/',
  UserPage = '/user-page/:id',
}
