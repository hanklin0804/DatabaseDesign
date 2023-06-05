// src/components/UserOrderStatus/UserOrderStatus.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './UserOrderStatus.css';
import { useNavigate } from "react-router-dom";
import UserNavbar from '../UserNavbar/UserNavbar';

function UserOrderStatus() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([
        { orderNumber: "12345678", status: "Order received" },
        { orderNumber: "87654321", status: "Preparing" },
        // Add more orders here...
    ]);

    // Simulate real-time order status update
    useEffect(() => {
        const interval = setInterval(() => {
            // Call your real-time API here instead of the following simulation
            const statuses = ["Order received", "Preparing", "Out for delivery", "Delivered"];
            setOrders(orders.map(order => {
                const nextStatus = statuses[(statuses.indexOf(order.status) + 1) % statuses.length];
                return { ...order, status: nextStatus };
            }));
        }, 5000); // change the order status every 5 seconds
        return () => clearInterval(interval); // Clean up on component unmount
    }, [orders]);

    const handleOrderCompletion = (index) => {
        let newArray = [...orders];
        newArray[index].status = "Delivered";
        setOrders(newArray);
    };

    return (
        <div>
            <UserNavbar />
            <div className="status-page">
                <Container className="status-container">
                    <h2 className="status-title">Order Status</h2>
                    {orders.map((order, index) => (
                        <Card className="status-card" key={index}>
                            <Card.Body className='status-card-body'>
                                <Row className="status-row">
                                    <Col xs={6}>
                                        <h4 className="order-number">Order Number: {order.orderNumber}</h4>
                                    </Col>
                                    <Col xs={4}>
                                        <h4 className={`status-text status-text-${order.status.split(' ').join('-').toLowerCase()}`}>Status: {order.status}</h4>
                                    </Col>
                                    <Col xs={2} className="UserOrderStatus-buttonContainer">
                                        {order.status === "Out for delivery" && (
                                            <Button className="UserOrderStatus-button" onClick={() => {
                                                handleOrderCompletion(index);
                                                navigate("/user-ratings-and-reviews");
                                                }}>
                                            Complete Order
                                            </Button>
                                        )}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </div>
        </div>
    );
}

export default UserOrderStatus;