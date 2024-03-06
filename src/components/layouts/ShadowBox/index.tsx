import { PropsWithChildren } from 'react';

import Navbar from 'components/views/Navbar';
import { ContentBox } from 'components/views';

import styles from './ShadowBox.module.scss';

const ShadowBox = ({ children }: PropsWithChildren) => (
  <div className={styles.container}>
    <ContentBox withBorder className={styles.container__navbar}>
      <Navbar />
    </ContentBox>
    <ContentBox>{children}</ContentBox>
  </div>
);

export default ShadowBox;
