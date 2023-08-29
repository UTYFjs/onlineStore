import React from 'react';
import styles from './CartProductCard.module.scss';
import { ICartProduct } from '../../../store/zustandStore';
import ImgLazy from '../../ImgLazy/ImgLazy';
interface ICartProductCardProps {
  data: ICartProduct;
}
export default function CartProductCard({ data }: ICartProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles['image-wrapper']}>
        <ImgLazy src={'./../.' + data.cartProduct.thumbnail.primary} />
      </div>
      <div className={styles['specification-wrapper']}>
        <p>
          {' '}
          <b>{data.cartProduct.title}</b>{' '}
        </p>
        <p> Цвет: {data.color}</p>
        <p>Подарочная Коробочка: {data.isGiftBox ? 'ДА' : 'НЕТ'}</p>
        <p>Персонализация: {data.embossing}</p>
      </div>
      <div className={styles['result-wrapper']}>
        <div>x</div>
        <div></div>
        <div>{data.price + ' ' + data.priceCurrency}</div>
      </div>
    </div>
  );
}
