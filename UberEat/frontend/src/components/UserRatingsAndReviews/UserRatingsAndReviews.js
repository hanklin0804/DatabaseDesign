// src/components/UserRatingsAndReviews/UserRatingsAndReviews.js
import React, { useEffect, useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import UserNavbar from "../UserNavbar/UserNavbar";
import "./UserRatingsAndReviews.css";

import { useUser } from "../UserProvider/UserProvider";
import * as reviewAPI from "../../API/review";
import * as restaurantAPI from "../../API/restaurant";

function UserRatingsAndReviews() {
  const user = useUser();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({});
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleFeedbackChange = (e) => setFeedback(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);

  const handleSubmit = async () => {
    const data = {
      user_uuid: user.uuid,
      restaurant_uuid: restaurant.uuid,
      rating: rating,
      review: feedback,
    };
    const res = await reviewAPI.postReview(data);
    if (res.status === 201) alert("Comment succeessfully!");
    else alert("Comment failed!");
    navigate("/user-restaurant-show-reviews");
  };

  const fetchData = async (user) => {
    const restaurants = await restaurantAPI.getRestauarnt();
    const restaurant = restaurants.data.find(
      (restaurant) => restaurant.user.uuid === user.uuid
    );
    setRestaurant(restaurant);
  };
  useEffect(() => {
    fetchData(user);
  }, [user]);

  return (
    <div>
      <UserNavbar />
      <div className="review-page">
        <Container className="review-container">
          <h2 className="review-title">Review and Feedback</h2>
          <Card className="review-card">
            <Card.Body>
              <Form>
                <Form.Group controlId="feedbackForm">
                  <Form.Label>Feedback</Form.Label>
                  <br />
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={feedback}
                    onChange={handleFeedbackChange}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="ratingForm">
                  <Form.Label>Rating</Form.Label>
                  <br />
                  <Form.Control
                    type="number"
                    min={0}
                    max={5}
                    value={rating}
                    onChange={handleRatingChange}
                  />
                </Form.Group>
                <br />
                <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default UserRatingsAndReviews;
