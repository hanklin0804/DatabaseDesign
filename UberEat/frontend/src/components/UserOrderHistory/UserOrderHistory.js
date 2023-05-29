// src/components/UserOrderHistory/UserOrderHistory.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import './UserOrderHistory.css';
import UserNavbar from '../UserNavbar/UserNavbar';

function UserOrderHistory() {
    const [orderHistory] = useState([
        { 
            orderNumber: "12345678", 
            restaurant: "Best Pizza",
            dishes: [
                { name: "Mushroom Pizza", quantity: 1, price: 200 },
                { name: "Cheese Pizza", quantity: 2, price: 150 },
            ],
            totalPrice: 500,
            paymentMethod: "Credit Card"
        },
        { 
            orderNumber: "48735678", 
            restaurant: "Best Pizza",
            dishes: [
                { name: "Mushroom Pizza", quantity: 1, price: 200 },
                { name: "Cheese Pizza", quantity: 2, price: 150 },
            ],
            totalPrice: 500,
            paymentMethod: "Credit Card"
        },
        // Add more orders here...
    ]);

    return (
        <div>
            <UserNavbar />
            <div className="history-page">
                <Container className="history-container">
                    <h2 className="history-title">Order History</h2>
                    {orderHistory.map((order, index) => (
                        <Card className="history-card" key={index}>
                            <Card.Body className='history-card-body'>
                                <Row className="history-row">
                                    <Col xs={6}>
                                        <h4 className="restaurant-name">Restaurant: {order.restaurant}</h4>
                                        <h5 className="order-number">Order Number: {order.orderNumber}</h5>
                                    </Col>
                                    <Col xs={6}>
                                        <h5 className="payment-method">Payment Method: {order.paymentMethod}</h5>
                                        <h5 className="total-price">Total Price: {order.totalPrice}</h5>
                                    </Col>
                                </Row>
                                <Table striped bordered hover className="history-table">
                                    <thead>
                                        <tr>
                                            <th>Dish</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.dishes.map((dish, dishIndex) => (
                                            <tr key={dishIndex}>
                                                <td>{dish.name}</td>
                                                <td>{dish.quantity}</td>
                                                <td>{dish.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </div>
        </div>
    );
}

export default UserOrderHistory;