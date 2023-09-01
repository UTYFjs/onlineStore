import React from 'react';
import { dataProducts, IDataProduct } from '../../data/dataProducts';
import { useUtilityStore } from '../../store/zustandStore';
import { getProducts } from '../../utility/getProducts';
import CardProduct from '../CardProduct/CardProduct';
import styles from './ListProducts.module.scss';

type ListProductsProps = {
  customProducts?: IDataProduct[];
  deepPath?: string;
  notFoundText?: string;
};

function ListProducts({ customProducts, deepPath, notFoundText }: ListProductsProps) {
  const { selectedFilters, selectedSorting, filters, searchText } = useUtilityStore(
    (state) => state
  );

  let products: IDataProduct[] = [];
  if (customProducts === undefined) {
    const copyDataProducts = JSON.parse(JSON.stringify(dataProducts));
    products = getProducts(
      copyDataProducts,
      filters,
      selectedFilters,
      '',
      selectedSorting,
      searchText
    );
  } else {
    products = customProducts;
  }

  return (
    <>
      {products.length === 0 && <p className={styles['not-found-title']}> {notFoundText}</p>}
      {products.length !== 0 && (
        <div className={styles['catalog-grid-container']}>
          {products.map((item) => {
            return <CardProduct key={item.id} data={item} deepPath={deepPath} />;
          })}
        </div>
      )}
    </>
  );
}

export default ListProducts;
