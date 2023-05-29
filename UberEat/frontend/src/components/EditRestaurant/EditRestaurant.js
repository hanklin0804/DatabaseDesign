// src/components/EditRestaurant/EditRestaurant.js
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EditRestaurant.css';
import RestautantNavbar from '../RestautantNavbar/RestautantNavbar';

function EditRestaurant() {
  const navigate = useNavigate();
  const [name, setName] = useState("Example Restaurant");
  const [description, setDescription] = useState("This is an example description.");
  const [address, setAddress] = useState("123 Example Street");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Restaurant ${name} updated!`);
  }

  return (
    <div>
      <RestautantNavbar />
      
      <div className="edit-restaurant-page">
        <Container className="edit-restaurant-container">
          <h2 className="edit-restaurant-title">Edit Your Restaurant</h2>
          <Card className="edit-restaurant-current-info-card">
            <Card.Body>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Description:</strong> {description}</p>
              <p><strong>Address:</strong> {address}</p>
              <p><strong>Phone Number:</strong> {phoneNumber}</p>
            </Card.Body>
          </Card>

          <Form onSubmit={handleSubmit} className="edit-restaurant-form">
            <Form.Group>
              <Form.Label>New Name: </Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group><br/>
          
            <Form.Group>
              <Form.Label>New Description: </Form.Label>
              <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group><br/>

            <Form.Group>
              <Form.Label>New Address: </Form.Label>
              <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Group><br/>

            <Form.Group>
              <Form.Label>New Phone Number: </Form.Label>
              <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </Form.Group>
            <div className='edit-restaurant-btn-submit-container'>
              <Button variant="success" type="submit" className="edit-restaurant-btn-submit">Submit</Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default EditRestaurant;
