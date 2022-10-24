import { useContext, useEffect, useState } from "react";
import './ItemCount.css'
import { Button } from "react-bootstrap";
import CartContext, {cart, handleClick} from '../../context/cartContext'


const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))
    const { cart } = useContext(CartContext)


    const handleSubstract = () => {
        setCount(count - 1);
    }

    const handleAdd = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])


    const manageClickButton = () => {
        onAdd(count) 
    }
    
    
    return (
        <div className="options">
            <div className="item-counter">
                <button disabled={count <= 1} onClick={handleSubstract} className='button-left'>-</button>
                <h4>Cantidad: {count}</h4>
                <button disabled={count >= stock} onClick={handleAdd} className='button-right'>+</button>
            </div>
            <div>
                <Button variant='primary' disabled={stock <= 0} onClick={manageClickButton}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
};

export default ItemCount