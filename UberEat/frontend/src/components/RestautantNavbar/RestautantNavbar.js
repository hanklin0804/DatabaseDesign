import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './RestautantNavbar.css'; // 假設你已經將 Navbar 相關的 CSS 代碼移到了一個新的 CSS 文件中

function RestautantNavbar() {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={() => navigate('/home-restaurant')}>
                Home
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => navigate('/edit-restaurant')} className="menu-items-link">
                    Edit_Restaurant
                </Nav.Link>
                <Nav.Link onClick={() => navigate('/manage-menu-items')} className="menu-items-link">
                    Menu_Items
                </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link onClick={() => navigate('/')} className="menu-items-link">
                    Logout
                </Nav.Link>
            </Nav>
        </Navbar>

    );
}

export default RestautantNavbar;
