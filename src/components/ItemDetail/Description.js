import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Description.css'
import ItemCount from "./ItemCount";

const Description = ( {product, itemcount, handleAdd, showItemCount} ) => {
    return (
        
            <div className="description-container">
                <img src={product.pictureUrl}></img>
                    <div className='product-details'>
                        <h3>{product.title}</h3>
                        <h4>{product.description}</h4>
                        <h4>${product.price}</h4>
                    {
                        showItemCount && (
                        <ItemCount initial={1} stock={15} onAdd={handleAdd}/>
                        )
                    }
                    {
                    !showItemCount && (
                        <div className='options'>
                            <Link to="/cart">
                                <Button variant="success">Al carrito</Button>
                            </Link>
                            <Link to='/'>
                                <Button variant="primary">Seguir comprando</Button>
                            </Link>
                        </div>
                    ) 
                    }
                    </div>
                </div>
        
            
    )
}

export default Description