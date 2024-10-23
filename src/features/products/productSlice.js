import products from './product.json'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products,
}
export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{  }
})
// Action creators are generated for eact case reducer function 
const producrReducer = productSlice.reducer
export default producrReducer