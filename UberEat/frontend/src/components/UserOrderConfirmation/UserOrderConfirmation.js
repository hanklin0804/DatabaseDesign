// src/components/UserOrderConfirmation/UserOrderConfirmation.js
import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./UserOrderConfirmation.css";
import UserNavbar from "../UserNavbar/UserNavbar";

// import { useUser } from "../UserProvider/UserProvider";

const MS_MULTIPLY = 1000;

function UserOrderConfirmation() {
  const navigate = useNavigate();

  const [deliveryTime, setDeliveryTime] = useState(0);
  const [orderList, setOrderList] = useState([]);

  const getDeliveryTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} min ${seconds} sec`;
  };

  const getCurrentTime = (timestamp) => {
    const now = new Date(Number(timestamp));
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if (month.toString().length === 1) month = "0" + month;
    if (day.toString().length === 1) day = "0" + day;
    if (hour.toString().length === 1) hour = "0" + hour;
    if (minute.toString().length === 1) minute = "0" + minute;
    if (second.toString().length === 1) second = "0" + second;
    return (
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
    );
  };

  const goToHome = () => {
    localStorage.clear()
    navigate("/home-user");
  }

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) setOrderList(storedCartItems);
    setDeliveryTime(localStorage.getItem("deliveryTime"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveryTime((prevDeliveryTime) => prevDeliveryTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <UserNavbar />
      <div className="confirmation-page">
        <Container className="confirmation-container">
          <h2 className="confirmation-title">Order Confirmation</h2>
          <div className="order-details">
            <p>
              <strong>Payment Method:</strong>{" "}
              {localStorage.getItem("paymentMethod")}
            </p>
            <p>
              <strong>Order Number:</strong>{" "}
              {localStorage.getItem("orderNumber")}
            </p>
            <p>
              <strong>Order Time:</strong>{" "}
              {getCurrentTime(localStorage.getItem("orderTime"))}
            </p>
            <p>
              <strong>Delivered Address:</strong>{" "}
              {localStorage.getItem("deliveryAddress")}
            </p>
            <p>
              <strong>Estimated Delivery Time:</strong>{" "}
              {getDeliveryTime(deliveryTime)}
            </p>
            <p>
              <strong>Estimated Arrived Time :</strong>{" "}
              {getCurrentTime(
                Number(localStorage.getItem("orderTime")) +
                  Number(localStorage.getItem("deliveryTime")) * MS_MULTIPLY
              )}
            </p>
          </div>
          <Table striped bordered hover className="confirmation-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>

            <tbody>
              {orderList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row className="checkout-row">
            <hr />
            <Col xs={6}>
              <h4 className="total-price">
                Total: ${localStorage.getItem("cartTotal")}
              </h4>
            </Col>
            <Col xs={6} className="Go-to-Home-button-container">
              <Button
                variant="primary"
                onClick={() => goToHome()}
                className="Go-to-Home-button"
              >
                Go to Home
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default UserOrderConfirmation;
