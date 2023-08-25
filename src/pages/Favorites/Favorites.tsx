import React from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import ListProducts from '../../components/ListProducts/ListProducts';
import { IDataProduct } from '../../data/dataProducts';
import styles from './Favorites.module.scss';

interface IFavoritesProps {
  products: IDataProduct[];
}

function Favorites({ products }: IFavoritesProps) {
  console.log('favoritesproducts', products);
  const title = products?.length ? 'Избранное' : 'Пока что вы ничего не добавили в избранное';
  return (
    <div className={styles.favorites}>
      <h3 className={styles.title}>{title}</h3>
      <ListProducts customProducts={products} />
    </div>
  );
}

export default Favorites;
