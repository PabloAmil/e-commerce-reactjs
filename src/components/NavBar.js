import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";


const NavBar = () => {
    return (   
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <Link to={'/'}>
                BlackAndWine
                </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/category/productos'>Productos</Nav.Link>
                <Nav.Link as={Link} to='/category/Blancos'>Blancos</Nav.Link>
                <Nav.Link as={Link} to='/category/Tintos'>Tintos</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
    )
}


export default NavBar;

