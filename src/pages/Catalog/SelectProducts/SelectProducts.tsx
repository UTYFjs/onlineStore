import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './SelectProducts.module.scss';

function SelectProducts() {
  const currentCategory = useParams().id as string;
  /*const categoryText = routerPagesData.find((item)=> {
    const item.url.split('/');
  } )*/
  return <h1> {currentCategory}</h1>;
}

export default SelectProducts;
