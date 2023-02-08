import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import { routerPagesData } from '../../data/data';

const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <Box className={styles.layout}>
        <Header setMenu={setMenuActive} />

        <BurgerMenu menuActive={menuActive} setMenu={setMenuActive} data={routerPagesData} />

        <Container component="main" className={styles.main}>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
