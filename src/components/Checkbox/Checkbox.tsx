import React from 'react';
import styles from './Checkbox.module.scss';
import cn from 'classnames';

interface ICheckboxProps {
  name: string;
  className?: string;
  label?: string;
  textLabel?: string;
  isCheckedDefault?: boolean;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// todo переписать id label логику
function Checkbox({
  className,
  label,
  textLabel,
  name,
  isCheckedDefault,
  isChecked,
  onChange,
}: ICheckboxProps) {
  return (
    <label className={cn(styles.checkbox, className)}>
      <input
        checked={isChecked}
        defaultChecked={isCheckedDefault}
        id={name + label}
        name={name}
        type={'checkbox'}
        value={label}
        onChange={onChange}
      />
      {label && <span> {textLabel} </span>}
    </label>
  );
}

export default Checkbox;
