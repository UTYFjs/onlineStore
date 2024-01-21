import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import ImgLazy from '../ImgLazy/ImgLazy';
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
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(to);
  };
  return (
    <div className={classNamesCard}>
      <NavLink className={styles['link-ghost']} to={to} />
      <ImgLazy src={srcImg} />
      <div className={styles['grid-content']}>
        <h3 className={styles['content-title']}>{textContent}</h3>
        <Button content={buttonContent} onClick={handleButton} />
      </div>
    </div>
  );
}

export default CardCategory;
