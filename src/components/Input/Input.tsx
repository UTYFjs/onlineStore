import React, { useEffect, useRef } from 'react';
import styles from './Input.module.scss';
interface IInput {
  type?: string;
  placeholder?: string;
  isDisable?: boolean;
  isFocus?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}
function Input({
  type = 'text',
  placeholder = 'Search our store',
  isDisable = false,
  isFocus = false,
  value,
  onChange,
  onBlur,
}: IInput) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      className={styles['form-input-text']}
      type={type}
      placeholder={placeholder}
      disabled={isDisable}
      defaultValue={value}
      onChange={onChange}
      onBlur={onBlur}
    ></input>
  );
}

export default Input;
