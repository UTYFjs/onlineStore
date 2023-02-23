import React from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import ListProducts from '../../components/ListProducts/ListProducts';
import { IDataProduct } from '../../data/dataProducts';

interface IFavoritesProps {
  products: IDataProduct[];
}

function Favorites({ products }: IFavoritesProps) {
  return (
    <div>
      Favorites
      <ListProducts customProducts={products} />
    </div>
  );
}

export default Favorites;
