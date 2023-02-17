import React from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import { dataProducts } from '../../data/dataProducts';
import { getProducts } from '../../utility/getProducts';
import styles from './Catalog.module.scss';
function Catalog() {
  const products = getProducts(dataProducts);
  return (
    <div>
      <div className={styles['catalog-grid-container']}>
        {products.map((item) => {
          return <CardProduct key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Catalog;
