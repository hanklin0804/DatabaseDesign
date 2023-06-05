import React, { useState } from 'react';
import { Container, Table, DropdownButton, Dropdown } from 'react-bootstrap';
import './RestaurantOrders.css';
import RestautantNavbar from '../RestautantNavbar/RestautantNavbar';

function RestaurantOrders() {
    const [orders, setOrders] = useState([
        { 
            orderNumber: "12345678", 
            orderTime: "10:30 AM",
            estimatedDelivery: "11:15 AM",
            totalAmount: "$45.0",
            customer: "John Doe",
            contact: "123-456-7890",
            status: "Order received",
            address: "123 Main St, City, ST, ZIP",
            items: [{ name: "Burger", quantity: 2 }, { name: "Fries", quantity: 1 }]
        },
        { 
            orderNumber: "12345678", 
            orderTime: "10:30 AM",
            estimatedDelivery: "11:15 AM",
            totalAmount: "$45.0",
            customer: "John Doe",
            contact: "123-456-7890",
            status: "Order received",
            address: "123 Main St, City, ST, ZIP",
            items: [{ name: "Burger", quantity: 2 }, { name: "Fries", quantity: 1 }]
        },
        // Add more orders here...
    ]);

    const handleSelect=(e, index)=>{
        let newArray=[...orders];
        newArray[index].status=e;
        setOrders(newArray);
    }

    return (
        <div>
            <RestautantNavbar />
            <div className='RestaurantOrders-background'>
            <Container className="orders-container">
                <h2 className="orders-title">Orders</h2>
                <Table bordered hover className="orders-table">
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Order Time</th>
                            <th>Estimated Delivery</th>
                            <th>Total Amount</th>
                            <th>Customer</th>
                            <th>Contact</th>
                            <th>Delivery Address</th>
                            <th>Items</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.orderNumber}</td>
                                <td>{order.orderTime}</td>
                                <td>{order.estimatedDelivery}</td>
                                <td>{order.totalAmount}</td>
                                <td>{order.customer}</td>
                                <td>{order.contact}</td>
                                <td>{order.address}</td>
                                <td>
                                    {order.items.map((item, i) => (
                                        <p key={i}>{item.quantity} x {item.name}</p>
                                    ))}
                                </td>
                                <td>
                                    <DropdownButton id="dropdown-basic-button" title={order.status}>
                                        <Dropdown.Item eventKey="Order received" onSelect={(e) => handleSelect(e, index)}>Order received</Dropdown.Item>
                                        <Dropdown.Item eventKey="Preparing" onSelect={(e) => handleSelect(e, index)}>Preparing</Dropdown.Item>
                                        <Dropdown.Item eventKey="Out for delivery" onSelect={(e) => handleSelect(e, index)}>Out for delivery</Dropdown.Item>
                                        <Dropdown.Item eventKey="Delivered" onSelect={(e) => handleSelect(e, index)}>Delivered</Dropdown.Item>
                                    </DropdownButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            </div>
        </div>
    );
}

export default RestaurantOrders;
