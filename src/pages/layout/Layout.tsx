import { Box, Container } from '@mui/system';
import React, { useEffect } from 'react';
import styles from './Layout.module.scss';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import { routerPagesData } from '../../data/data';
//import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useZustandStore } from '../../store/zustandStore';
import ShadedBackground from '../../components/ShadedBackground/ShadedBackground';

const Layout = () => {
  // redux state management
  /*const dispatch = useAppDispatch();
  const isBurgerOpen = useAppSelector((store) => store.formRedux.isBurgerOpen);
*/

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //zustand state management
  const burgerType = useZustandStore((state) => state.burgerType);
  const setBurgerType = useZustandStore((state) => state.setBurgerType);
  const setIsBurgerOpen = useZustandStore((state) => state.setIsBurgerOpen);
  const setIsShadedActive = useZustandStore((state) => state.setIsShadedActive);

  const burgerOpen = () => {
    setIsBurgerOpen();
    setIsShadedActive();
  };

  const handleMenuOpen = (type: 'filter' | 'menu' | 'cart' = 'menu') => {
    /*dispatch(setBurgerOpen(!isBurgerOpen));*/
    setBurgerType(type);
    burgerOpen();
  };

  return (
    <>
      <Box className={styles.layout}>
        <Header setMenu={handleMenuOpen} />
        <ShadedBackground />
        <BurgerMenu type={burgerType} data={routerPagesData} />

        <Container
          maxWidth={'xl'}
          sx={{ paddingLeft: '5px', paddingRight: '5px', paddingBottom: '5px' }}
          disableGutters
          component="main"
          className={styles.main}
        >
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
