// frontend/src/components/UserNavbar/UserNavbar.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserNavbar.css";

import { useUser } from "../UserProvider/UserProvider";
import { useCookies } from "react-cookie";

function UserNavbar() {
  const user = useUser();
  const navigate = useNavigate();

  const [cookies, removeCookie] = useCookies([]);
  const Logout = () => {
    Object.keys(cookies).forEach((cookieName) => {
      removeCookie(cookieName);
    });
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={() => navigate("/home-user")}>Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          onClick={() => navigate("/user-cart")}
          className="menu-items-link"
        >
          Cart
        </Nav.Link>
        <Nav.Link
          onClick={() => navigate("/user-order-status")}
          className="menu-items-link"
        >
          Order Status
        </Nav.Link>
        <Nav.Link
          onClick={() => navigate("/user-order-history")}
          className="menu-items-link"
        >
          Order History
        </Nav.Link>
        <Nav.Link
          onClick={() => navigate("/user-restaurant-show-reviews")}
          className="menu-items-link"
        >
          Restaurant Review
        </Nav.Link>
      </Nav>

      <Nav>
        <Nav.Link onClick={() => Logout()} className="menu-items-link">
          Logout
        </Nav.Link>
      </Nav>
      <div style={{ flexGrow: 1 }}></div>
      <Nav>
        <Nav.Link className="menu-items-link user-greeting">
          Hello, {user.firstName} {user.lastName}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default UserNavbar;
