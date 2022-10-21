import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap"
import { Link } from "react-router-dom";
import './OrderModal.css'


const OrderModal = ({showModal, onClose, onBuy, orderId}) => {
    const [showOrderId, setShowOrderId] = useState(false);

    return (
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su Email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Nombre"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Telefono"/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                {!orderId && (
                <>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={onBuy}>
                        Comprar
                    </Button>
                </>
                )}
                {orderId && (
                <div className="footerOrderSuccess">
                    <Alert key='success' variant='success'>
                        {orderId}
                    </Alert>
                    <Link to="/">
                        <Button variant="success" >
                            Volver a la tienda
                        </Button>
                    </Link>
                </div> 
                )}
            </Modal.Footer>
    </Modal>
    )
}

export default OrderModal