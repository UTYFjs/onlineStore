import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import About from './pages/About/About';
import Catalog from './pages/Catalog/Catalog';
import ProductPage from './pages/Catalog/SelectProducts/ProductPage/ProductPage';
import SelectProducts from './pages/Catalog/SelectProducts/SelectProducts';
import Favorites from './pages/Favorites/Favorites';
import HowToOrder from './pages/HowToOrder/HowToOrder';
import Layout from './pages/layout/Layout';
import MainPage from './pages/MainPage/MainPage';

import { useFavoriteStore, useZustandStore } from './store/zustandStore';
import NotFound from './pages/NotFound/NotFound';

function App() {
  //const root = document.getElementById('root');
  const isShadedActive = useZustandStore((state) => state.isShadedActive);
  if (isShadedActive) {
    document.body.classList.add('lock');
  } else {
    document.body.classList.remove('lock');
  }
  const favoriteProducts = useFavoriteStore((state) => state.favoriteProducts);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="collection" element={<Catalog />} />
          <Route path="collection/:id" element={<SelectProducts />} />
          <Route path="collection/:id/:product" element={<ProductPage />} />
          <Route path="about" element={<About />} />
          <Route path="how-to-order" element={<HowToOrder />} />
          <Route path="favorites" element={<Favorites products={favoriteProducts} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
