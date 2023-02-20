import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import CardProduct from '../../../components/CardProduct/CardProduct';
import Select from '../../../components/Select/Select';
import { sortingRules } from '../../../data/data';
import { dataProducts } from '../../../data/dataProducts';
import { useUtilityStore, useZustandStore } from '../../../store/zustandStore';
import { getProducts } from '../../../utility/getProducts';
import styles from './SelectProducts.module.scss';

function SelectProducts() {
  const currentCategory = useParams().id as string;
  const BurgerOpen = useZustandStore((state) => state.burgerOpen);
  const setBurgerType = useZustandStore((state) => state.setBurgerType);

  const { selectedSorting, filters, setSelectedSorting } = useUtilityStore((state) => state);

  const handleOnChangeSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSorting(e.currentTarget.value);
  };
  useEffect(() => {
    setSelectedSorting('');
  }, [currentCategory, setSelectedSorting]);
  const products = getProducts(dataProducts, filters, currentCategory, selectedSorting, '');
  const handleFilterOpen = () => {
    setBurgerType('filter');
    BurgerOpen();
  };
  return (
    <div className="category">
      <h1> {currentCategory}</h1>
      <div className={styles.navigation}>
        <Button content={'Фильтры'} handle={handleFilterOpen}></Button>
        <Select
          data={sortingRules}
          onChange={handleOnChangeSorting}
          checkedValue={selectedSorting}
        />
      </div>
      <div className={styles['flex-container']}>
        {products.map((item) => {
          console.log('заходит в мар');
          item.thumbnail.primary = './.' + item.thumbnail.primary;
          return <CardProduct key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default SelectProducts;
