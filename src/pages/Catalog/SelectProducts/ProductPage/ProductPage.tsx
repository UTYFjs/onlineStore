import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImgLazy from '../../../../components/ImgLazy/ImgLazy';
import Select from '../../../../components/Select/Select';
import { sortingRules } from '../../../../data/data';
import { dataProducts } from '../../../../data/dataProducts';

import styles from './ProductPage.module.scss';

function ProductPage() {
  const { product: currentProductId } = useParams();
  const currentProduct = dataProducts.find((product) => product.id === currentProductId);
  const { id, price } = currentProduct ? currentProduct : { id: null, price: null };
  const imgSrc = './../.' + currentProduct?.thumbnail.primary;
  //const { currentProduct, setCurrentProduct } = useUtilityStore((state) => state);
  /*useEffect(() => {
    return () => {
      console.log('unmount');
      setCurrentProduct(null);
    };
  }, [setCurrentProduct]);*/
  return (
    <div className={styles.grid}>
      <div className={styles['image-wrapper']}>
        <ImgLazy src={imgSrc} />
      </div>
      <div className={styles['content-wrapper']}>
        <h3 className={styles.title}>{currentProduct?.title}</h3>
        <p>{price + ' gel'}</p>
        <div className={styles['flex-column']}>
          <p> Цвет</p>
          <Select data={sortingRules} checkedValue={''} onChange={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
