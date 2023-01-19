import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import About from './pages/About/About';
import Catalog from './pages/Catalog/Catalog';
import Layout from './pages/layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import SelectProducts from './pages/SelectProducts/SelectProducts';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="collection" element={<Catalog />}></Route>
          <Route path="collection/:id" element={<SelectProducts />} />
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
