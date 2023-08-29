import { AppBar, Box, Link, Typography } from '@mui/material';
import React from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';

import NavLinkCustom from '../../../../components/NavLink/NavLinkCustom';
import { routerPagesData, upperNavHeaderData } from '../../../../data/data';
import LocationTag from '../../../../components/LocationTag/LocationTag';
import Social from '../../../../components/Social/Social';
import { useNavigate } from 'react-router-dom';
interface IHeaderProps {
  setMenu: (type: 'filter' | 'menu' | 'cart') => void;
}

function Header({ setMenu }: IHeaderProps) {
  const navigate = useNavigate();

  const iconsFontSize = { xs: '33px', sm: '33px', md: '35px', lg: '38px' };
  return (
    <AppBar component="header" position="relative" className={styles.header} color={'transparent'}>
      <nav className={styles['up-navigation']}>
        <div className={styles.info}>
          {' '}
          {upperNavHeaderData.map((item) => (
            <NavLinkCustom
              key={item.url + item.content}
              url={item.url}
              content={item.content}
              color={'#fff'}
            />
          ))}
        </div>
        <div className={styles.contact}>
          {window.innerWidth > 600 && <LocationTag color="#fff" />}
          <Social color="#fff" />
        </div>
      </nav>
      <nav className={styles.toolbar}>
        <MenuIcon
          sx={{ display: { xs: 'block', md: 'none', lg: 'none' }, fontSize: iconsFontSize }}
          color={'action'}
          onClick={() => setMenu('menu')}
        />
        <SearchIcon
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
            fontSize: iconsFontSize,
          }}
          color={'action'}
        />
        <Typography
          className={styles.logo}
          component={Link}
          href={'/'}
          underline={'none'}
          sx={{
            fontSize: { xs: '33px', sm: '38px', md: '38px', lg: '48px' },
            fontWeight: 600,
            color: 'black',
          }}
        >
          GENOLI
        </Typography>
        <Box className={styles.icons}>
          <FavoriteIcon
            className={styles.favorite}
            onClick={() => {
              navigate('/favorites');
            }}
            sx={{ fontSize: iconsFontSize }}
            color={'error'}
          />
          <ShoppingCartOutlinedIcon
            className={styles.cart}
            sx={{ fontSize: iconsFontSize }}
            color={'error'}
            onClick={() => {
              setMenu('cart');
            }}
          />
        </Box>
      </nav>
      <nav className={styles.navigation}>
        {routerPagesData.map((item) => (
          <NavLinkCustom
            key={item.url + item.content}
            url={item.url}
            content={item.content}
            color={'#000'}
          />
        ))}

        {/*<NavLink
          to="/collection"
          className={({ isActive }) =>
            styles['nav-link'] + ' ' + (isActive ? styles['active-link'] : '')
          }
        >
          Весь каталог
        </NavLink>

        <Typography className={styles['nav-link']} component={Link} href="about" underline="none">
          About
        </Typography>*/}
      </nav>
    </AppBar>
  );
}

export default Header;
