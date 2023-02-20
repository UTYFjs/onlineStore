import React from 'react';
import { ISortingRule } from '../../data/data';
import styles from './Select.module.scss';
interface ISelectProps {
  data: ISortingRule[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  checkedValue: string;
}

function Select({ data, onChange, checkedValue }: ISelectProps) {
  return (
    <select value={checkedValue} className={styles.select} onChange={onChange}>
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
