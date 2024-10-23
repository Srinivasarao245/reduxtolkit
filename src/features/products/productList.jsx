import React from "react";
import { useSelector } from 'react-redux'

function ProductList(){
    var products = useSelector(state=>state.productReducer)
    console.log(products);
    return (
        <div>
            <h1>Products</h1>
          
        </div>
    )
}
export default ProductList