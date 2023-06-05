// src/components/UserOrderHistory/UserOrderHistory.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./UserOrderHistory.css";
import UserNavbar from "../UserNavbar/UserNavbar";

import * as orderAPI from "../../API/order";
import { useUser } from "../UserProvider/UserProvider";

function UserOrderHistory() {
  const user = useUser();
  const [historyOrder, setHistoryOrder] = useState([]);

  const fetchData = async (user) => {
    const orders = await orderAPI.getOrder();
    const historyOrders = orders.data.filter(
      (order) => order.user.uuid === user.uuid && order.finished
    );
    setHistoryOrder(historyOrders);
  };

  useEffect(() => {
    fetchData(user);
  }, [user]);

  return (
    <div>
      <UserNavbar />
      <div className="history-page">
        <Container className="history-container">
          <h2 className="history-title">Order History</h2>
          {historyOrder.map((order, index) => (
            <Card className="history-card" key={index}>
              <Card.Body className="history-card-body">
                <Row className="history-row">
                  <Col xs={6}>
                    <h4 className="restaurant-name">
                      Restaurant: {order.restaurant.name}
                    </h4>
                    <h6 className="order-number">Order UUID: {order.uuid}</h6>
                  </Col>
                  <Col xs={6}>
                    <h6 className="payment-method">
                      Payment Method: {order.payment_method}
                    </h6>
                    <h6 className="payment-method">
                      Order Time: {order.order_time}
                    </h6>
                    <h6 className="total-price">
                      Total Price: {order.total_price}
                    </h6>
                    <h6 className="total-price">
                      Order Status: {order.status}
                    </h6>
                    <h6 className="total-price">
                      Finished: {order.finished ? "Yes" : "No"}
                    </h6>
                  </Col>
                </Row>
                {/* <Table striped bordered hover className="history-table">
                  <thead>
                    <tr>
                      <th>Dish</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.dishes.map((dish, dishIndex) => (
                      <tr key={dishIndex}>
                        <td>{dish.name}</td>
                        <td>{dish.quantity}</td>
                        <td>{dish.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table> */}
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default UserOrderHistory;
