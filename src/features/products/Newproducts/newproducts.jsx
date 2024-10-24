import React from "react";
import { useGetProductQuery } from "../../../services/products";

function Newproducts(){
    var {isLoading,data} = useGetProductQuery();
    console.log(isLoading,data)
    return ( 
    <div>
        <h1>Newproducts</h1>
        {
            isLoading && <h3>Aagu it's been preparing....</h3>
        },
        {
            !isLoading && data.map((product)=>{
                return <li>{product.title}</li>
            })
        }
    </div>
) }
export default Newproducts;