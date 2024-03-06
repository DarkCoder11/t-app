import { Typography } from 'components';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <Typography variant='h1' className={styles.container__title}>
      Жилфонд
    </Typography>
    <Typography variant='p' className={styles.container__subtitle}>
      Пользователь
    </Typography>
  </header>
);

export default Header;
