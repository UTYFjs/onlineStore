import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import { mockSelect } from '../../mock/mock';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <div>
      MainPage
      <div className={styles.temporary}>
        <Button content={'Нажми'} />
        <Input placeholder="write something" type="text" />
        <Select data={mockSelect} placeholder="выберите" />
      </div>
    </div>
  );
}

export default MainPage;
