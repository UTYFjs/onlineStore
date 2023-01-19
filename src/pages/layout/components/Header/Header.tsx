import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

import NavLinkCustom from '../../../../components/NavLink/NavLinkCustom';
function Header() {
  return (
    <AppBar component="header" position="relative" className={styles.header}>
      <nav className={styles.toolbar}>
        <SearchIcon fontSize="large" color={'action'} />
        <Typography
          className={styles.logo}
          component={Link}
          href={'/'}
          underline={'none'}
          sx={{ fontSize: '48px', fontWeight: 600, color: 'black' }}
        >
          Genoli
        </Typography>
        <Box className={styles.icons}>
          <FavoriteIcon fontSize="large" color={'error'} />
          <ShoppingCartOutlinedIcon fontSize="large" color={'error'} />
        </Box>
      </nav>
      <nav className={styles.navigation}>
        <NavLinkCustom url="/about" content="О нас"></NavLinkCustom>
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
