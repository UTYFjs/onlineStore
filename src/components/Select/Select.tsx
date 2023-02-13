import React from 'react';
import styles from './Select.module.scss';
interface ISelectProps {
  data?: Array<{ id: string; content: string; value: string }>;
  placeholder?: string;
}

function Select({ data, placeholder }: ISelectProps) {
  return (
    <select className={styles.select} placeholder={placeholder}>
      {data &&
        data.map((item) => (
          <option key={item.id} value={item.value}>
            {item.content}
          </option>
        ))}
    </select>
  );
}

export default Select;
