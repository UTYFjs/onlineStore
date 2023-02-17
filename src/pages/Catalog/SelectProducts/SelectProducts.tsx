import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import CardProduct from '../../../components/CardProduct/CardProduct';
import Select from '../../../components/Select/Select';
import { sortingRules } from '../../../data/data';
import { dataProducts } from '../../../data/dataProducts';
import { useZustandStore } from '../../../store/zustandStore';
import styles from './SelectProducts.module.scss';

function SelectProducts() {
  const currentCategory = useParams().id as string;
  const BurgerOpen = useZustandStore((state) => state.burgerOpen);
  const setBurgerType = useZustandStore((state) => state.setBurgerType);
  const setIsBurgerOpen = useZustandStore((state) => state.setIsBurgerOpen);
  const setIsShadedActive = useZustandStore((state) => state.setIsShadedActive);
  const setHandleShaded = useZustandStore((state) => state.setHandleShaded);

  setHandleShaded(() => {
    setIsBurgerOpen();
    setIsShadedActive();
    setHandleShaded(() => {});
  });

  const handleFilterOpen = () => {
    setBurgerType('filter');
    BurgerOpen();
  };
  return (
    <div className="category">
      <h1> {currentCategory}</h1>
      <div className={styles.navigation}>
        <Button content={'Фильтры'} handle={handleFilterOpen}></Button>
        <Select data={sortingRules} />
      </div>
      <div className={styles['flex-container']}>
        {dataProducts
          .filter(
            (item) =>
              item.type.toLowerCase() ===
              currentCategory.slice(0, currentCategory.length - 1).toLowerCase()
          )
          .map((item) => {
            item.img = './.' + item.img;
            return <CardProduct key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
}

export default SelectProducts;
