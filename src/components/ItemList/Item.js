import { useContext } from "react"
import { Alert, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartContext from "../../context/cartContext"



const Item = ({product}) => {

    const {isInCart, cart} = useContext(CartContext)
    
    const checkCart = (e) => {
       const id = product.id
       if(isInCart(id)){
           e.preventDefault()
           console.log('it is in')
       } 
    }

    return(

        <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.pictureUrl}/>
          <Card.Body>
              <Card.Title className="card-data">{product.title}</Card.Title>
              <Card.Text className="card-data">
                  {product.description}
              </Card.Text>
              <div className="card-lower">
                    <h3>${product.price}</h3>
                    {
                    <Link to={`item/${product.id}`}>
                        <Button variant="primary" onClick={checkCart}>
                            Ver detalle
                        </Button>
                    </Link>
                    }
              </div>
          </Card.Body>
        </Card>
        </>
    )
}

export default Item