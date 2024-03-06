import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'types';
import { clearState } from 'store/slices/usersSlice';
import { getUsersList } from 'store/slices/usersSlice/thunks';
import { useAppDispatch, useAppSelector, useInput } from 'hooks';
import { userSliceSelector } from 'store/slices/usersSlice/selectors';
import { Typography, Input, UserCard, Loader, Button, ScrollLayout } from 'components';

import styles from './Navbar.module.scss';
import { INITIAL_LENGTH, MAX_LENGTH, containerLetters, containerNumbers } from './constant';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { users, usersListLoading, usersListError } = useAppSelector(userSliceSelector);

  const { value, handleChange, debouncedValue } = useInput({ initialValue: '' });

  const [displayedUsers, setDisplayedUsers] = useState<number>(MAX_LENGTH);

  const isContainValidValue =
    containerLetters.test(debouncedValue) || containerNumbers.test(debouncedValue);

  const errorMessage =
    usersListError && typeof usersListError === 'string' ? usersListError : 'ничего не найдено';

  const notFound = debouncedValue?.length ? errorMessage : 'начните поиск';

  const loadMoreHandler = () => {
    setDisplayedUsers((prevDisplayedUsers) => prevDisplayedUsers + MAX_LENGTH);
  };

  const foundedUsers = useMemo(() => {
    const searchTerms = debouncedValue.split(',').map((term) => term.trim().toLowerCase());

    return users?.filter((user) => {
      return searchTerms.some((searchTerm) => {
        const isMatchByName = user.name.trim().toLowerCase().includes(searchTerm);
        const isMatchById = user.id.toString() === searchTerm.toString();

        return isMatchByName || isMatchById;
      });
    });
  }, [users, debouncedValue]);

  const openPage = (id: number) => navigate(`/user-page/${id}`);

  const usersList = foundedUsers
    ?.slice(INITIAL_LENGTH, displayedUsers)
    ?.map((user) => <UserCard key={user?.id} openPage={openPage} user={user} />);

  const isDataEmpty = !usersList?.length;

  const clearAndNavigate = () => {
    dispatch(clearState());
    navigate(Routes.Home);
  };

  useEffect(() => {
    if (isContainValidValue && debouncedValue?.trim()?.length === 1) {
      dispatch(getUsersList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    if (debouncedValue?.length === 0) {
      clearAndNavigate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className={styles.container}>
      <div className={styles.container__search}>
        <Typography className={styles.container__search__title}>Поиск сотрудника</Typography>
        <Input placeholder='Введите Id или имя' onChange={handleChange} value={value} />
      </div>
      <div className={styles.container__list}>
        <Typography className={styles.container__search__title}>Результаты</Typography>

        <ScrollLayout className={styles.container__list__scroll}>
          <div className={styles.container__list__items}>
            {usersListLoading ? (
              <div className={styles.container__list__items__loading}>
                <Loader />
              </div>
            ) : isDataEmpty ? (
              <Typography className={styles.container__list__items__empty}>{notFound}</Typography>
            ) : (
              <>
                {usersList}
                {foundedUsers && displayedUsers < foundedUsers.length && (
                  <div className={styles.container__list__items__more}>
                    <Button variant='secondary' onClick={loadMoreHandler}>
                      Load More
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </ScrollLayout>
      </div>
    </div>
  );
};

export default Navbar;
