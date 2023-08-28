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
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentProduct) {
      navigate('/collection');
    }
    console.log('useEffect');
  }, [currentProduct, navigate]);

  const { cartProducts, addCartProduct, removeCartProduct, updateCartProduct } = useCartStore();

  const [isDisabled, setIsDisabled] = useState(true);
  const [color, setColor] = useState(getColor() || mockSelectRules[0].value);
  if (!currentProduct) return null;

  const isInCart = cartProducts.find((item) => item.cartProduct.id === currentProduct.id);

  const newCartProduct: ICartProduct = {
    cartProduct: currentProduct,
    color: color,
    count: 1,
    price: currentProduct.price,
    priceCurrency: 'GEL',
    discount: 0,
    embossing: '',
  };

  //to do good resolve for get color
  function getColor() {
    const cartProduct1 = cartProducts?.find((item) => item.cartProduct.id === currentProduct?.id);
    return cartProduct1?.color;
  }
  const { id, price } = currentProduct;
  const imgSrc = './../.' + currentProduct.thumbnail.primary;

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
  console.log('PRODUCT FROM PRODUCT PAGE', currentProduct);
  return (
    <div>
      <div className={styles.grid}>
        <div className={styles['image-wrapper']}>
          {
            //<ImgLazy src={imgSrc} />
            //imagesSrc && <CustomSlider slides={imagesSrc} />
            //imagesSrc && <Slider slides={imagesSrc} />
            imagesSrc && <SliderSwiper images={imagesSrc} />
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
            <p className={styles.spacing}>Выберите коробочку</p>
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
              name="embossing"
              onChange={(e) => {
                console.log('isDisabled', isDisabled, e.currentTarget.checked);
                e.currentTarget.checked ? setIsDisabled(false) : setIsDisabled(true);
              }}
            />
          </div>
          <Input
            placeholder={'Добавьте свои инициалы'}
            isDisable={isDisabled}
            onChange={handleChangeEmbossingInput}
          />
          <p className={styles.price} onClick={handleRemoveProductFromCart}>
            {price + ' gel'}
          </p>
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
