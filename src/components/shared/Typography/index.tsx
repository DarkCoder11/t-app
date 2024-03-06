import React, { FC } from 'react';
import classNames from 'classnames';

import { ITypographyProps } from './types';
import styles from './Typography.module.scss';

const Typography: FC<ITypographyProps> = ({ variant = 'body1', children, className, ...rest }) => {
  const Tag = variant.startsWith('h') ? variant : 'p';

  const typographyClasses = classNames(styles.container, className, {
    [styles[`container__${variant}`]]: variant,
  });

  return React.createElement(Tag, { ...rest, className: typographyClasses }, children);
};

export default Typography;
