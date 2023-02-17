import React from 'react';
import CardCategory from '../../components/CardCategory/CardCategory';
import { mockDataCategory } from '../../mock/mock';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <div>
      MainPage
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
