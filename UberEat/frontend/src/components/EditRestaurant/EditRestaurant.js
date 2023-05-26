import React, { useState } from 'react';
import { Container, Form, Button, Navbar, Nav, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EditRestaurant.css';

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
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Body>
                <Form.Group>
                    <Form.Label>New Description: </Form.Label>
                    <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Body>
                <Form.Group>
                    <Form.Label>New Address: </Form.Label>
                    <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Body>
                <Form.Group>
                    <Form.Label>New Phone Number: </Form.Label>
                    <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
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
