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
      {/*cartProducts.map((item) => (
        <div key={item.cartProduct.id}>
          КАрточка товара <b>{item.cartProduct.title}</b>{' '}
        </div>
      ))*/}
      {cartProducts.map((item) => (
        <CartProductCard key={item.cartProduct.id + 'cart'} data={item} />
      ))}
      total:{' '}
      {cartProducts.reduce((prev, item) => {
        return prev + item.price;
      }, 0)}
    </div>
  );
}
