import React from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import { IDataProduct } from '../../data/dataProducts';

interface IFavoritesProps {
  products: IDataProduct[];
}

function Favorites({ products }: IFavoritesProps) {
  return (
    <div>
      Favorites
      <div>
        {products.map((product) => {
          return <CardProduct key={product.id + 'favorite'} data={product}></CardProduct>;
        })}
      </div>
    </div>
  );
}

export default Favorites;
