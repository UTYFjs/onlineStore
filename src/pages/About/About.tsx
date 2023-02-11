import React from 'react';
import Img from '../../components/Img/Img';
import { dataProducts } from '../../data/dataProducts';
import styles from './About.module.scss';

function About() {
  return (
    <div className={styles['container-grid-product']}>
      {dataProducts.map((item) => (
        <div key={item.img} className={styles['img-wrapper']}>
          <Img key={item.img} src={item.img} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default About;
