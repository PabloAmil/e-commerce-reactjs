
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import "./components/ItemList/ItemListContainer.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import  { CartProvider } from './context/cartContext';


function App() {

    return (
        <>
        <BrowserRouter basename='/e-commerce-reactjs'>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={"Bienvenido! algo que te interese?"}/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Encuentra lo que estas buscando'}/>}/>
                    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
        </>
        );
}
export default App;



