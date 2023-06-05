import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RestautantNavbar.css";

import { useCookies } from "react-cookie";
import { useUser } from "../UserProvider/UserProvider";

function RestautantNavbar() {
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
      <Navbar.Brand onClick={() => navigate("/home-restaurant")}>
        Home
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          onClick={() => navigate("/edit-restaurant")}
          className="menu-items-link"
        >
          Edit Restaurant
        </Nav.Link>
        <Nav.Link
          onClick={() => navigate("/manage-menu-items")}
          className="menu-items-link"
        >
          Menu Items
        </Nav.Link>
        <Nav.Link
          onClick={() => navigate("/restaurant-orders")}
          className="menu-items-link"
        >
          Orders
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link onClick={() => Logout()} className="menu-items-link">
          Logout
        </Nav.Link>
      </Nav>
      <div style={{ flexGrow: 1 }}></div>
      <Nav className="ml-auto">
        <Nav.Link className="menu-items-link">
          Hello,{user.firstName} {user.lastName}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default RestautantNavbar;
