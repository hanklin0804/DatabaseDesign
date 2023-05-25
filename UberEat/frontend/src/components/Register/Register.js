// src/components/Register/Register.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { register } from '../../services/api';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = await register({ 
      first_name: firstName, 
      last_name: lastName, 
      email, 
      password, 
      phone_number: phoneNumber, 
      delivery_address: deliveryAddress 
    });

    console.log(user);
    // handle the response here. For example, save the user and the token in the state
  };

  return (
    <Container className="register-container">
      <div className="register-content">
        <h2>Register</h2>
        <Form onSubmit={handleSubmit} className="register-form">
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicDeliveryAddress">
            <Form.Label>Delivery Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your delivery address" value={deliveryAddress} onChange={e => setDeliveryAddress(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
