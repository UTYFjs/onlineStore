import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import Img from '../Img/Img';
import cn from 'classnames';
import styles from './CardCategory.module.scss';
interface ICardCategoryProps {
  textContent: string;
  buttonContent: string;
  srcImg: string;
  to: string;
  className?: 'category-big' | null;
}

function CardCategory({ textContent, buttonContent, srcImg, className, to }: ICardCategoryProps) {
  const classNamesCard = className ? cn(styles.category, styles[className]) : styles.category;
  return (
    <div className={classNamesCard}>
      <NavLink className={styles['link-ghost']} to={to} />
      <Img src={srcImg} />
      <div className={styles['grid-content']}>
        <h3 className={styles['content-title']}>{textContent}</h3>
        <Button content={buttonContent} />
      </div>
    </div>
  );
}

export default CardCategory;
