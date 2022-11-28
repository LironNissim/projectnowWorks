import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {sendOrders} from '../MyAPI/orderAPI';

const initialState = {
  myorders: [],
  totalPrice:0,
  status: "idle"
};
export const sendOrderAsync = createAsyncThunk(
  'order/sendOrders',
    async (payload) => {
    const response = await sendOrders(payload.myorders, payload.token);
    return response.data;
  }
);
export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
      sendCart: (state,action) => {
        state.myorders=action.payload
        let myCalc=0
        action.payload.forEach(prod => {
        myCalc += prod.amount*prod.price  
        });
        state.totalPrice=myCalc
        console.log("state.totalPrice", state.totalPrice)
      },
      clearAr: (state) => {
        state.myorders=[]
      }
      
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendOrderAsync.fulfilled, (state,action) => {
        // state.myorders=action.payload
      });
  },

});

export const { sendCart, clearAr } = orderSlice.actions;
export const selectorders=(state)=>state.order.myorders;
export const selecttotalPrice=(state)=>state.order.totalPrice;
export default orderSlice.reducer;
