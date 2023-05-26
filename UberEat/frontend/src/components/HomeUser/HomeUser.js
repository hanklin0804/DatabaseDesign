import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomeUser.css';

function HomeUser() {
    const navigate = useNavigate();

    const dummyRestaurants = [
        {name: "Restaurant 1", description: "Description 1"},
        {name: "Restaurant 2", description: "Description 2"},
        {name: "Restaurant 3", description: "Description 3"},
        //...add more dummy restaurants if needed
    ];

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand onClick={() => navigate('/home-user')}>Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => navigate('/user-cart')} className="menu-items-link">Cart</Nav.Link>
                    <Nav.Link onClick={() => navigate('/user-order-status')} className="menu-items-link">Order Status</Nav.Link>
                    <Nav.Link onClick={() => navigate('/user-order-history')} className="menu-items-link">Order History</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => navigate('/')} className="menu-items-link">Logout</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="home-user-container">
                <h2 className="text-center">Available Restaurants</h2>
                <Row>
                    {dummyRestaurants.map((restaurant, index) => (
                        <Col sm={12} md={4} key={index}>
                            <Card className="restaurant-card">
                                <Card.Body>
                                    <Card.Title>{restaurant.name}</Card.Title>
                                    <Card.Text>{restaurant.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default HomeUser;
