import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
interface IButton {
  content: string;
  onClick?: () => void;
  className?: string;
}
function Button({ content, onClick, className }: IButton) {
  const classNames = cn(styles.button, className && styles[className]);
  return (
    <button className={classNames} onClick={onClick}>
      {' '}
      {content}
    </button>
  );
}

export default Button;
