import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "./UserRestaurantDetail.css";
import UserNavbar from "../UserNavbar/UserNavbar";

import * as menuAPI from "../../API/menu";

function UserRestaurantDetail() {
  const location = useLocation();
  const restaurant = location.state.restaurant;
  const [menuData, setMenuData] = useState([]);

  const addToCart = (dish) => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedRestaurantUUID = localStorage.getItem("restaurantUUID");
    const storedRestaurantName = localStorage.getItem("restaurantName");

    let updatedCartItems = [];
    if (storedCartItems) {
      updatedCartItems = JSON.parse(storedCartItems);
    }

    if (storedRestaurantUUID !== restaurant.uuid) {
      // Clear cart items if the restaurant has changed
      updatedCartItems = [];
      localStorage.setItem("restaurantUUID", restaurant.uuid);
      localStorage.setItem("restaurantName", restaurant.name);
    } else if (storedRestaurantName !== restaurant.name) {
      // Update restaurant name if it has changed
      localStorage.setItem("restaurantName", restaurant.name);
    }

    // Check if the dish is already in the cart
    const existingDish = updatedCartItems.find((item) => item.id === dish.id);
    if (existingDish) {
      // If it is, increase the quantity
      existingDish.quantity += 1;
    } else {
      // Otherwise, add the dish to the cart with an initial quantity of 1
      updatedCartItems.push({
        id: dish.id,
        name: dish.name,
        description: dish.description,
        price: dish.price,
        quantity: 1, // Set initial quantity to 1
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
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
      <div className="restaurant-detail-page">
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
    </div>
  );
}

export default UserRestaurantDetail;
