/* src/components/UserRestaurantDetail/UserRestaurantDetail.css */
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "./UserRestaurantDetail.css";
import UserNavbar from "../UserNavbar/UserNavbar";

import * as menuAPI from "../../API/menu";

function UserRestaurantDetail() {
  const location = useLocation();
  const restaurant = location.state.restaurant;
  const [cartItems, setCartItems] = useState([]);
  const [menuData, setMenuData] = useState([]);

  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, dish]));
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await menuAPI.getMenu();
      const filteredMenu = res.data.filter(
        (menu) => menu.restaurant.id === restaurant.id
      );
      setMenuData(filteredMenu);
    };
    fetchData();
  }, [restaurant]);

  return (
    <div>
      <UserNavbar />
      <Container className="restaurant-detail-container">
        <h2 className="title">{restaurant.name}</h2>
        <p className="description">{restaurant.description}</p>

        <Row className="cards">
          {menuData.map((menu) => (
            <Col sm={12} md={4} key={menu.id}>
              <Card className="dish-card">
                <Card.Body>
                  <Card.Title>{menu.name}</Card.Title>
                  <Card.Text>{menu.description}</Card.Text>
                  <Card.Text>Price: {menu.price}</Card.Text>
                  <div className="button-container">
                    <Button
                      className="add_cart_btn"
                      variant="primary"
                      onClick={() => addToCart(menu)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default UserRestaurantDetail;
