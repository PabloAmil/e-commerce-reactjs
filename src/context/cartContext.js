import { createContext, useState } from "react";


const CartContext = createContext()

export default CartContext;

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {
        if (!isInCart(product.id)) {
            const item = {
            ...product,
            quantity
        };
        
        setCart([...cart, item]);
        } else {
        const itemIdex = cart.findIndex((item) => item.id === parseInt(product.id))

        const itemDraft = { ...cart[itemIdex] };
        itemDraft.quantity = itemDraft.quantity + quantity;

        const cartDraft = [...cart];
        cartDraft[itemIdex] = itemDraft;
        setCart(cartDraft)
        }
    }

    const removeItem = (itemId) => {
        const cartDraft = cart.filter((item) => item.id !== itemId);
        setCart(cartDraft); 
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => cart.some((item) => item.id === id);


    const total = cart.reduce((acc, item) => {
            return acc += (item.price * item.quantity)
        }, 0)
    
    const quantity = cart.reduce((acc, item) => {
        return acc += item.quantity
    }, 0)



    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, total, quantity, setCart}}>
            {children}
        </CartContext.Provider>     
    )
};



