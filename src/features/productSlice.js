import products from './products.json';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    products,
}
export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{ },
})
const productReducer = productSlice.reducer
export default productReducer;