import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './UserNavbar.css'; // 假設你已經將 Navbar 相關的 CSS 代碼移到了一個新的 CSS 文件中

function UserNavbar() {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={() => navigate('/home-user')}>Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => navigate('/user-cart')} className="menu-items-link">Cart</Nav.Link>
                <Nav.Link onClick={() => navigate('/user-order-status')} className="menu-items-link">Order Status</Nav.Link>
                <Nav.Link onClick={() => navigate('/user-order-history')} className="menu-items-link">Order History</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link onClick={() => navigate('/')} className="menu-items-link">Logout</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default UserNavbar;
