import React from 'react';
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
  return (
    <div className={styles.navigation}>
      <Button content={'Фильтры'} onClick={handleFilterOpen}></Button>
      <Select data={sortingRules} onChange={handleOnChangeSorting} checkedValue={selectedSorting} />
    </div>
  );
}

export default FiltersMenu;
