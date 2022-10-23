import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../Utils/products";
import  ItemDetail  from "./ItemDetail";


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState()
    
    useEffect(()=> {
        getProduct(id)
        .then((data) => setProduct(data))
        .catch(error => console.warn(error))
    }, [id])

    return(
        <div className="itemDetailContainer">
        {product && <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer