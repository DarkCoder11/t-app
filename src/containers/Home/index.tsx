import { Typography } from 'components';

import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.container}>
    <Typography className={styles.container__title}>
      Выберите сотрудника, чтобы посмотреть его профиль
    </Typography>
  </div>
);

export default Home;
