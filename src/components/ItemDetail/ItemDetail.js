import { useState } from "react";
import Item from "../ItemList/Item"
import Counter from "./Counter";

const ItemDetail = ({ product }) => {

   
    return (
        <>
        <Item product={product}/>
        <Counter/>
        </>
    )
}

export default ItemDetail