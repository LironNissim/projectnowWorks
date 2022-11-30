import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts, addProducts,updProducts, removeProduct } from '../MyAPI/prodAPI';

const initialState = {
  productslst: [],
  status: "idle"
};
export const getProdAsync = createAsyncThunk(
  'products/getProducts',
    async () => {
    const response = await getProducts();
    console.log("response.data", response.data)
    return response.data;
  }
);

export const addProdAsync = createAsyncThunk(
  'products/addProducts',
  async (newProd) => {
    console.log()
    const response = await addProducts(newProd,newProd.form_data);
    return response.data;
  }
);
export const updProdAsync = createAsyncThunk(
  'Dress/updProducts',
  async (newProd) => {
    const response = await updProducts(newProd, newProd.id);
    return response.data;
  }
);
export const removeProdAsync = createAsyncThunk(
  'Dress/removeProduct',
  async (payload) => {
    console.log(payload)
    const response = await removeProduct(payload);
    return response.data;
  }
);
export const productsSlice = createSlice({
  name: 'products',
  initialState,
   reducers: {
  },

  extraReducers: (builder) => {
  builder
  .addCase(getProdAsync.fulfilled, (state,action) => {
    console.log(action.payload)
    state.productslst=action.payload
  // state.status="loading"
    })
  .addCase(addProdAsync.fulfilled, (state, action) => {
    state.productslst.push(action.payload);
    state.status = 'idle';
    console.log(action.payload)
    })
  .addCase(updProdAsync.fulfilled, (state, action) => {
      let oldProd=state.productslst.find(x =>x.id === action.payload.id); 
      oldProd.desc=action.payload.desc
      oldProd.price=action.payload.price
      console.log(action.payload)
    })
  .addCase(removeProdAsync.fulfilled, (state, action) => {
      state.productslst=state.productslst.filter(x=>x.id !==action.payload);
    });
  },
});

export const { get,add, update, remove } = productsSlice.actions;
export const selectProducts=(state)=>state.product.productslst;
export default productsSlice.reducer;
