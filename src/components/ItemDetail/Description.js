
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Description.css'
import ItemCount from "./ItemCount";

const Description = ( {product, itemcount, handleAdd, showItemCount } ) => {


    return (
        
            <div className="description-container">
                <img src={product.pictureUrl} alt={product.title}></img>
                    <div className='product-details'>
                        <div className='title-container'>
                            <h3>{product.title}</h3>
                        </div>
                        <h4 className='price'>${product.price}</h4>
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