// import logo from './logo.svg';
import './App.css';
import React from "react";
import ProductList from './features/productList';
import { useSelector } from 'react-redux';

function App() {
  var {cartItems} = useSelector(state=>state.productReducer)
  console.log(cartItems)
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>$riniva$</h1>
      <h1>CartItemsCount:{cartItems?.length}</h1>
      <ProductList></ProductList>
    </>
  );
}

export default App;
