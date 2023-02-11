import React from 'react';
import Button from '../../components/Button/Button';
import CardCategory from '../../components/CardCategory/CardCategory';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import { dataProducts } from '../../data/dataProducts';
import { mockDataCategory, mockSelect } from '../../mock/mock';
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
      <div className={styles['grid-container']}>
        {mockDataCategory.map((category, index) => {
          const classCategory = index === 2 ? 'category-big' : null;
          return (
            <CardCategory
              key={category.id}
              textContent={category.textContent}
              buttonContent={category.buttonContent}
              to={category.to}
              srcImg={category.imgSrc}
              className={classCategory}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
