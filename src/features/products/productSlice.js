import products from './product.json'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products,
    CartItem:[]
}
export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{ 
        addToCart:(state,action)=>{
        state.CartItem.push(action.payload)
    } },
})
// Action creators are generated for eact case reducer function 
export const { addToCart } = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer