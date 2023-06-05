// src/components/UserRatingsAndReviews/UserRatingsAndReviews.js
import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import UserNavbar from '../UserNavbar/UserNavbar';
import './UserRatingsAndReviews.css';

function UserRatingsAndReviews() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  }

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  }

  const handleSubmit = () => {
    // Submit feedback and rating here...
    navigate('/home-user');  // navigate back to home after submitting
  }

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
                  <Form.Label>Feedback</Form.Label><br/>
                  <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
                </Form.Group><br/>
                <Form.Group controlId="ratingForm">
                  <Form.Label>Rating</Form.Label><br/>
                  <Form.Control type="number" min={0} max={5} value={rating} onChange={handleRatingChange} />
                </Form.Group><br/>
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
