import React from 'react';
import styles from './NotFound.module.scss';
import { notFoundText } from '../../data/const';

export default function NotFoundRoute(): JSX.Element {
  return (
    <>
      <p className={styles['not-found']}>{notFoundText.notFountPage.ru}</p>
    </>
  );
}
