// src/components/EditRestaurant/EditRestaurant.js
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Navbar, Nav, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { editRestaurant, getRestaurant } from '../../services/api';
import './EditRestaurant.css';

function EditRestaurant() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(true);

  // Assuming the restaurant ID is 1, but you should replace this with the actual restaurant ID
  const restaurantId = 1;

  useEffect(() => {
    const fetchRestaurant = async () => {
      const restaurant = await getRestaurant(restaurantId);
      setName(restaurant.name);
      setDescription(restaurant.description);
      setAddress(restaurant.address);
      setPhoneNumber(restaurant.phone_number);
      setLoading(false);
    }
    fetchRestaurant();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, description, address, phone_number: phoneNumber };
    await editRestaurant(restaurantId, data);
    navigate('/home-restaurant');
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={() => navigate('/home-restaurant')}>Home</Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link onClick={() => navigate('/manage-menu-items')} className="menu-items-link">Menu_Items</Nav.Link>
      </Nav>
      <Nav>
          <Nav.Link onClick={() => navigate('/')} className="menu-items-link">Logout</Nav.Link>
        </Nav>
      </Navbar>

      <Container className="edit-restaurant-container edit-restaurant-background">
        <h2 >Edit Your Restaurant</h2><hr />
        <div className="div-current-info">
          <div className="current-info">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Phone Number:</strong> {phoneNumber}</p>
          </div>
        </div>
        <hr />
        <hr />
        <Form onSubmit={handleSubmit}>
            <Card className="mb-4">
                <Card.Body>
                <Form.Group>
                    <Form.Label>New Name: </Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Body>
                <Form.Group>
                    <Form.Label>New Description: </Form.Label>
                    <Form.Control type="text" onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Body>
                <Form.Group>
                    <Form.Label>New Address: </Form.Label>
                    <Form.Control type="text" onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Body>
                <Form.Group>
                    <Form.Label>New Phone Number: </Form.Label>
                    <Form.Control type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Group>
                </Card.Body>
            </Card>

            <Button variant="primary" type="submit" className="btn-submit">Submit</Button>
            </Form>

      </Container>
    </div>
  );
}

export default EditRestaurant;
