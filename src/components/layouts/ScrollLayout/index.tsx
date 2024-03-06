import { FC } from 'react';
import classNames from 'classnames';

import styles from './ScrollLayout.module.scss';
import { IScrollLayoutProps } from './types';

const ScrollLayout: FC<IScrollLayoutProps> = ({ children, className }) => (
  <div className={classNames(styles.container, className)}>{children}</div>
);

export default ScrollLayout;
