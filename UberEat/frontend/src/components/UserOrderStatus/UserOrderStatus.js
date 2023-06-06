// src/components/UserOrderStatus/UserOrderStatus.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UserNavbar from "../UserNavbar/UserNavbar";

import "./UserOrderStatus.css";

import * as orderAPI from "../../API/order";

import { useUser } from "../UserProvider/UserProvider";

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

function UserOrderStatus() {
  const user = useUser();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async (user) => {
    const res = await orderAPI.getOrder();
    const userOrder = res.data.filter(
      (order) => order.user.uuid === user.uuid && order.finished === false
    );
    setOrders(userOrder);
  };

  useEffect(() => {
    fetchOrders(user);
  }, [user]);

  const handleOrderCompletion = async (index) => {
    let newArray = [...orders];
    newArray[index].status = "Delivered";
    newArray[index].finished = true;
    const data = newArray[index];
    data.restaurant_uuid = newArray[index].restaurant.uuid;
    data.user_uuid = user.uuid;
    await orderAPI.putOrder(newArray[index].uuid, data);
    navigate("/user-ratings-and-reviews");
  };

  return (
    <div>
      <UserNavbar />
      <div className="status-page">
        <Container className="status-container">
          <h2 className="status-title">Order Status</h2>
          {orders.map((order, index) => (
            <Card className="status-card" key={index}>
              <Card.Body className="status-card-body">
                <Row className="status-row">
                  <Col xs={6}>
                    <h4 className="order-number">Order UUID: {order.uuid}</h4>
                  </Col>
                  <Col xs={6}>
                    <h4>Payment Method: {order.payment_method}</h4>
                  </Col>
                  <Col xs={6}>
                    <h4>Restaurant: {order.restaurant.name}</h4>
                  </Col>
                  <Col xs={6}>
                    <h4>Order Time: {getCurrentTime(order.order_time)}</h4>
                  </Col>
                  <Col xs={6}>
                    <h4>
                      Delivery Time: {getDeliveryTime(order.delivery_time)}
                    </h4>
                  </Col>
                  <Col xs={6}>
                    <h4>Order Price: ${order.total_price}</h4>
                  </Col>
                  <Col xs={6}>
                    <h4>Order Finished: {order.finished ? "Yes" : "No"}</h4>
                  </Col>
                  <Col xs={4}>
                    <h4
                      className={`status-text status-text-${order.status
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    >
                      Status: {order.status}
                    </h4>
                  </Col>
                  <Col xs={2} className="UserOrderStatus-buttonContainer">
                    {order.status === "Out for delivery" && (
                      <Button
                        className="UserOrderStatus-button"
                        onClick={() => handleOrderCompletion(index)}
                      >
                        Complete Order
                      </Button>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default UserOrderStatus;
