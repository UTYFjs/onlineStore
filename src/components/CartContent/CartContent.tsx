import React from 'react';
import styles from './CartContent.module.scss';
import { useCartStore } from '../../store/zustandStore';
import CartProductCard from './CartProductCard/CartProductCard';

export default function CartContent() {
  const { cartProducts } = useCartStore();
  let contentCart: JSX.Element = <div></div>;
  if (cartProducts.length) {
    contentCart = (
      <div>
        КАрточка товара <b>{cartProducts[0].cartProduct.title}</b>{' '}
      </div>
    );
  } else {
    contentCart = <div>Ваша Корзина пуста</div>;
  }
  return (
    <div className={styles.cart}>
      {!!cartProducts.length &&
        cartProducts.map((item) => (
          <CartProductCard key={item.cartProduct.id + 'cart'} data={item} />
        ))}
      {!cartProducts.length && <div> Ваша корзина пока что пуста</div>}

      {!!cartProducts.length && (
        <div className={styles['result-price']}>
          <div>
            <b>ИТОГО: </b>
          </div>
          <div className={styles['result-price-value']}>
            <b>
              {cartProducts.reduce((prev, item) => {
                return prev + item.price * item.count;
              }, 0)}
            </b>{' '}
            <span> {cartProducts[0].priceCurrency}</span>
          </div>
        </div>
      )}
    </div>
  );
}
