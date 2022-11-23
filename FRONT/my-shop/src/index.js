import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './app/Components/Login';
import Products from './app/Components/Products';
import ACart from './app/Components/ACart';
import AppOld from './app/Components/AppOld';
// import { configureStore } from '@reduxjs/toolkit';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/products" element={<Products />} />
            <Route path="/getImages" element={<AppOld />} />
            <Route path="/posts" element={<AppOld />} />
            <Route path="/cart" element= {<ACart/>} />
            {/* <Route path="/category" element={<Category />} />
            <Route path="/categories" element={<MyCats />} >
              <Route path=":id" element={<Products />} /> */}
            {/* </Route> */}
          </Route>
        </Routes>

      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

reportWebVitals();
