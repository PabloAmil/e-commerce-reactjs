import { TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";
import './CartWidget.css';

const CartWidget = () => {
    return (
        <Link to={'./cart'}>
            <TbShoppingCart />
        </Link>
    );
}

export default CartWidget;