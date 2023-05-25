// src/components/HomeUser.js
import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function HomeUser() {
  // This would usually come from an API
  const [restaurants, setRestaurants] = useState([]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to our food delivery platform</h1>
          <h2>Delicious food delivered to you</h2>
          <p>Discover a wide variety of meals from different cuisines and have them delivered straight to your door.</p>
        </Col>
      </Row>

      <Row>
        {restaurants.map(restaurant => (
          <Col xs={12} md={6} lg={4} key={restaurant.id}>
            <Card>
              <Card.Img variant="top" src={restaurant.logo} />
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text>{restaurant.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeUser;
