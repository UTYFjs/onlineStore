import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IDataProduct } from '../../data/dataProducts';
import {
  ICartProduct,
  useCartStore,
  useFavoriteStore,
  useUtilityStore,
} from '../../store/zustandStore';
import Button from '../Button/Button';
import ImgLazy from '../ImgLazy/ImgLazy';
import styles from './CardProduct.module.scss';
import Heart from '../Heart/Heart';
import Marker from '../Marker/Marker';
import { sendMetrik } from '../../utility/metrics';

interface ICardProductProps {
  data: IDataProduct;
  deepPath?: string;
}
function CardProduct({ data, deepPath }: ICardProductProps) {
  const { id, title, category, thumbnail } = data;
  const thumbnailSrc = deepPath ? deepPath + thumbnail.primary : thumbnail.primary;
  const navigate = useNavigate();
  const { cartProducts, addCartProduct, removeCartProduct } = useCartStore();
  const isInCart = cartProducts.some((product) => product.cartProduct.id === data.id);

  const handleToProductPage = () => {
    setCurrentProduct(data);
    navigate(`/collection/${category}/${id}`);
    // navigate('/favorites');
  };
  const [price, setPrice] = useState(data.price);

  const { favoriteProducts, addProduct, removeProduct } = useFavoriteStore((state) => state);
  const { setCurrentProduct } = useUtilityStore((state) => state);

  const isFavorite = favoriteProducts.some((p) => p.id === data.id);
  const handleToggleFavorite = () => {
    sendMetrik('reachGoal', 'testJSEvent');
    isFavorite ? removeProduct(data.id) : addProduct(data);
  };

  const setEmbossing = (checked: boolean): void => {
    const newPrice = checked ? data.price + 10 : data.price;
    setPrice(newPrice);
  };
  const handleAddProductToCart = () => {
    const newCartProduct: ICartProduct = {
      cartProduct: data,
      color: data.color,
      count: 1,
      // to do remove || 1000
      price: data.price,
      priceCurrency: 'BYN',
      discount: 0,
      isGiftBox: false,
      isEmbossing: false,
      embossing: '',
    };
    addCartProduct(newCartProduct);
  };
  const handleRemovedProductToCart = () => {
    removeCartProduct(data.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.fake}>
        <div className={styles['fake-content']}>
          {' '}
          <div className={styles['img-wrapper']} onClick={handleToProductPage}>
            <Heart onClick={handleToggleFavorite} isActive={isFavorite} isTransparentHover={true} />
          </div>
          <h4 className={styles['card-title']}>{title}</h4>
          <p className={styles['card-price']}>{price + ' byn'}</p>
        </div>

        <div className={styles['fake-nav']} onClick={(e) => e.stopPropagation()}>
          <div className={styles.embossing}>
            <label htmlFor={id}>Embossing (price: +10)</label>
            <input
              type="checkbox"
              id={id}
              className={styles['embossing-checkbox']}
              onInput={(e) => setEmbossing(e.currentTarget.checked)}
            />
          </div>
          <Button
            content={isInCart ? 'Убрать из корзины' : 'В корзину'}
            onClick={isInCart ? handleRemovedProductToCart : handleAddProductToCart}
            customStyles={
              isInCart
                ? { color: '#363636', background: '#fff', border: '1px solid #a7a7a7' }
                : { border: '1px solid transparent' }
            }
          />
        </div>
      </div>

      <div className={styles['img-wrapper']} onClick={handleToProductPage}>
        <ImgLazy src={thumbnailSrc} alt={title} />
        <Heart onClick={handleToggleFavorite} isActive={isFavorite} />
        {data.stock > 0 && <Marker />}
      </div>
      <h4 className={styles['card-title']}>{title}</h4>
      <p className={styles['card-price']}>{price + ' byn'}</p>
    </div>
  );
}

export default CardProduct;
