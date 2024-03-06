import { FC, Fragment, useState } from 'react';
import classNames from 'classnames';

import { Button, Typography } from 'components';

import { IInfoContentProps } from './types';
import styles from './InfoContent.module.scss';
import { INITIAL_LENGTH, MAX_LENGTH } from './constant';

const InfoContent: FC<IInfoContentProps> = ({ title, subtitle = '', direction = 'row' }) => {
  const isLengthOver = subtitle.length > MAX_LENGTH;
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const containerClasses = classNames(styles.container, {
    [styles.container_column]: direction === 'column',
  });

  const toggleShowMore = () => setIsShowMore(!isShowMore);

  const truncatedSubtitle = isShowMore
    ? subtitle
    : `${subtitle.slice(INITIAL_LENGTH, MAX_LENGTH)}...`;

  return (
    <div className={containerClasses}>
      <Typography className={styles.container__title}>{title}:</Typography>
      {subtitle && (
        <Fragment>
          <Typography className={styles.container__subtitle}>{truncatedSubtitle}</Typography>
          {isLengthOver && (
            <Button onClick={toggleShowMore}>{isShowMore ? 'Show Less' : 'Show More'}</Button>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default InfoContent;
