import React from 'react';
import ImgLazy from '../../components/ImgLazy/ImgLazy';
import { dataProducts } from '../../data/dataProducts';
import styles from './About.module.scss';

function About() {
  return (
    <div className={styles['container-grid-product']}>
      {dataProducts.map((item) => (
        <div key={item.img} className={styles['img-wrapper']}>
          <ImgLazy key={item.img} src={item.img} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default About;
