import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('User registered!');
    navigate('/');
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
          </Form.Group><br/>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
