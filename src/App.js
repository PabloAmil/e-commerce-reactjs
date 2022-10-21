
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import "./components/ItemList/ItemListContainer.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import  { CartProvider } from './context/cartContext';
import Loader from './components/Loader';
import { useState } from 'react';


function App() {

    const [loading, setLoading] = useState(true)

    return (
        <>
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                {/* <Loader loading={loading}/> */}
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={"Elija de nuestro catalogo de bebidas"}/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Elija de nuestro catalogo de bebidas"}/>}/>
                    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
        </>
        );
}
export default App;



