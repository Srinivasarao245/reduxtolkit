// import logo from './logo.svg';
import './App.css';
import React from "react";
import ProductList from './features/products/productList';
import { useSelector } from 'react-redux';

function App() {
  var {CartItem} = useSelector(state=>state.productReducer)
  return (
    <>
      <h1 className='p-2 m-2'>$riniv@s</h1>
      <h3>CartItemsCount:{CartItem?.length}</h3>
      <ProductList></ProductList>
    </>
  );
}

export default App;
