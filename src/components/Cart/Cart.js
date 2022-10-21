import { useContext, useState } from "react"
import CartContext from "../../context/cartContext"
import Table from 'react-bootstrap/Table';
import { Button, Container} from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import './Cart.css'
import { Link } from "react-router-dom";
import { createOrder } from "../../Utils/orders";
import OrderModal from "../OrderModal/OrderModal";


const buyerMock = {
    name: "Pablo",
    phone: '1234-5678',
    email: 'pabloamil@mail.com'
}

const Cart = () => {

    const { cart, total, removeItem, clear } = useContext(CartContext);
    const [user, setUser] = useState(buyerMock)
    const [showModal, setShowModal] = useState(false)
    const [orderId, setOrderId] = useState()

    const handleRemove = (itemId) => {
        removeItem(itemId)
    };

    const handleOpen = () => {
        setShowModal(true)
    };

    const handleClose = () => {
        setShowModal(false)
    };

    const handleBuy = async () => {
        const newOrder = {
            buyer: buyerMock,
            items: cart,
            total
        }
        const newOrderId = await createOrder(newOrder)
        setOrderId(newOrderId);
        clear()
    };


    return(
        <Container className="cart-container">
            {cart.length > 0 &&
            <>
                <Table striped>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <> 
                                <tr key={item.id}>
                                    <td><img src={item.pictureUrl} className="cart-img"></img></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><FaTrashAlt onClick={() => handleRemove(item.id)}/></td>
                                </tr>
                            </>
                            ))
                        }  
                    </tbody>
                </Table>
                <div className="total">
                    <h3>Total: ${total}</h3>
                    <Button variant="success" onClick={handleOpen}>Comprar</Button>
                    <Button variant="warning" onClick={clear}>Vaciar carrito</Button>
                </div>
            </>
            }
            {cart.length === 0 && 
            <> 
                <h2>Aun no has agregado nada!</h2>
                <Link to='/'>
                    <Button variant="primary">Ir a los productos</Button>
                </Link>    
            </>
            }
            <OrderModal showModal={showModal} onClose={handleClose} onBuy={handleBuy} orderId={orderId}></OrderModal>
        </Container>
    )
};

export default Cart

