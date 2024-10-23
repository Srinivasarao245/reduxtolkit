import { configureStore } from '@reduxjs/toolkit';
import producrReducer from '../features/products/productSlice';
export const store = configureStore({
    reducer:{ 
        producrReducer },
})