import { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';
import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  const buttonClasses = classNames(styles.button, {
    [styles[`button--${variant}`]]: variant === 'primary' || variant === 'secondary',
  });

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
