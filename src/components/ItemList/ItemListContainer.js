import './ItemListContainer.css';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getAllProducts, getProductsByCategory } from '../../Utils/products';


const ItemListContainer = ({greeting}) => {

    const { categoryId } = useParams();
    const [products, setProducts] = useState([])
    

    useEffect(()=> {

        if(categoryId) {
            getProductsByCategory(categoryId)
                .then((data)=> setProducts(data)
                )
                
                .catch((error) => console.warn(error)) 
        } else {
            getAllProducts()
                .then((data)=> setProducts(data))
                .catch((error) => console.warn(error)) 
        }
    }, [categoryId])

    return (
        <>
        <h1>Nuestros Productos</h1>
        <h3 className="greeting">{greeting}</h3>
        <ItemList products={products}/>
        </> 
    )
}

export default ItemListContainer

