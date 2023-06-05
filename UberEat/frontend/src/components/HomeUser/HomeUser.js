import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import * as restuarntAPI from "../../API/restaurant";
import "./HomeUser.css";
import UserNavbar from "../UserNavbar/UserNavbar";

function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <Col sm={12} md={6} lg={4} key={restaurant.id}>
      <Card
        className="restaurant-card"
        onClick={() =>
          navigate("/user-restaurant-detail", { state: { restaurant } })
        }
      >
        <Card.Img variant="top" src={restaurant.logo} />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            <br />
            {restaurant.description}
            <br />
            <br />
            Address: {restaurant.address}
            <br />
            <br />
            Phone: {restaurant.phone_number}
            <br />
            <br />
            Rating: {restaurant.rating}
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function HomeUser() {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchData = async () => {
    const res = await restuarntAPI.getRestauarnt();
    setRestaurantData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = restaurantData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredRestaurants(filtered);
  }, [searchTerm, restaurantData]);

  const restaurantsToShow =
    filteredRestaurants.length > 0 ? filteredRestaurants : restaurantData;

  return (
    <div>
      <UserNavbar />
      <div className="home-user-page">
        <Container className="home-user-container">
          <h2 className="text-center">Restaurants</h2>
          <div className="search-bar-container">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by restaurant name"
              className="search-bar"
            />
          </div>
          <Row className="cards">
            {restaurantsToShow.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeUser;
