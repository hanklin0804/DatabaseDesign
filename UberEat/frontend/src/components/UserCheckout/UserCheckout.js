// src/components/UserCheckout/UserCheckout.js
import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './UserCheckout.css';
import UserNavbar from '../UserNavbar/UserNavbar';

function UserCheckout() {
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = React.useState(500); // just a placeholder for now

    return (
        <div >
        <UserNavbar />
        <div className="checkout-page">
        <Container className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <Form className="checkout-form">
                    <Form.Group className="checkout-row">
                        <Form.Label className="checkout-label">Payment Method: </Form.Label>
                        <Form.Control as="select" className="checkout-input">
                            <option>Credit Card</option>
                            <option>PayPal</option>
                            <option>Bank Transfer</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="checkout-row">
                        <Form.Label className="checkout-label">Shipping Address: </Form.Label>
                        <Form.Control className="checkout-input" type="text" placeholder="123 Main St, City, Country" />
                    </Form.Group>
                    <Row className="checkout-row">
                    <Col xs={6}>
                        <h4 className="total-price">Total: ${totalPrice}</h4>
                    </Col>
                    <Col xs={6} className="Confirm-Purchase">
                        <Button onClick={() => navigate('/user-order-confirmation')}   variant="success" type="submit" block className="confirm-button" >
                            Confirm Purchase
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    </div>
    </div>
    );
}

export default UserCheckout;
