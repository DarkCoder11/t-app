import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UserImg } from 'assets';
import { useAppDispatch, useAppSelector } from 'hooks';
import { userSliceSelector } from 'store/slices/usersSlice/selectors';
import { getUserData } from 'store/slices/usersSlice/thunks';
import { InfoContent, Typography } from 'components';
import Loader from 'components/shared/Loader';

import styles from './UserPage.module.scss';

const UserPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { usersInfoLoading, usersInfo, usersInfoError } = useAppSelector(userSliceSelector);

  useEffect(() => {
    if (id) {
      dispatch(getUserData(Number(id)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={styles.container}>
      {usersInfoLoading ? (
        <div className={styles.container__loader}>
          <Loader />
        </div>
      ) : (
        <Fragment>
          {!usersInfoError ? (
            <>
              <div className={styles.container__img}>
                <img src={UserImg} alt='user-img' />
              </div>
              <div className={styles.container__info}>
                <Typography className={styles.container__info__name}>{usersInfo?.name}</Typography>
                <InfoContent title='email' subtitle={usersInfo?.email} />
                <InfoContent title='phone' subtitle={usersInfo?.phone} />
                <div className={styles.container__info__description}>
                  <InfoContent direction='column' title='О себе' subtitle={usersInfo?.username} />
                </div>
              </div>
            </>
          ) : (
            <div>
              <Typography>{"User info doesn't exist"}</Typography>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default UserPage;
