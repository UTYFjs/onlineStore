import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IDataProduct } from '../../data/dataProducts';
import { useFavoriteStore, useUtilityStore } from '../../store/zustandStore';
import Button from '../Button/Button';
import ImgLazy from '../ImgLazy/ImgLazy';
import styles from './CardProduct.module.scss';
interface ICardProductProps {
  data: IDataProduct;
  deepPath?: string;
}
function CardProduct({ data, deepPath }: ICardProductProps) {
  const { id, title, category, thumbnail } = data;
  const thumbnailSrc = deepPath ? deepPath + thumbnail.primary : thumbnail.primary;
  const navigate = useNavigate();
  const handleToProductPage = () => {
    setCurrentProduct(data);
    navigate(`/collection/${category}/${id}`);
    // navigate('/favorites');
  };
  const [price, setPrice] = useState(data.price);

  const { favoriteProducts, addProduct, removeProduct } = useFavoriteStore((state) => state);
  const { setCurrentProduct } = useUtilityStore((state) => state);

  const isFavorite = favoriteProducts.some((p) => p.id === data.id);

  const handleToggleFavorite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
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
        <div className={styles['fake-content']}>
          {' '}
          <div className={styles['img-wrapper']} onClick={handleToProductPage}></div>
          <h4 className={styles['card-title']}>{title}</h4>
          <p className={styles['card-price']}>{price + ' gel'}</p>
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
          <Button content={'Add to cart'} />
          <div
            className={styles['heart-1']}
            style={getStyleFavorite()}
            onClick={handleToggleFavorite}
          />
        </div>
      </div>

      <div className={styles['img-wrapper']}>
        <ImgLazy src={thumbnailSrc} alt={title} />
      </div>
      <h4 className={styles['card-title']}>{title}</h4>
      <p className={styles['card-price']}>{price + ' gel'}</p>
    </div>
  );
}

export default CardProduct;
