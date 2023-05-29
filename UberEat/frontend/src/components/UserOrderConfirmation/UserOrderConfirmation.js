// src/components/UserOrderConfirmation/UserOrderConfirmation.js
import React from 'react';
import { Container, Table, Row, Col, Button  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './UserOrderConfirmation.css';
import UserNavbar from '../UserNavbar/UserNavbar';

function UserOrderConfirmation() {
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = React.useState({
        orderNumber: "12345678",
        orderItems: [
            { name: "Dish 1", quantity: 2, price: 200 },
            { name: "Dish 2", quantity: 1, price: 150 },
        ],
        totalPrice: 550,
        shippingAddress: "123 Main St, City, Country",
        estimatedDelivery: "2023-05-29",
    });

    return (
        <div>
            <UserNavbar />
            <div className="confirmation-page">
            <Container className="confirmation-container">
                <h2 className="confirmation-title">Order Confirmation</h2>
                <div className="order-details">
                    <p><strong>Order Number:</strong> {orderDetails.orderNumber}</p>
                    <p><strong>Shipping Address:</strong> {orderDetails.shippingAddress}</p>
                    <p><strong>Estimated Delivery:</strong> {orderDetails.estimatedDelivery}</p>
                </div>
                <Table striped bordered hover className="confirmation-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.orderItems.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Row className="checkout-row">
                    <Col xs={6}>
                        <h4 className="total-price">Total: ${orderDetails.totalPrice}</h4>
                    </Col>
                    <Col xs={6} className="Go-to-Home-button-container">
                        <Button variant="primary" onClick={() => navigate('/home-user')} className="Go-to-Home-button">Go to Home</Button>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
}

export default UserOrderConfirmation;
