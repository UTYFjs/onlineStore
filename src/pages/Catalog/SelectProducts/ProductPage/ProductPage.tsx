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
import { ICartProduct, useCartStore } from '../../../../store/zustandStore';

function ProductPage() {
  const { product: currentProductId } = useParams();
  const currentProduct = dataProducts.find((product) => product.id === currentProductId);
  let productInCart: ICartProduct | undefined;
  const navigate = useNavigate();
  const { cartProducts, addCartProduct, removeCartProduct, updateCartProduct } = useCartStore();
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

  const isInCart = cartProducts.find((item) => item.cartProduct.id === currentProduct.id);

  const newCartProduct: ICartProduct = {
    cartProduct: currentProduct,
    color: color,
    count: 1,
    // to do remove || 1000
    price: currentPrice || currentProduct.price,
    priceCurrency: 'GEL',
    discount: 0,
    isGiftBox: isCheckedGiftBox,
    isEmbossing: isCheckedEmbossing,
    embossing: embossingValue,
  };

  const imagesSrc = currentProduct.images.map((image) => './../.' + image);

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
  //console.log('PRODUCT FROM PRODUCT PAGE', currentProduct);
  return (
    <div>
      <div className={styles.grid}>
        <div className={styles['image-wrapper']}>
          {
            //<ImgLazy src={imgSrc} />
            //imagesSrc && <CustomSlider slides={imagesSrc} />
            //imagesSrc && <Slider slides={imagesSrc} />
            imagesSrc && (
              <div className={styles['swiper-wrapper']}>
                <SliderSwiper images={imagesSrc} />
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
            <Checkbox
              isChecked={isCheckedEmbossing}
              name="embossing"
              onChange={handleAddEmbossing}
            />
          </div>
          <Input
            placeholder={'Добавьте свои инициалы'}
            isDisable={!isCheckedEmbossing}
            value={embossingValue}
            onChange={handleChangeEmbossingInput}
          />
          <p className={styles.price}>{currentPrice + ' gel'}</p>
          <Button
            className="full-width"
            content={isInCart ? 'Remove from Cart' : 'Add To Cart'}
            onClick={isInCart ? handleRemoveProductFromCart : handleAddProductToCart}
            customStyles={
              isInCart
                ? { color: '#363636', background: '#fff', border: '1px solid #a7a7a7' }
                : { border: '1px solid transparent' }
            }
          />
          <div>
            <h4>Характеристики:</h4>
            <p>Цвет:</p>
            <p>Материал: Натуральная кожа</p>
            <p>Размеры: </p>
          </div>
          <div>
            <h4>Функциональность:</h4>
            <p>Купюры:</p>
            <p>Пластиковые карты: </p>
            <p>Монеты: </p>
          </div>
          <div>
            <h4>Описание:</h4>
            <p></p>
          </div>
          <div>
            <h4>Характеристики:</h4>
            <p>Цвет:</p>
            <p>Материал: Натуральная кожа</p>
            <p>Размеры: </p>
          </div>
          <div>
            <h4>Функциональность:</h4>
            <p>Купюры:</p>
            <p>Пластиковые карты: </p>
            <p>Монеты: </p>
          </div>
          <div>
            <h4>Описание:</h4>
            <p></p>
          </div>
          <div>
            <h4>Характеристики:</h4>
            <p>Цвет:</p>
            <p>Материал: Натуральная кожа</p>
            <p>Размеры: </p>
          </div>
          <div>
            <h4>Функциональность:</h4>
            <p>Купюры:</p>
            <p>Пластиковые карты: </p>
            <p>Монеты: </p>
          </div>
          <div>
            <h4>Описание:</h4>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <h4>Характеристики:</h4>
        <p>Цвет:</p>
        <p>Материал: Натуральная кожа</p>
        <p>Размеры: </p>
      </div>
      <div>
        <h4>Функциональность:</h4>
        <p>Купюры:</p>
        <p>Пластиковые карты: </p>
        <p>Монеты: </p>
      </div>
      <div>
        <h4>Описание:</h4>
        <p></p>
      </div>
    </div>
  );
}

export default ProductPage;
