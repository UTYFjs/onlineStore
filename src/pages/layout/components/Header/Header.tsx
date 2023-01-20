import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import styles from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';

import NavLinkCustom from '../../../../components/NavLink/NavLinkCustom';
import { routerPagesData, upperNavHeaderData } from '../../../../data/data';
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
          <InstagramIcon
            onClick={() => window.open('https://ig.me/m/o.sugakova')}
            className={styles.icon}
            fontSize="medium"
          />
          <TelegramIcon
            onClick={() => window.open('https://t.me/o_sugakova')}
            className={styles.icon}
            fontSize="medium"
          />
          <FacebookIcon
            onClick={() => window.open('https://m.me/olga.sygakova')}
            className={styles.icon}
            fontSize="medium"
          />
          <WhatsAppIcon
            onClick={() => window.open('https://wa.me/995511150849')}
            className={styles.icon}
            fontSize="medium"
          />
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
