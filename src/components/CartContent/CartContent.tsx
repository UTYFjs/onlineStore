import React from 'react';
import styles from './CartContent.module.scss';
import { useCartStore } from '../../store/zustandStore';
import CartProductCard from './CartProductCard/CartProductCard';

interface ICartProps {
  setResultPrice?: (resultPrice: string) => void;
}
export default function CartContent({ setResultPrice }: ICartProps) {
  const { cartProducts } = useCartStore();

  if (cartProducts.length) {
    const resultPrice = cartProducts.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    if (setResultPrice) setResultPrice(resultPrice + ' ' + cartProducts[0].priceCurrency);
  }

  return (
    <div className={styles.cart}>
      {!!cartProducts.length &&
        cartProducts.map((item) => (
          <CartProductCard key={item.cartProduct.id + 'cart'} data={item} />
        ))}
      {!cartProducts.length && <div> Ваша корзина пока что пуста</div>}
    </div>
  );
}
