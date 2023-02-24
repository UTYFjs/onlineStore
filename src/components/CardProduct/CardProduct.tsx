import React, { useState } from 'react';
import { IDataProduct } from '../../data/dataProducts';
import { useFavoriteStore } from '../../store/zustandStore';
import Button from '../Button/Button';
import ImgLazy from '../ImgLazy/ImgLazy';
import styles from './CardProduct.module.scss';
interface ICardProductProps {
  data: IDataProduct;
}
function CardProduct({ data }: ICardProductProps) {
  const { id, title, thumbnail } = data;
  const [price, setPrice] = useState(data.price);
  const [favorite, setFavorite] = useState(false);
  const { favoriteProducts, addProduct, removeProduct } = useFavoriteStore((state) => state);

  const isFavorite = favoriteProducts.some((p) => p.id === data.id);

  const handleToggleFavorite = () => {
    isFavorite ? removeProduct(data.id) : addProduct(data);
  };
  const getStyleFavorite = () => {
    return isFavorite ? { background: '#FF5252' } : { background: '#000000' };
  };
  const setEmbossing = (checked: boolean): void => {
    const newPrice = checked ? data.price + 10 : data.price;
    setPrice(newPrice);
  };

  return (
    <div className={styles.card}>
      <div className={styles.fake}>
        <div className={styles['fake-content']}></div>
        <div className={styles['img-wrapper']}></div>
        <h4 className={styles['card-title']}>{title}</h4>
        <p className={styles['card-price']}>{price + ' gel'}</p>

        <div className={styles['fake-nav']}>
          <div className={styles.embossing}>
            <label htmlFor={id}>Embossing (price: +10)</label>
            <input
              type="checkbox"
              id={id}
              className={styles['embossing-checkbox']}
              onInput={(e) => setEmbossing(e.currentTarget.checked)}
            />
          </div>
          <Button content={'Add to cart'} />
          <div
            className={styles['heart-1']}
            style={getStyleFavorite()}
            onClick={handleToggleFavorite}
          />
        </div>
      </div>

      <div className={styles['img-wrapper']}>
        <ImgLazy src={thumbnail.primary} alt={title} />
      </div>
      <h4 className={styles['card-title']}>{title}</h4>
      <p className={styles['card-price']}>{price + ' gel'}</p>
    </div>
  );
}

export default CardProduct;
