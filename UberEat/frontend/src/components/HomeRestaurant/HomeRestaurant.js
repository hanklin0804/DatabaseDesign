// src/components/HomeRestaurant/HomeRestaurant.js
import React from 'react';
import { Container, Button, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './HomeRestaurant.css';

function HomeRestaurant() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={() => navigate('/home-restaurant')}>Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigate('/edit-restaurant')} className="menu-items-link">Edit_Restaurant</Nav.Link>
          <Nav.Link onClick={() => navigate('/manage-menu-items')} className="menu-items-link">Menu_Items</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={() => navigate('/')} className="menu-items-link">Logout</Nav.Link>
        </Nav>
      </Navbar>

      <Container className="edit-restaurant-container edit-restaurant-background">
      <div className="edit-restaurant-content">
        <h1>Welcome, Restaurant Managment!</h1>
        <p>You can edit your restaurant detail, and manage your menu. </p>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <Link to="/edit-restaurant">
              <Button variant="primary" className="edit-restaurant-button">
              Edit Restaurant
              </Button>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Link to="/manage-menu-items">
              <Button variant="secondary" className="edit-restaurant-button">
              Manage Menu Items
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
    </div>
  );
}

export default HomeRestaurant;
