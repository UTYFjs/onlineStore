import React from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../../../components/CardProduct/CardProduct';
import { dataProducts } from '../../../data/dataProducts';
import styles from './SelectProducts.module.scss';

function SelectProducts() {
  const currentCategory = useParams().id as string;

  return (
    <div className="category">
      <h1> {currentCategory}</h1>;
      <div className={styles['flex-container']}>
        {dataProducts
          .filter(
            (item) =>
              item.type.toLowerCase() ===
              currentCategory.slice(0, currentCategory.length - 1).toLowerCase()
          )
          .map((item) => {
            item.img = './.' + item.img;
            return <CardProduct key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
}

export default SelectProducts;
