import { Box, Container } from '@mui/system';
import React from 'react';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
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

  //zustand state management

  const setIsBurgerOpen = useZustandStore((state) => state.setIsBurgerOpen);
  const setIsShadedActive = useZustandStore((state) => state.setIsShadedActive);
  const setHandleShaded = useZustandStore((state) => state.setHandleShaded);

  const handleBurgerOpen = () => {
    /*dispatch(setBurgerOpen(!isBurgerOpen));*/
    setIsBurgerOpen();
    setIsShadedActive();
    setHandleShaded(() => {
      setIsBurgerOpen();
      setIsShadedActive();
      setHandleShaded(() => {});
    });
  };

  return (
    <>
      <Box className={styles.layout}>
        <Header setMenu={handleBurgerOpen} />
        <ShadedBackground />
        <BurgerMenu data={routerPagesData} />

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
