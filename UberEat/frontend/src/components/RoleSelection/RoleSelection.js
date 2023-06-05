// src/components/RoleSelection/RoleSelection.js
import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RoleSelection.css";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <Container className="role-selector-container">
      <div className="role-selector-content">
        <h2>Select Your Role</h2>
        <div className="button-wrapper">
          <Button variant="primary" onClick={() => navigate("/home-user")}>
            User
          </Button>
        </div>
        <div className="button-wrapper">
          <Button
            variant="secondary"
            onClick={() => navigate("/home-restaurant")}
          >
            Restaurant
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default RoleSelection;
