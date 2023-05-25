// src/components/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <Container className="home-container">
      <div className="home-content">
        <h1>Welcome to My Website</h1>
        <p>Please log in or register to continue.</p>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <Link to="/login">
              <Button variant="primary" className="home-button">
                Login
              </Button>
            </Link>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Link to="/register">
              <Button variant="secondary" className="home-button">
                Register
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Home;
