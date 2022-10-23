import { useContext } from "react"
import { Alert, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartContext from "../../context/cartContext"

const Item = ({product}) => {

    const {isInCart} = useContext(CartContext)
    const id = product.id

    return(
        <>
        <Card style={{ width: '18rem' }}>
                <div className="card-img">
                <Card.Img variant="top" src={product.pictureUrl}/>
                </div>
                <Card.Body>
                    <Card.Title className="card-data">{product.title}</Card.Title>
                    <Card.Text className="card-data">
                        {product.description}
                    </Card.Text>
                <div className="card-lower">
                        <h3>${product.price}</h3>
                        { !isInCart(id) &&
                        <Link to={`item/${product.id}`}>
                            <Button variant="primary">
                                Ver detalle
                            </Button>
                        </Link>
                        }
                        {isInCart(id) &&
                            <Alert key='success' variant='success'>
                                En el carrito
                            </Alert>
                        }
                </div>
          </Card.Body>
        </Card>
        </>
    )
}

export default Item