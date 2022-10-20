import { useEffect, useState } from "react";
import './ItemCount.css'
import { Button } from "react-bootstrap";


const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))

    const handleSubstract = () => {
        setCount(count - 1);
    }

    const handleAdd = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])


    return (
        <>
        <div className="item-counter">
            <button disabled={count <= 1} onClick={handleSubstract}>-</button>
            <h4>Cantidad: {count}</h4>
            <button disabled={count >= stock} onClick={handleAdd}>+</button>
        </div>
        <div>
            <Button variant='primary' disabled={stock <= 0} onClick={()=> onAdd(count)}>
                Agregar al carrito
            </Button>
        </div>
        </>
    )
};

export default ItemCount