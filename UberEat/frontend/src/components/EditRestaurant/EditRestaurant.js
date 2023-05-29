// src/components/EditRestaurant/EditRestaurant.js
import React, { useState } from 'react';
import { Container, Form, Button, Card, Image } from 'react-bootstrap';
import './EditRestaurant.css';
import RestautantNavbar from '../RestautantNavbar/RestautantNavbar';

function EditRestaurant() {
  const [name, setName] = useState("Example Restaurant");
  const [description, setDescription] = useState("This is an example description.");
  const [address, setAddress] = useState("123 Example Street");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [setLogo] = useState(null); // New state for the logo
  const [logoURL, setLogoURL] = useState(null); // New state for the logo URL

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Restaurant ${name} updated!`);
  }

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setLogoURL(URL.createObjectURL(file));
    }
  }

  return (
    <div>
      <RestautantNavbar />
      
      <div className="edit-restaurant-page">
        <Container className="edit-restaurant-container">
          <h2 className="edit-restaurant-title">Edit Your Restaurant</h2>
          <Card className="edit-restaurant-current-info-card">
            <Card.Body>
              {logoURL && <Image className='edit-restaurant-logo' src={logoURL} alt="Restaurant Logo" />}
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Description:</strong> {description}</p>
              <p><strong>Address:</strong> {address}</p>
              <p><strong>Phone Number:</strong> {phoneNumber}</p>
            </Card.Body>
          </Card>

          <Form onSubmit={handleSubmit} className="edit-restaurant-form">
            <Form.Group>
              <Form.Label>Logo: </Form.Label>
              <Form.Control type="file" onChange={handleLogoChange} />
            </Form.Group><br/>

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
