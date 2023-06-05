import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import "./RestaurantOrders.css";
import RestautantNavbar from "../RestautantNavbar/RestautantNavbar";

function RestaurantOrders() {
  const [orders, setOrders] = useState([
    {
      orderNumber: "12345678",
      orderTime: "10:30 AM",
      estimatedDelivery: "Not yet available",
      totalAmount: "$45.0",
      customer: "John Doe",
      contact: "123-456-7890",
      status: "Order received",
      address: "123 Main St, City, ST, ZIP",
      items: [
        { name: "Burger", quantity: 2 },
        { name: "Fries", quantity: 1 },
      ],
    },
    // Add more orders here...
  ]);

  const handleStatusChange = (status, index) => {
    let newArray = [...orders];
    newArray[index].status = status;
    let d = new Date();
    d.setHours(d.getHours() + 1);
    newArray[index].estimatedDelivery = d.toLocaleTimeString();
    setOrders(newArray);
  };

  const handleDelivery = (index) => {
    let newArray = [...orders];
    newArray[index].status = "Out for delivery";
    setOrders(newArray);
  };

  return (
    <div>
      <RestautantNavbar />
      <div className="RestaurantOrders-background">
        <Container className="orders-container">
          <h2 className="orders-title">Orders</h2>
          <div className="table-container">
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
                        <p key={i}>
                          {item.quantity} x {item.name}
                        </p>
                      ))}
                    </td>
                    <td>
                      {order.status === "Order received" && (
                        <Button onClick={() => handleStatusChange("Preparing", index)}>
                          Accept Order
                        </Button>
                      )}
                      {order.status === "Preparing" && (
                        <Button onClick={() => handleDelivery(index)}>
                          Out for delivery
                        </Button>
                      )}
                      {order.status ==="Out for delivery" && <span>Out for delivery</span>}
                      {order.status === "Delivered" && <span>Order Delivered</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default RestaurantOrders;

