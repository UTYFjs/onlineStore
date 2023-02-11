import React, { useState } from 'react';
import { IDataProduct } from '../../data/dataProducts';
import ImgLazy from '../ImgLazy/ImgLazy';
import styles from './CardProduct.module.scss';
interface ICardProductProps {
  data: IDataProduct;
}
function CardProduct({ data }: ICardProductProps) {
  const { id, img, name } = data;
  const [price, setPrice] = useState(data.price);
  const [favorite, setFavorite] = useState(false);

  const webpPath = img.replaceAll('jpg', 'webp');
  const handleToggleFavorite = () => {
    setFavorite(!favorite);
  };
  const getStyleFavorite = () => {
    return favorite ? { background: '#FF5252' } : { background: '#000000' };
  };
  const setEmbossing = (checked: boolean): void => {
    const newPrice = checked ? data.price + 10 : data.price;
    setPrice(newPrice);
  };

  return (
    <div className={styles.card}>
      <div className={styles['img-wrapper']}>
        <ImgLazy src={webpPath} alt={name} />
      </div>

      {false && (
        <img
          src={webpPath}
          alt="img item"
          /*onMouseOver={(e) =>
          (e.currentTarget.src = './assets/img/webp/bag-tote-child-orange-small.webp')
        }
        onMouseOut={(e) => (e.currentTarget.src = img)}*/
        />
      )}
      <h4 className={styles['card-title']}>{name}</h4>
      <p className={styles['card-price']}>{price}</p>
      <div className={styles.embossing}>
        <label htmlFor={id}>Embossing (price: +10)</label>
        <input
          type="checkbox"
          id={id}
          className={styles['embossing-checkbox']}
          onInput={(e) => setEmbossing(e.currentTarget.checked)}
        />
      </div>
      <button className={styles['card-add-cart']}>add Cart</button>

      <div
        className={styles['heart-1']}
        style={getStyleFavorite()}
        onClick={handleToggleFavorite}
      />
    </div>
  );
}

export default CardProduct;
