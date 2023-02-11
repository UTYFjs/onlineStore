import { userInfo } from 'os';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import About from './pages/About/About';
import Catalog from './pages/Catalog/Catalog';
import HowToOrder from './pages/HowToOrder/HowToOrder';
import Layout from './pages/layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import SelectProducts from './pages/Catalog/SelectProducts/SelectProducts';
import { useZustandStore } from './store/zustandStore';

function App() {
  //const root = document.getElementById('root');
  const isShadedActive = useZustandStore((state) => state.isShadedActive);
  if (isShadedActive) {
    document.body.classList.add('lock');
  } else {
    document.body.classList.remove('lock');
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="collection" element={<Catalog />}></Route>
          <Route path="collection/:id" element={<SelectProducts />} />
          <Route path="about" element={<About />}></Route>
          <Route path="how-to-order" element={<HowToOrder />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
