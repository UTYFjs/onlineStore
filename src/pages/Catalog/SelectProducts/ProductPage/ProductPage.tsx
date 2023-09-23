import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Select from '../../../../components/Select/Select';
import { dataProducts } from '../../../../data/dataProducts';
import styles from './ProductPage.module.scss';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import { mockSelectRules } from '../../../../mock/mock';

import SliderSwiper from '../../../../components/SliderSwiper/SliderSwiper';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import { ICartProduct, useCartStore, useFavoriteStore } from '../../../../store/zustandStore';
import Heart from '../../../../components/Heart/Heart';
import { ruColors } from '../../../../data/data';
import Accordion from '../../../../components/Accordeon/Accordion';
import { nanoid } from 'nanoid';

function ProductPage() {
  const { product: currentProductId } = useParams();
  const currentProduct = dataProducts.find((product) => product.id === currentProductId);
  let productInCart: ICartProduct | undefined;
  const navigate = useNavigate();
  const { cartProducts, addCartProduct, removeCartProduct, updateCartProduct } = useCartStore();
  const { favoriteProducts, addProduct, removeProduct } = useFavoriteStore();

  useEffect(() => {
    if (!currentProduct) {
      navigate('/collection');
    } else {
      productInCart = cartProducts.find((item) => item.cartProduct.id === currentProduct.id);
    }
    console.log('useEffect');
  }, [currentProduct, navigate]);

  const [isCheckedGiftBox, setIsCheckedGiftBox] = useState(false);
  const [isCheckedEmbossing, setIsCheckedEmbossing] = useState(false);
  const [embossingValue, setEmbossingValue] = useState('');
  // to do fix first init color
  const [color, setColor] = useState(mockSelectRules[0].value);
  const [currentPrice, setCurrentPrice] = useState(currentProduct?.price);

  useEffect(() => {
    if (productInCart) {
      setColor(productInCart.color);
      if (productInCart.embossing) {
        setEmbossingValue(productInCart.embossing);
      }
      if (productInCart.isEmbossing) {
        setIsCheckedEmbossing(true);
      }
      if (productInCart.isGiftBox) {
        setIsCheckedGiftBox(true);
      }
      setCurrentPrice(productInCart.price);
      console.log('useEffect Product in cart', 'isCheckedEmbossing', isCheckedEmbossing);
    }
  }, [productInCart]);
  if (!currentProduct) return null;

  const isFavorite = favoriteProducts.some((product) => product.id === currentProduct.id);
  const isInCart = cartProducts.find((item) => item.cartProduct.id === currentProduct.id);

  const newCartProduct: ICartProduct = {
    cartProduct: currentProduct,
    color: color,
    count: 1,
    // to do remove || 1000
    price: currentPrice || currentProduct.price,
    priceCurrency: 'BYN',
    discount: 0,
    isGiftBox: isCheckedGiftBox,
    isEmbossing: isCheckedEmbossing,
    embossing: embossingValue,
  };

  const imagesSrc = currentProduct.images.map((image) => './../.' + image);
  console.log('imagesSrc', imagesSrc);
  //const { currentProduct, setCurrentProduct } = useUtilityStore((state) => state);
  /*useEffect(() => {
    return () => {
      console.log('unmount');
      setCurrentProduct(null);
    };
  }, [setCurrentProduct]);*/

  const handleChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    newCartProduct.color = newColor;
    if (isInCart) {
      console.log('update color', color, newCartProduct, cartProducts);
      updateCartProduct(newCartProduct);
    }
  };
  const handleAddGiftBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedGiftBox(e.currentTarget.checked);
    if (e.currentTarget.checked) {
      setCurrentPrice((prev) => {
        if (prev) {
          return prev + 10;
        }
        return prev;
      });
    } else {
      setCurrentPrice((prev) => {
        if (prev) {
          return prev - 10;
        }
        return prev;
      });
    }
  };
  const handleAddEmbossing = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedEmbossing(e.currentTarget.checked);
    if (e.currentTarget.checked) {
      setCurrentPrice((prev) => {
        if (prev) {
          return prev + 10;
        }
        return prev;
      });
    } else {
      setCurrentPrice((prev) => {
        if (prev) {
          return prev - 10;
        }
        return prev;
      });
    }

    updateCartProduct(newCartProduct);
    //console.log('isDisabled', isDisabled, e.currentTarget.checked);
    console.log(isCheckedEmbossing);
  };
  const handleChangeEmbossingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    newCartProduct.embossing = value;
    if (isInCart) {
      updateCartProduct(newCartProduct);
    }
  };
  const handleAddProductToCart = () => {
    addCartProduct(newCartProduct);

    console.log('add Product to cart', isInCart);
  };
  const handleRemoveProductFromCart = () => {
    removeCartProduct(currentProduct.id);
    console.log('isInCart', isInCart);
    console.log('remove Product from cart', isInCart);
  };
  const handleAddToFavorite = () => {
    isFavorite ? removeProduct(currentProduct.id) : addProduct(currentProduct);
  };
  //console.log('PRODUCT FROM PRODUCT PAGE', currentProduct);
  return (
    <div className={styles.grid}>
      <div className={styles['image-wrapper']}>
        {
          //<ImgLazy src={imgSrc} />
          //imagesSrc && <CustomSlider slides={imagesSrc} />
          //imagesSrc && <Slider slides={imagesSrc} />
          imagesSrc && (
            <div className={styles['swiper-wrapper']}>
              <SliderSwiper images={imagesSrc} />
              <Heart
                onClick={handleAddToFavorite}
                isActive={isFavorite}
                customStyles={{ width: '13%', height: '13%', top: '85%', left: '83%' }}
              />
            </div>
          )
        }
      </div>
      <div className={styles['content-wrapper']}>
        <h3 className={styles.title}>{currentProduct.title}</h3>

        <div className={styles['flex-row']}>
          <p className={styles.spacing}>Выберите цвет</p>
          <Select
            data={mockSelectRules}
            checkedValue={color}
            onChange={handleChangeColor}
            customStyles={{ height: '35px' }}
          />
        </div>
        <div className={styles['flex-row']}>
          <p
            className={styles.spacing}
            onClick={() => {
              console.log(isCheckedEmbossing);
            }}
          >
            Добавить подарочную коробочку
          </p>
          <Checkbox isChecked={isCheckedGiftBox} name="embossing" onChange={handleAddGiftBox} />
        </div>
        <div className={styles['flex-row']}>
          <p
            className={styles.spacing}
            onClick={() => {
              console.log(cartProducts, isInCart);
            }}
          >
            Добавить инициалы
          </p>
          {
            //todo checkbox инициалы
          }
          <Checkbox isChecked={isCheckedEmbossing} name="embossing" onChange={handleAddEmbossing} />
        </div>
        <Input
          placeholder={'Добавьте свои инициалы'}
          isDisable={!isCheckedEmbossing}
          value={embossingValue}
          onChange={handleChangeEmbossingInput}
        />
        <p className={styles.price}>{currentPrice + ' byn'}</p>
        <Button
          className="full-width"
          content={isInCart ? 'Убрать из корзины' : 'В корзину'}
          onClick={isInCart ? handleRemoveProductFromCart : handleAddProductToCart}
          customStyles={
            isInCart
              ? { color: '#363636', background: '#fff', border: '1px solid #a7a7a7' }
              : { border: '1px solid transparent' }
          }
        />
        <div className={styles.description}>
          <Accordion title="Описание" customStyles={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
            <>
              {Array.isArray(currentProduct.description.ru) &&
                currentProduct.description.ru.map((item) => (
                  <p className={styles['description-text']} key={nanoid()}>
                    {item}
                  </p>
                ))}
              {typeof currentProduct.description.ru === 'string' && currentProduct.description.ru}
            </>
          </Accordion>

          {currentProduct.category === 'notebook' && (
            <p className={styles['description-characteristics']}>
              {' '}
              <b>Формат листов:</b> А5
            </p>
          )}
          <p className={styles['description-characteristics']}>
            {' '}
            <b>Цвет:</b> {ruColors[currentProduct.color as keyof typeof ruColors] || ''}
          </p>
          <p className={styles['description-characteristics']}>
            {' '}
            <b>Материал:</b> Натуральная кожа
          </p>
          {currentProduct.category !== 'belt' && (
            <p className={styles['description-characteristics']}>
              <b>Размеры:</b>{' '}
            </p>
          )}
          {currentProduct.category === 'belt' && (
            <>
              <p className={styles['description-characteristics']}>
                <b>Ширина:</b> 40 мм
              </p>
              <p className={styles['description-characteristics']}>
                <b>Толщина кожи:</b> 3,5-4,2 мм
              </p>
            </>
          )}
        </div>
        {(currentProduct.category === 'wallet' || currentProduct.category === 'cardholder') && (
          <div className={styles.description}>
            <h4 className={styles['description-title']}>
              <b>Функциональность:</b>{' '}
            </h4>
            <p className={styles['description-characteristics']}>
              {' '}
              <b>Купюры:</b> {currentProduct?.cash}
            </p>
            <p className={styles['description-characteristics']}>
              {' '}
              <b>Карты:</b> {currentProduct.cardCapacity}
            </p>
            <p className={styles['description-characteristics']}>
              {' '}
              <b>Монеты:</b> {currentProduct?.coinbox}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
