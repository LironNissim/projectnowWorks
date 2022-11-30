import { configureStore } from '@reduxjs/toolkit';
// import { Middleware } from '@reduxjs/toolkit';
import productsSlice from './MySlicers/productsSlice';
import loginSlice from './MySlicers/loginSlice';
import notesSlice from './MySlicers/notesSlice';
import orderSlice from './MySlicers/orderSlice';

 
export const store = configureStore({
  reducer: {
    product: productsSlice,
    login: loginSlice,
    notes: notesSlice,
    order: orderSlice,
    
  }
})
