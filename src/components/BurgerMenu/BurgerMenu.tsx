import React from 'react';

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

interface IBurgerMenuProps {
  type: 'menu' | 'filter' | null;
  data: Array<{ url: string; content: string }>;
}

function BurgerMenu({ data, type }: IBurgerMenuProps) {
  const isBurgerOpen = useZustandStore((state) => state.isBurgerOpen);
  const handleShaded = useZustandStore((state) => state.handleShaded);

  const { filters, selectedFilters, setAllSelectedFilters } = useUtilityStore((state) => state);
  const classesBurger = cn(styles.burger, isBurgerOpen && styles.active);

  /*const Typography = styled('a')(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 600,
    color: 'black',
    textDecoration: 'none',
  }));*/

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
    //console.log('текущие', e.currentTarget.value, e.currentTarget.checked);
    setAllSelectedFilters(newSelectedFilters, 0);
    handleCloseBurger();
    /*setSelectedFilters({ [name]: [value] });*/
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
  let contentTitle: JSX.Element = <div></div>;
  let content: JSX.Element = <div></div>;

  const countSelectedFilters = Object.values(selectedFilters).reduce((prev, item) => {
    return prev + item.length;
  }, 0);

  const customCSSStyles: React.CSSProperties = {
    width: '120px',
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
            fontSize: '2rem',
            fontWeight: 600,
            color: 'black',
          }}
        >
          GENOLI
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
      contentTitle = (
        <h3
          className={styles['burger-title-item']}
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: 'black',
          }}
        >
          FILTERS
        </h3>
      );
      content = (
        <div className={styles['menu-content-wrapper']}>
          <div className={styles['menu-content-filter']}>
            <BubbleFilterList
              customStyles={{
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
                          isChecked={isChecked(name, options[index])}
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
    case null:
      //todo: add some content
      content = (
        <div className={styles['menu-content']}>somethig went wrong please check burgerType</div>
      );
      break;
  }

  return (
    <div className={classesBurger}>
      <div className={styles['burger-title']}>
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
