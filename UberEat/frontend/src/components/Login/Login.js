// src/components/Login.js
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import * as userAPI from "../../API/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await userAPI.login({ email: email, password: password });
    if (res.status === 200) {
      navigate("/role-selector");
      window.location.reload();
    } else alert("Email or password error!");
  };

  return (
    <Container className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <Form className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
