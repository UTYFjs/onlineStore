import React, { useEffect } from 'react';

import cn from 'classnames';
import NavLinkCustom from '../NavLink/NavLinkCustom';
import styles from './BurgerMenu.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Link, Typography } from '@mui/material';
import { useZustandStore } from '../../store/zustandStore';

interface IBurgerMenuProps {
  data: Array<{ url: string; content: string }>;
}

function BurgerMenu({ data }: IBurgerMenuProps) {
  const isBurgerOpen = useZustandStore((state) => state.isBurgerOpen);
  const setHandleShaded = useZustandStore((state) => state.setHandleShaded);
  const handleShaded = useZustandStore((state) => state.handleShaded);

  const classesBurger = cn(styles.burger, isBurgerOpen && styles.active);

  /*const Typography = styled('a')(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 600,
    color: 'black',
    textDecoration: 'none',
  }));*/
  const handleCloseBurger = () => {
    handleShaded();
    setHandleShaded(() => {});
  };

  return (
    <div className={classesBurger}>
      <div className={styles['burger-title']}>
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
        <CloseIcon
          className={styles['burger-close']}
          fontSize="large"
          onClick={() => handleCloseBurger()}
        />
      </div>
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
    </div>
  );
}

export default BurgerMenu;
