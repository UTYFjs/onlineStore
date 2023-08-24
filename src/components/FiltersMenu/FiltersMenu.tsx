import React, { useState } from 'react';
import { sortingRules } from '../../data/data';
import { useUtilityStore, useZustandStore } from '../../store/zustandStore';
import Button from '../Button/Button';
import Select from '../Select/Select';
import styles from './FiltersMenu.module.scss';

function FiltersMenu() {
  const { burgerOpen, setBurgerType } = useZustandStore((state) => state);

  const { selectedSorting, selectedFilters, filters, setSelectedSorting } = useUtilityStore(
    (state) => state
  );
  const handleOnChangeSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSorting(e.currentTarget.value);
  };
  const handleFilterOpen = () => {
    setBurgerType('filter');
    burgerOpen();
  };
  const countSelectedFilters = Object.values(selectedFilters).reduce((prev, item) => {
    return prev + item.length;
  }, 0);

  const contentFiltersButton =
    'Фильтры' + (countSelectedFilters ? `(${countSelectedFilters})` : '');
  return (
    <div className={styles.navigation}>
      <Button
        content={contentFiltersButton}
        onClick={handleFilterOpen}
        customStyles={countSelectedFilters ? { background: 'green' } : {}}
      ></Button>
      <Select data={sortingRules} onChange={handleOnChangeSorting} checkedValue={selectedSorting} />
    </div>
  );
}

export default FiltersMenu;
