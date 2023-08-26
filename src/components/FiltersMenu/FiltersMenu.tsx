import React from 'react';
import { sortingRules } from '../../data/data';
import { useUtilityStore, useZustandStore } from '../../store/zustandStore';
import Button from '../Button/Button';
import Select from '../Select/Select';
import styles from './FiltersMenu.module.scss';
import BubbleFilterList from '../BubbleFilterList/BubbleFilterList';

function FiltersMenu() {
  const { burgerOpen, setBurgerType } = useZustandStore((state) => state);

  const { selectedSorting, selectedFilters, setSelectedSorting, setAllSelectedFilters } =
    useUtilityStore((state) => state);
  const handleOnChangeSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSorting(e.currentTarget.value);
  };
  const handleFilterOpen = () => {
    setBurgerType('filter');
    burgerOpen();
  };

  //to do create one function from countSelectedFilters activeFilters
  const countSelectedFilters = Object.values(selectedFilters).reduce((prev, item) => {
    return prev + item.length;
  }, 0);

  const contentFiltersButton =
    'Фильтры' + (countSelectedFilters ? `(${countSelectedFilters})` : '');
  return (
    <div className={styles.navigation}>
      <div className={styles['filters-wrapper']}>
        <Button
          content={contentFiltersButton}
          onClick={handleFilterOpen}
          customStyles={
            countSelectedFilters
              ? { background: '#ff4f33', marginRight: '7px' }
              : {
                  marginRight: '7px',
                  color: '#363636',
                  background: '#fff',
                  border: '1px solid #a7a7a7',
                }
          }
        ></Button>
        <BubbleFilterList />
      </div>

      <Select data={sortingRules} onChange={handleOnChangeSorting} checkedValue={selectedSorting} />
    </div>
  );
}

export default FiltersMenu;
