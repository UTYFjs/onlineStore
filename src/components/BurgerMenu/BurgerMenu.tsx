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

interface IBurgerMenuProps {
  type: 'menu' | 'filter' | null;
  data: Array<{ url: string; content: string }>;
}

function BurgerMenu({ data, type }: IBurgerMenuProps) {
  const isBurgerOpen = useZustandStore((state) => state.isBurgerOpen);
  const handleShaded = useZustandStore((state) => state.handleShaded);

  const filters = useUtilityStore((state) => state.filters);
  const classesBurger = cn(styles.burger, isBurgerOpen && styles.active);

  /*const Typography = styled('a')(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 600,
    color: 'black',
    textDecoration: 'none',
  }));*/
  const handleCloseBurger = () => {
    handleShaded();
  };
  const handleSetFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('текущие', e.currentTarget.value, e.currentTarget.checked);
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
              {filters.map(({ name, options, selectedOptions }) => {
                return (
                  <Accordion key={nanoid()} title={name}>
                    <div className={styles['flex-container']}>
                      {options.map((value) => (
                        <Checkbox
                          isChecked={selectedOptions.includes(value) ? true : false}
                          key={nanoid()}
                          id={name}
                          label={value.toString()}
                          onChange={handleSetFilter}
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
            <Button content="Применить" />
            <Button content="Сбросить" />
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
