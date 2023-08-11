import React from 'react';
import { ISortingRule } from '../../data/data';
import styles from './Select.module.scss';
import classNames from 'classnames';

interface ISelectProps {
  data: ISortingRule[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  checkedValue: string;
  className?: string;
}

function Select({ data, onChange, checkedValue, className }: ISelectProps) {
  const currentClassNames = classNames(styles.select, className && styles[className]);
  return (
    <select value={checkedValue} className={currentClassNames} onChange={onChange}>
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
