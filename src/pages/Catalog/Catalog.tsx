import React from 'react';
import CardProduct from '../../components/CardProduct/CardProduct';
import { dataProducts } from '../../data/dataProducts';
import { useUtilityStore } from '../../store/zustandStore';
import { getProducts } from '../../utility/getProducts';
import styles from './Catalog.module.scss';
function Catalog() {
  const { selectedFilters, selectedSorting, filters } = useUtilityStore((state) => state);

  const products = getProducts(dataProducts, filters, selectedFilters, '', selectedSorting, '');
  return (
    <div>
      <div className={styles['catalog-grid-container']}>
        {products.map((item) => {
          return <CardProduct key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Catalog;
