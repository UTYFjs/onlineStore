import React, { CSSProperties } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
interface IButton {
  content: string;
  onClick?: () => void;
  className?: string;
  customStyles?: CSSProperties;
}
function Button({ content, onClick, className, customStyles }: IButton) {
  const classNames = cn(styles.button, className && styles[className]);
  return (
    <button className={classNames} onClick={onClick} style={customStyles}>
      {' '}
      {content}
    </button>
  );
}

export default Button;
