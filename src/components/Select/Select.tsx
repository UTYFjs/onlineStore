import React, { CSSProperties } from 'react';
import { ISelectRule } from '../../data/data';
import styles from './Select.module.scss';
import classNames from 'classnames';

interface ISelectProps {
  data: ISelectRule[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  checkedValue: string;
  className?: string;
  customStyles?: CSSProperties;
}

function Select({ data, onChange, checkedValue, className, customStyles }: ISelectProps) {
  const currentClassNames = classNames(styles.select, className && styles[className]);
  console.log('checked Value', checkedValue);
  return (
    <select
      value={checkedValue}
      className={currentClassNames}
      onChange={onChange}
      style={customStyles}
    >
      {data &&
        data.map((item) => (
          <option key={item.id} value={item.value}>
            {item.title}
          </option>
        ))}
    </select>
  );
}

export default Select;
