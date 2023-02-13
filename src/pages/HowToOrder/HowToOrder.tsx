import React from 'react';
import { dataProducts } from '../../data/dataProducts';
import styles from './HowToOrder.module.scss';
function HowToOrder() {
  return (
    <div>
      HowToOrder
      <div className={styles['container-grid']}>
        {dataProducts.map((item) => (
          <img key={item.img} className={styles['grid-item']} src={item.img} alt="123" />
        ))}
        <img className={styles['grid-item']} srcSet="" alt="123" />
      </div>
    </div>
  );
}

export default HowToOrder;
