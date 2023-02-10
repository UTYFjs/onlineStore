import React from 'react';
import styles from './Button.module.scss';
interface IButton {
  content: string;
}
function Button({ content }: IButton) {
  return <button className={styles.button}> {content}</button>;
}

export default Button;
