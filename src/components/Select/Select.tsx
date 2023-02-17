import React from 'react';
import { ISortingRule } from '../../data/data';
import styles from './Select.module.scss';
interface ISelectProps {
  data?: ISortingRule[];
}

function Select({ data }: ISelectProps) {
  return (
    <select
      className={styles.select}
      onChange={(e) => {
        console.log(e.currentTarget.value);
      }}
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
