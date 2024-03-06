import { FC } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';
import { IInputProps } from './types';

const Input: FC<IInputProps> = ({ size = 'medium', ...rest }) => {
  const inputClasses = classNames(styles.input, {
    [styles[`input--${size}`]]: size === 'small' || size === 'medium' || size === 'large',
  });

  return <input className={inputClasses} {...rest} />;
};

export default Input;
