import React from 'react';
import styles from './Arrows.module.scss';
import { ReactComponent as SvgArrow } from '../../../svg/go-next.svg';

interface IArrowProps {
  handleLeft: () => void;
  handleRight: () => void;
}
export default function Arrows({ handleLeft, handleRight }: IArrowProps) {
  return (
    <div className={styles.arrows}>
      {
        //<img className={styles.arrow} src="./../../assets/svg/go-next.svg" alt="svgArrow" />
      }

      <SvgArrow
        fill="red"
        width="70px"
        height="30px"
        className={styles['arrow-left']}
        onClick={() => {
          handleLeft();
          console.log('arrow-left');
        }}
      />
      <SvgArrow
        fill="red"
        width="70px"
        className={styles['arrow-right']}
        onClick={() => {
          handleRight();
          console.log('arrow-right');
        }}
      />
    </div>
  );
}
