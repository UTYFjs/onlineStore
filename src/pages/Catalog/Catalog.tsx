import React from 'react';
import Button from '../../components/Button/Button';
import FiltersMenu from '../../components/FiltersMenu/FiltersMenu';
import ListProducts from '../../components/ListProducts/ListProducts';
import Select from '../../components/Select/Select';
import { sortingRules } from '../../data/data';
import { useUtilityStore, useZustandStore } from '../../store/zustandStore';

import styles from './Catalog.module.scss';
function Catalog() {
  /*const { burgerOpen, setBurgerType } = useZustandStore((state) => state);

  const { selectedSorting, selectedFilters, filters, setSelectedSorting } = useUtilityStore(
    (state) => state
  );
  const handleOnChangeSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSorting(e.currentTarget.value);
  };
  const handleFilterOpen = () => {
    setBurgerType('filter');
    burgerOpen();
  };*/
  return (
    <div>
      <FiltersMenu />

      <ListProducts deepPath={'./.'} />
    </div>
  );
}

export default Catalog;
