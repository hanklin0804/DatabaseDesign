import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RestautantNavbar.css";

import { useCookies } from "react-cookie";

function RestautantNavbar() {
  const navigate = useNavigate();

  const [cookies, removeCookie] = useCookies([]);

  const Logout = () => {
    Object.keys(cookies).forEach((cookieName) => {
      removeCookie(cookieName, { path: "/" });
    });
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={() => navigate("/home-restaurant")}>
        Home
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          onClick={() => navigate("/edit-restaurant")}
          className="menu-items-link"
        >
          Edit_Restaurant
        </Nav.Link>
        <Nav.Link
          onClick={() => navigate("/manage-menu-items")}
          className="menu-items-link"
        >
          Menu_Items
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link onClick={() => Logout()} className="menu-items-link">
          Logout
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default RestautantNavbar;
