import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";
import './CartWidget.css';

const CartWidget = () => {
    const  { quantity } = useContext(CartContext)
    return (
        <>
          <Link to={'./cart'}>
            <TbShoppingCart className="shopping-cart"/>
          </Link>
          {quantity > 0 && (
            <Badge pill bg="danger">{quantity}</Badge>
          )}
        </>
    );
}

export default CartWidget;
