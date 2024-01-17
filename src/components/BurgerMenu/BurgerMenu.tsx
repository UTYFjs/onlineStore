import React, { useState } from 'react';

import cn from 'classnames';
import NavLinkCustom from '../NavLink/NavLinkCustom';
import styles from './BurgerMenu.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Link, Typography } from '@mui/material';
import { useUtilityStore, useZustandStore } from '../../store/zustandStore';
import Accordion from '../Accordeon/Accordion';
import Button from '../Button/Button';
import { nanoid } from 'nanoid';
import Checkbox from '../Checkbox/Checkbox';
import { defaultSelectedFilters, filterType } from '../../data/data';
import BubbleFilterList from '../BubbleFilterList/BubbleFilterList';
import CartContent from '../CartContent/CartContent';

interface IBurgerMenuProps {
  type: 'menu' | 'filter' | 'cart' | null;
  data: Array<{ url: string; content: string }>;
}

function BurgerMenu({ data, type }: IBurgerMenuProps) {
  const isBurgerOpen = useZustandStore((state) => state.isBurgerOpen);
  const handleShaded = useZustandStore((state) => state.handleShaded);
  const { filters, selectedFilters, setAllSelectedFilters } = useUtilityStore((state) => state);

  const [resultPrice, setResultPrice] = useState('');

  const classesBurger = cn(
    styles.burger,
    type === 'cart' ? styles.right : '',
    isBurgerOpen && styles.active
  );

  const classesBurgerTitle = cn(styles['burger-title'], type === 'cart' ? styles.right : '');

  // сделать чтобы фильтры применялись при клике на тень или не делать
  const handleCloseBurger = () => {
    setAllSelectedFilters(newSelectedFilters, 0);
    handleShaded();
  };

  const isChecked = (name: filterType, value: string | number) => {
    if (selectedFilters[name].length > 0 && selectedFilters[name].includes(value) === true) {
      console.log(' selectedFilters[name]', selectedFilters[name]);
      return true;
    }
    return false;
  };

  const newSelectedFilters = JSON.parse(JSON.stringify(selectedFilters));

  const handleSetFilter = () => {
    setAllSelectedFilters(newSelectedFilters, 0);
    handleCloseBurger();
  };
  const handleDefaultFilters = () => {
    console.log('defaultFilters', selectedFilters);
    setAllSelectedFilters(defaultSelectedFilters, 0);
    handleShaded();
  };

  const handleOnChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    let valueNew: string | number = value;
    if (name === 'cardCapacity') {
      valueNew = +value;
    }
    if (e.currentTarget.checked) {
      newSelectedFilters[name].push(valueNew);
    } else {
      const selectedCapacityIndex = newSelectedFilters[name].indexOf(valueNew);
      newSelectedFilters[name] = [
        ...newSelectedFilters[name].slice(0, selectedCapacityIndex),
        ...newSelectedFilters[name].slice(selectedCapacityIndex + 1),
      ];
    }
    console.log('изменились фильтры', selectedFilters, name, typeof valueNew);
  };
  const handleSetResultPrice = (resultPrice: string) => {
    setResultPrice(resultPrice);
  };
  let contentTitle: JSX.Element = <div></div>;
  let content: JSX.Element = <div></div>;

  const countSelectedFilters = Object.values(selectedFilters).reduce((prev, item) => {
    return prev + item.length;
  }, 0);

  const customCSSStyles: React.CSSProperties = {
    width: 'fit-content',
    textAlign: 'center',
    lineHeight: '1rem',
    padding: '10px 0.6rem',
    fontWeight: '600',
    fontSize: '12px',
  };
  const stylesSelectedFiltersButton = countSelectedFilters
    ? { background: '#ff4f33' }
    : { color: '#363636', background: '#fff', border: '1px solid #a7a7a7' };

  switch (type) {
    case 'menu':
      contentTitle = (
        <Typography
          className={styles['burger-title-item']}
          component={Link}
          href={'/'}
          underline={'none'}
          sx={{
            fontSize: '1rem',
            fontWeight: 600,
            color: 'black',
          }}
        >
          @SUGAKOVGENNADII
        </Typography>
      );
      content = (
        <nav className={styles['menu-content']}>
          {data.map((item) => (
            <NavLinkCustom
              key={item.url + item.content}
              url={item.url}
              content={item.content}
              color={'#000'}
              onClick={() => handleCloseBurger()}
            />
          ))}
        </nav>
      );
      break;
    case 'filter':
      // to do refactor and optimise contentTitle
      contentTitle = (
        <h3
          className={styles['burger-title-item']}
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: 'black',
          }}
        >
          ФИЛЬТРЫ
        </h3>
      );
      content = (
        <div className={styles['menu-content-wrapper']}>
          <div className={styles['menu-content-filter']}>
            <BubbleFilterList
              customStyles={{
                //always render also in mobile phones
                display: 'flex',
                flexDirection: 'column',
                gap: '3px',
                marginBottom: '10px',
              }}
              customStylesBubbleItem={{
                width: '200px',
                alignSelf: 'start',
                paddingLeft: '5px',
                background: '#ff4f33',
                color: '#fff',
                textAlign: 'center',
                border: 'none',
              }}
            />
            <div className={styles['filter-items-wrapper']}>
              {filters.map(({ name, options, textName, textOptions }, index) => {
                const countActiveFilters = selectedFilters[name].length;
                const customStyles = countActiveFilters ? { color: '#ff4f33' } : {};
                return (
                  <Accordion key={nanoid()} title={textName.ru} customStyles={customStyles}>
                    <div className={styles['flex-container']}>
                      {textOptions.ru.map((value, index) => (
                        <Checkbox
                          isCheckedDefault={isChecked(name, options[index])}
                          key={nanoid()}
                          name={name}
                          label={options[index].toString()}
                          textLabel={value.toString()}
                          onChange={handleOnChangeCheckbox}
                        />
                      ))}
                    </div>
                  </Accordion>
                );
              })}
            </div>
          </div>
          <div className={styles.buttons}>
            {' '}
            <Button
              content="Сбросить"
              onClick={handleDefaultFilters}
              customStyles={{ ...customCSSStyles, ...stylesSelectedFiltersButton }}
            />
            <Button content="Применить" onClick={handleSetFilter} customStyles={customCSSStyles} />
          </div>
        </div>
      );
      break;
    case 'cart':
      contentTitle = (
        <h3
          className={styles['burger-title-item']}
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: 'black',
          }}
        >
          КОРЗИНА
        </h3>
      );
      content = (
        <div className={styles['menu-content-wrapper']}>
          <div className={styles['menu-content-cart']}>
            <CartContent setResultPrice={handleSetResultPrice} />
          </div>
          <div className={styles.result}>
            {!!resultPrice && (
              <div className={styles['result-price']}>
                <div>
                  <b>ИТОГО: </b>
                </div>
                <div className={styles['result-price-value']}>
                  <b>{resultPrice}</b>
                </div>
              </div>
            )}
            <Button content={'Не является интернет-магазином'} customStyles={{ width: '100%' }} />
          </div>
        </div>
      );
      break;
    case null:
      //todo: add some content
      content = (
        <div className={styles['menu-content']}>somethig went wrong please check burgerType</div>
      );
      break;
  }

  return (
    <div className={classesBurger}>
      <div className={classesBurgerTitle}>
        {contentTitle}
        <CloseIcon
          className={styles['burger-close']}
          fontSize="large"
          onClick={() => handleCloseBurger()}
        />
      </div>

      {content}
    </div>
  );
}

export default BurgerMenu;
