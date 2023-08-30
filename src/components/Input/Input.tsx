import React from 'react';
import styles from './Input.module.scss';
interface IInput {
  type?: string;
  placeholder?: string;
  isDisable?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input({
  type = 'text',
  placeholder = 'Search our store',
  isDisable = false,
  value,
  onChange,
}: IInput) {
  return (
    <input
      className={styles['form-input-text']}
      type={type}
      placeholder={placeholder}
      disabled={isDisable}
      defaultValue={value}
      onChange={onChange}
    ></input>
  );
}

export default Input;
