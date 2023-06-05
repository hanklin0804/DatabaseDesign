import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./UserRestaurantShowReviews.css";
import UserNavbar from "../UserNavbar/UserNavbar";

import * as reviewAPI from "../../API/review";
import { useUser } from "../UserProvider/UserProvider";

function UserRestaurantShowReviews() {
  const user = useUser();
  const [restaurantReviews, setRestaurantReviews] = useState([]);

  const fetchData = async (user, restaurant) => {
    const reviews = await reviewAPI.getReview();
    const userReviews = reviews.data.filter(
      (review) => review.user.uuid === user.uuid
    );
    setRestaurantReviews(userReviews);
  };

  useEffect(() => {
    fetchData(user);
  }, [user]);

  return (
    <div>
      <UserNavbar />
      <div className="showReview-page">
        <Container className="showReview-container">
          <h2 className="showReview-title">Restaurant Reviews</h2>
          {restaurantReviews.map((review, index) => (
            <Card className="showReview-card" key={index}>
              <Card.Body className="showReview-card-body">
                <Row className="showReview-row">
                  <Col xs={6}>
                    <h4 className="restaurant-name">
                      User: {review.user.first_name} {review.user.last_name}
                    </h4>
                    <h4 className="restaurant-name">
                      Restaurant: {review.restaurant.name}
                    </h4>
                    <h6 className="showReview-rating">
                      Rating: {review.rating}
                    </h6>
                  </Col>
                  <Col xs={6}>
                    <h6 className="showReview-comment">
                      Comment: {review.review}
                    </h6>
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

export default UserRestaurantShowReviews;
