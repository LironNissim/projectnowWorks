import { configureStore } from '@reduxjs/toolkit';
// import { Middleware } from '@reduxjs/toolkit';
import productsSlice from './MySlicers/productsSlice';
import loginSlice from './MySlicers/loginSlice';
import notesSlice from './MySlicers/notesSlice';
import orderSlice from './MySlicers/orderSlice';
import cartSlice from './MySlicers/cartSlice';

 

export const store = configureStore({
  reducer: {
    product: productsSlice,
    cart: cartSlice,
    login: loginSlice,
    notes: notesSlice,
    order: orderSlice,
    cart: cartSlice,
  }
})
