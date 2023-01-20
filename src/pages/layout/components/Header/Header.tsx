import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';

import NavLinkCustom from '../../../../components/NavLink/NavLinkCustom';
import { routerPagesData, upperNavHeaderData } from '../../../../data/data';
import LocationTag from '../../../../components/LocationTag/LocationTag';
import Social from '../../../../components/Social/Social';
function Header() {
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
          <LocationTag color="#fff" />
          <Social color="#fff" />
        </div>
      </nav>
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
