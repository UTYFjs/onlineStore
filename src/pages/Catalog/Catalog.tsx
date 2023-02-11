import React from 'react';
import { dataProducts } from '../../data/dataProducts';
import styles from './Catalog.module.scss';
function Catalog() {
  return (
    <div>
      <h1>Изделия из кожи</h1>;
      {dataProducts.map((item) => {
        const webpPath = item.img.replaceAll('jpg', 'webp');
        console.log(webpPath);
        return <img key={item.img} className={styles['grid-item']} src={webpPath} alt="123" />;
      })}
    </div>
  );
}

export default Catalog;
