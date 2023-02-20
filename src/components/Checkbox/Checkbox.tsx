import React from 'react';
import styles from './Checkbox.module.scss';
import cn from 'classnames';

interface ICheckboxProps {
  id: string;
  className?: string;
  label?: string;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// todo переписать id label логику
function Checkbox({ className, id, label, isChecked, onChange }: ICheckboxProps) {
  return (
    <label className={cn(styles.checkbox, className)} htmlFor={label}>
      <input
        defaultChecked={isChecked}
        id={label}
        name={id}
        type={'checkbox'}
        value={label}
        onChange={onChange}
      />
      {label && <span> {label} </span>}
    </label>
  );
}

export default Checkbox;
