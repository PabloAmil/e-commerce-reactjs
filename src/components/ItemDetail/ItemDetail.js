import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";
import Item from "../ItemList/Item"
import Description from "./Description";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(cartContext)
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true)
    
    const handleAdd = (value) => {
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
        
    };


    return (
        <div className="itemDetailContainer">
            <Description product={product} itemcount={showItemCount} handleAdd={handleAdd} showItemCount={showItemCount}/>
        </div>
    )
}

export default ItemDetail