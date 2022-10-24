import { useEffect, useState } from "react"
import Loader from "../Loader"
import Item from "./Item"
import './itemList.css'

const ItemList = ({products = []}) => {

    const [loading, setLoading] = useState(true)


        useEffect(()=> {
            setLoading(false)
        }, [products])
    
    return(
        
        <>
        {
            products.length <= 0 && <Loader loading={loading}/>
        }
        <div className="itemList">
        {products.map((product) => (<Item key={product.id} product={product}/>))}
        </div>
        </>
    )
}

export default ItemList

