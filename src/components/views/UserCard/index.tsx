import { FC } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { UserIcon } from 'assets/icons';
import { Typography } from 'components/shared';

import { IUserCardProps } from './types';
import styles from './UserCard.module.scss';

const UserCard: FC<IUserCardProps> = ({ user, openPage }) => {
  const { id } = useParams();

  const infoClasses = classNames(styles.container__info, {
    [styles.container__info_active]: Number(id) === user?.id,
  });

  return (
    <div className={styles.container} onClick={() => openPage(user?.id)} role='button'>
      <div className={styles.container__img}>
        <UserIcon />
      </div>
      <div className={infoClasses}>
        <Typography className={styles.container__info__name}>{user?.name}</Typography>
        <Typography className={styles.container__info__email}>{user?.email}</Typography>
      </div>
    </div>
  );
};

export default UserCard;
