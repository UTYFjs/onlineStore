import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import FiltersMenu from '../../../components/FiltersMenu/FiltersMenu';
import ListProducts from '../../../components/ListProducts/ListProducts';
import Select from '../../../components/Select/Select';
import { sortingRules } from '../../../data/data';
import { dataProducts } from '../../../data/dataProducts';
import { useUtilityStore, useZustandStore } from '../../../store/zustandStore';
import { getProducts } from '../../../utility/getProducts';
import styles from './SelectProducts.module.scss';

function SelectProducts() {
  const currentCategory = useParams().id as string;

  const { selectedSorting, selectedFilters, filters, setSelectedSorting } = useUtilityStore(
    (state) => state
  );

  useEffect(() => {
    setSelectedSorting('');
  }, [currentCategory, setSelectedSorting]);
  const products = getProducts(
    dataProducts,
    filters,
    selectedFilters,
    currentCategory,
    selectedSorting,
    ''
  );

  return (
    <div>
      <FiltersMenu />

      <ListProducts customProducts={products} deepPath={'./.'} />
    </div>
  );
}

export default SelectProducts;
