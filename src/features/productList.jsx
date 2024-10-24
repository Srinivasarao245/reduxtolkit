import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./productSlice";
function ProductList(){
    var {products} = useSelector(state=>state.productReducer)
    var dispatch = useDispatch()
    return ( 
    <div className="d-flex flex-wrap">
        { products?.map((product)=>{
            return <div className="card text-center p-3 m-2 bg-warning border-rounded" style={{width:'17rem',height:'25rem'}} > 
                        <div className="bard-img-top align-item-center">
                            <img className="rounded-circle" src={product.image} style={{width:'15rem',height:'15rem'}} />
                                <div card-body>
                                    <b className="card-title">{product.title} </b>
                                    <p className="card-text">{product.description}</p>
                                    <button className="bg-secondary" onClick={()=>{dispatch(addToCart(product))}}>Add To Cart</button>
                                </div>
                        </div>
                    </div>}) }
    </div> )
}
export default ProductList;