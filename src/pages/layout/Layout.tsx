import { Box, Container } from '@mui/system';
import React from 'react';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Layout = () => {
  return (
    <>
      <Box className={styles.layout}>
        <Header />
        <Container component="main" className={styles.main}>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
