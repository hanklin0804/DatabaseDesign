// src/components/HomeRestaurant/HomeRestaurant.js
import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeRestaurant.css";
import RestautantNavbar from "../RestautantNavbar/RestautantNavbar";

function HomeRestaurant() {
  return (
    <div>
      <RestautantNavbar />
      <div className="edit-restaurant-background">
        <Container className="edit-restaurant-container ">
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
                  <Button
                    variant="secondary"
                    className="edit-restaurant-button"
                  >
                    Manage Menu Items
                  </Button>
                </Link>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Link to="/restaurant-orders">
                  <Button
                    variant="secondary"
                    className="edit-restaurant-button"
                  >
                    Orders
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HomeRestaurant;