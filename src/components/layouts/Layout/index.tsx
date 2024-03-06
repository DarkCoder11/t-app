import { FC } from 'react';

import { Header, ShadowBox } from 'components';

import styles from './Layout.module.scss';

import type { TLayoutProps } from './types';

const Layout: FC<TLayoutProps> = ({ children, inLayout }) => (
  <>
    {inLayout ? (
      <main className={styles.container}>
        <Header />
        <ShadowBox>{children}</ShadowBox>
      </main>
    ) : (
      children
    )}
  </>
);

export default Layout;
