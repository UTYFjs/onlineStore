import React from 'react';
import styles from './CartProductCard.module.scss';
import { ICartProduct, useCartStore, useZustandStore } from '../../../store/zustandStore';
import ImgLazy from '../../ImgLazy/ImgLazy';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { ruColors } from '../../../data/data';

interface ICartProductCardProps {
  data: ICartProduct;
}
export default function CartProductCard({ data }: ICartProductCardProps) {
  const navigate = useNavigate();
  const { removeCartProduct, updateCartProduct } = useCartStore();
  const handleShaded = useZustandStore((state) => state.handleShaded);

  const handleGoToProductPage = () => {
    console.log('go to product page');
    navigate(`/collection/${data.cartProduct.category}/${data.cartProduct.id}`);
    handleShaded();
  };
  const handleChangeCount = (action: 'add' | 'remove') => {
    let newCount: number = data.count;
    switch (action) {
      case 'add':
        newCount += 1;
        updateCartProduct({ ...data, count: newCount });
        console.log('add');
        break;
      case 'remove':
        newCount = data.count - 1;
        if (newCount === 0) {
          removeCartProduct(data.cartProduct.id);
        } else {
          updateCartProduct({ ...data, count: newCount });
        }

        console.log('remove');
        break;
    }
  };

  const handleRemoveFromCart = () => {
    removeCartProduct(data.cartProduct.id);
    console.log('removefrom cart');
  };
  return (
    <div className={styles.card}>
      <div className={styles['image-wrapper']} onClick={handleGoToProductPage}>
        <ImgLazy src={'./../.' + data.cartProduct.thumbnail.primary} />
      </div>
      <div className={styles['specification-wrapper']}>
        <p className={styles['product-title']} onClick={handleGoToProductPage}>
          {' '}
          <b>{data.cartProduct.title}</b>{' '}
        </p>
        <p> Цвет: {ruColors[data.color as keyof typeof ruColors] || ''}</p>
        <p>Подарочная Коробочка: {data.isGiftBox ? 'ДА' : 'НЕТ'}</p>
        <p>
          Персонализация: <b>{data.embossing?.toUpperCase()}</b>
        </p>
      </div>
      <div className={styles['result-wrapper']}>
        <div className={styles.remove}>
          {' '}
          <CloseIcon
            className={styles['burger-close']}
            fontSize="small"
            onClick={handleRemoveFromCart}
          />
        </div>
        <div className={styles.count}>
          <span
            className={styles['button-remove']}
            onClick={() => {
              handleChangeCount('remove');
            }}
          >
            -
          </span>
          <span>{data.count}</span>
          <span
            className={styles['button-add']}
            onClick={() => {
              handleChangeCount('add');
            }}
          >
            +
          </span>
        </div>
        <div>
          <b>{data.price * data.count}</b>
          {' ' + data.priceCurrency.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
