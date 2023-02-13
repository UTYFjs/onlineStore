import React from 'react';
import styles from './Input.module.scss';
interface IInput {
  type?: string;
  placeholder?: string;
}
function Input({ type = 'text', placeholder = 'Search our store' }: IInput) {
  return (
    <input className={styles['form-input-text']} type={type} placeholder={placeholder}></input>
  );
}

export default Input;
