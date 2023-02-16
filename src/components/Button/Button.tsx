import React from 'react';
import styles from './Button.module.scss';
interface IButton {
  content: string;
  handle?: () => void;
}
function Button({ content, handle }: IButton) {
  return (
    <button className={styles.button} onClick={handle}>
      {' '}
      {content}
    </button>
  );
}

export default Button;
