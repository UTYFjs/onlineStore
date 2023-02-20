import React from 'react';
import styles from './Button.module.scss';
interface IButton {
  content: string;
  onClick?: () => void;
}
function Button({ content, onClick }: IButton) {
  return (
    <button className={styles.button} onClick={onClick}>
      {' '}
      {content}
    </button>
  );
}

export default Button;
