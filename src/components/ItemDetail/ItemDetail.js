import { useContext, useState } from "react";
import cartContext from "../../context/cartContext";
import Description from "./Description";


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