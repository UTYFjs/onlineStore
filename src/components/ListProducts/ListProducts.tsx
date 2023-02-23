import React from 'react';
import { dataProducts, IDataProduct } from '../../data/dataProducts';
import { useUtilityStore } from '../../store/zustandStore';
import { getProducts } from '../../utility/getProducts';
import CardProduct from '../CardProduct/CardProduct';
import styles from './ListProducts.module.scss';

type ListProductsProps = {
  customProducts?: IDataProduct[];
  deepPath?: string;
};

function ListProducts({ customProducts, deepPath }: ListProductsProps) {
  const { selectedFilters, selectedSorting, filters } = useUtilityStore((state) => state);

  let products: IDataProduct[] = [];
  if (customProducts === undefined) {
    products = getProducts(dataProducts, filters, selectedFilters, '', selectedSorting, '');
  } else {
    products = customProducts;
  }

  return (
    <div className={styles['catalog-grid-container']}>
      {products.map((item) => {
        if (deepPath) {
          item.thumbnail.primary = './.' + item.thumbnail.primary;
        }
        return <CardProduct key={item.id} data={item} />;
      })}
    </div>
  );
}

export default ListProducts;
