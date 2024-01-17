import React from 'react';
import FiltersMenu from '../../components/FiltersMenu/FiltersMenu';
import ListProducts from '../../components/ListProducts/ListProducts';

import styles from './Catalog.module.scss';
import { notFoundText } from '../../data/const';
function Catalog() {
  return (
    <div>
      <FiltersMenu />
      <h3 className={styles.title}>ВЕСЬ КАТАЛОГ</h3>
      <ListProducts deepPath={'./.'} notFoundText={notFoundText.notFoundProducts.ru} />
    </div>
  );
}

export default Catalog;
