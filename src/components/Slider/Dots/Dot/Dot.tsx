import React from 'react';
import styles from './Dot.module.scss';
interface IDotProps {
  indexSlide: number;
  onClick: (number: number) => void;
}
export default function Dot({ indexSlide, onClick }: IDotProps) {
  return (
    <div
      className={styles.dot}
      onClick={() => {
        onClick(indexSlide);
      }}
    ></div>
  );
}
