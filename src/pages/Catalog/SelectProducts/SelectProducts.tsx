import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import FiltersMenu from '../../../components/FiltersMenu/FiltersMenu';
import ListProducts from '../../../components/ListProducts/ListProducts';
import Select from '../../../components/Select/Select';
import { routerPagesData, sortingRules } from '../../../data/data';
import { dataProducts } from '../../../data/dataProducts';
import { useUtilityStore, useZustandStore } from '../../../store/zustandStore';
import { getProducts } from '../../../utility/getProducts';
import styles from './SelectProducts.module.scss';
import { notFoundText } from '../../../data/const';

function SelectProducts() {
  const currentCategory = useParams().id as string;

  const {
    selectedSorting,
    selectedFilters,
    filters,
    setSelectedSorting,
    searchText,
    setSearchText,
  } = useUtilityStore((state) => state);

  useEffect(() => {
    setSelectedSorting('');
    setSearchText('');
  }, [currentCategory, setSelectedSorting]);
  const products = getProducts(
    dataProducts,
    filters,
    selectedFilters,
    currentCategory,
    selectedSorting,
    searchText
  );

  return (
    <div>
      <FiltersMenu />
      <h3 className={styles.title}>
        {' '}
        {routerPagesData.find((item) => item.url === '/collection/' + currentCategory)?.content}
      </h3>
      <ListProducts
        customProducts={products}
        deepPath={'./.'}
        notFoundText={notFoundText.notFoundProducts.ru}
      />
    </div>
  );
}

export default SelectProducts;
