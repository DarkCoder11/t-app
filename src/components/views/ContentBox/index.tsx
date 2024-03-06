import { FC } from 'react';
import classNames from 'classnames';

import { IContentBoxProps } from './types';
import styles from './ContentBox.module.scss';

const ContentBox: FC<IContentBoxProps> = ({ children, className, withBorder = false }) => {
  const containerClasses = classNames(styles.container, className, {
    [styles.container__border]: withBorder,
  });

  return <div className={containerClasses}>{children}</div>;
};

export default ContentBox;
