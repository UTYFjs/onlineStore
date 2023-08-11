import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImgLazy from '../../../../components/ImgLazy/ImgLazy';
import Select from '../../../../components/Select/Select';
import { sortingRules } from '../../../../data/data';
import { dataProducts } from '../../../../data/dataProducts';

import styles from './ProductPage.module.scss';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

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
    <div>
      <div className={styles.grid}>
        <div className={styles['image-wrapper']}>
          <ImgLazy src={imgSrc} />
        </div>
        <div className={styles['content-wrapper']}>
          <h3 className={styles.title}>{currentProduct?.title}</h3>

          <div className={styles['flex-row']}>
            <p className={styles.spacing}>Выберите цвет</p>
            <Select data={sortingRules} checkedValue={''} onChange={() => {}} className={'qq1'} />
          </div>
          <div className={styles['flex-row']}>
            <p className={styles.spacing}>Выберите коробочку</p>
          </div>
          <div className={styles['flex-row']}>
            <p className={styles.spacing}>Добавить инициалы</p>
            <Input />
          </div>

          <p className={styles.price}>{price + ' gel'}</p>
          <Button
            className="full-width"
            content={'Add To Cart'}
            onClick={() => console.log('djlskjdlkjs')}
          />
          <div>
            <h4>Характеристики:</h4>
            <p>Цвет:</p>
            <p>Материал: Натуральная кожа</p>
            <p>Размеры: </p>
          </div>
          <div>
            <h4>Функциональность:</h4>
            <p>Купюры:</p>
            <p>Пластиковые карты: </p>
            <p>Монеты: </p>
          </div>
          <div>
            <h4>Описание:</h4>
            <p></p>
          </div>
          <div>
            <h4>Характеристики:</h4>
            <p>Цвет:</p>
            <p>Материал: Натуральная кожа</p>
            <p>Размеры: </p>
          </div>
          <div>
            <h4>Функциональность:</h4>
            <p>Купюры:</p>
            <p>Пластиковые карты: </p>
            <p>Монеты: </p>
          </div>
          <div>
            <h4>Описание:</h4>
            <p></p>
          </div>
          <div>
            <h4>Характеристики:</h4>
            <p>Цвет:</p>
            <p>Материал: Натуральная кожа</p>
            <p>Размеры: </p>
          </div>
          <div>
            <h4>Функциональность:</h4>
            <p>Купюры:</p>
            <p>Пластиковые карты: </p>
            <p>Монеты: </p>
          </div>
          <div>
            <h4>Описание:</h4>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <h4>Характеристики:</h4>
        <p>Цвет:</p>
        <p>Материал: Натуральная кожа</p>
        <p>Размеры: </p>
      </div>
      <div>
        <h4>Функциональность:</h4>
        <p>Купюры:</p>
        <p>Пластиковые карты: </p>
        <p>Монеты: </p>
      </div>
      <div>
        <h4>Описание:</h4>
        <p></p>
      </div>
    </div>
  );
}

export default ProductPage;
