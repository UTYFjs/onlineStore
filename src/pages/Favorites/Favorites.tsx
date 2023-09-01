import React from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import ListProducts from '../../components/ListProducts/ListProducts';
import { IDataProduct } from '../../data/dataProducts';
import styles from './Favorites.module.scss';
import { notFoundText } from '../../data/const';

interface IFavoritesProps {
  products: IDataProduct[];
}

function Favorites({ products }: IFavoritesProps) {
  return (
    <div>
      <h3 className={styles.title}>Избранное</h3>
      <ListProducts customProducts={products} notFoundText={notFoundText.notFoundFavorites.ru} />
    </div>
  );
}

export default Favorites;
