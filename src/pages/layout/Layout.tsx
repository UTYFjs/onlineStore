import { Box, Container } from '@mui/system';
import React from 'react';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import { routerPagesData } from '../../data/data';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setBurgerOpen } from '../../store/slices';
import { useZustandStore } from '../../store/zustandStore';

const Layout = () => {
  // redux state management
  /*const dispatch = useAppDispatch();
  const isBurgerOpen = useAppSelector((store) => store.formRedux.isBurgerOpen);
*/

  //zustand state management
  const isBurgerOpen = useZustandStore((state) => state.isBurgerOpen);
  const setIsBurgerOpen = useZustandStore((state) => state.setIsBurgerOpen);

  const handleBurgerOpen = () => {
    /*dispatch(setBurgerOpen(!isBurgerOpen));*/
    setIsBurgerOpen();
  };

  return (
    <>
      <Box className={styles.layout}>
        <Header setMenu={handleBurgerOpen} />

        <BurgerMenu menuActive={isBurgerOpen} setMenu={handleBurgerOpen} data={routerPagesData} />

        <Container component="main" className={styles.main}>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
