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
    setAllSelectedFilters(newSelectedFilters);
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
    setAllSelectedFilters(newSelectedFilters);
    handleCloseBurger();
    /*setSelectedFilters({ [name]: [value] });*/
  };
  const handleDefaultFilters = () => {
    console.log('defaultFilters', selectedFilters);
    setAllSelectedFilters(defaultSelectedFilters);
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
            <div className={styles['filter-items-wrapper']}>
              {filters.map(({ name, options }) => {
                return (
                  <Accordion key={nanoid()} title={name}>
                    <div className={styles['flex-container']}>
                      {options.map((value) => (
                        <Checkbox
                          isChecked={isChecked(name, value)}
                          key={nanoid()}
                          name={name}
                          label={value.toString()}
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
            <Button content="Применить" onClick={handleSetFilter} />
            <Button content="Сбросить" onClick={handleDefaultFilters} />
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
