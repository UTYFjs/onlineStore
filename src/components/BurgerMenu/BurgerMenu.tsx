import React, { useEffect } from 'react';
import { upperNavHeaderData } from '../../data/data';
import cn from 'classnames';
import NavLinkCustom from '../NavLink/NavLinkCustom';
import styles from './BurgerMenu.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Link, styled, Typography } from '@mui/material';

interface IBurgerMenuProps {
  data: Array<{ url: string; content: string }>;
  menuActive: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function BurgerMenu({ data, menuActive, setMenu }: IBurgerMenuProps) {
  const classesBurger = cn(styles.burger, menuActive && styles.active);
  const classesBackground = cn(styles['burger-background'], menuActive && styles.active);
  /*const Typography = styled('a')(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 600,
    color: 'black',
    textDecoration: 'none',
  }));*/
  useEffect(() => {
    console.log('mount');
  }, []);
  return (
    <div className={classesBurger}>
      <div className={classesBackground} onClick={() => setMenu(!menuActive)} />
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
          onClick={() => setMenu(!menuActive)}
        />
      </div>
      <nav className={styles['menu-content']}>
        {data.map((item) => (
          <NavLinkCustom
            key={item.url + item.content}
            url={item.url}
            content={item.content}
            color={'#000'}
            onClick={() => setMenu(!menuActive)}
          />
        ))}
      </nav>
    </div>
  );
}

export default BurgerMenu;
