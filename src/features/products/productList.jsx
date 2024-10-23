import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "./productSlice";

function ProductList(){
    var {products} = useSelector(state=>state.productReducer)
    var Dispatch = useDispatch()
    return (
        <div>
            <h1>Products</h1>
            { products?.map((product)=>{
                return <li>{product.title}
                <button onClick={()=>{Dispatch(addToCart(product))}}>Add To Cart</button></li>
            })}
        </div>
    )
}
export default ProductList