import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import { dataProducts } from '../../data/dataProducts';
import { mockSelect } from '../../mock/mock';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <div>
      MainPage
      {
        //todo: remove temporary
      }
      {false && (
        <div className={styles.temporary}>
          <Button content={'Нажми'} />
          <Input placeholder="write something" type="text" />
          <Select data={mockSelect} placeholder="выберите" />
        </div>
      )}
      <div className={styles['container-grid']}>
        {dataProducts.map((item) => (
          <img key={item.img} className={styles['grid-item']} src={item.img} alt="123" />
        ))}
        <img className={styles['grid-item']} srcSet="" alt="123" />
        <div className={styles['grid-item']}></div>
        <div className={styles['grid-item']}></div>
        <div className={styles['grid-item']}></div>
        <div className={styles['grid-item']}></div>
        <div className={styles['grid-item']}></div>
        <div className={styles['grid-item']}></div>
        <div className={styles['grid-item']}></div>
      </div>
    </div>
  );
}

export default MainPage;
