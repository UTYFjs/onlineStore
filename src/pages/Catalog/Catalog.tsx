import React from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import { dataProducts } from '../../data/dataProducts';
import styles from './Catalog.module.scss';
function Catalog() {
  return (
    <div>
      <div className={styles['catalog-grid-container']}>
        {dataProducts.map((item) => {
          return <CardProduct key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Catalog;
