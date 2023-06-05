// src/components/UserCheckout/UserCheckout.js
import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./UserCheckout.css";
import UserNavbar from "../UserNavbar/UserNavbar";
import { useUser } from "../UserProvider/UserProvider";

import * as orderAPI from "../../API/order";
// import * as orderItemAPI from "../../API/order_item";

const MAX_DELIVERY_TIME = 3600;
const MIN_DELIVERY_TIME = 600;

function UserCheckout() {
  const user = useUser();
  const navigate = useNavigate();

  //   const cartItem = localStorage.getItem("cartItem");
  const totalPrice = localStorage.getItem("cartTotal");
  const restaurantUUID = localStorage.getItem("restaurantUUID");

  const purchase = async (event) => {
    // const cartItemData = JSON.parse(cartItem);
    // cartItemData.forEach(async(cartItem) => {
    //     const data = {
    //         order_uuid :
    //     }
    //     const res = await orderItemAPI.postOrderItem()
    // })

    event.preventDefault();
    localStorage.setItem("paymentMethod", "Credit Card");
    const paymentMethod = localStorage.getItem("paymentMethod");
    const orderNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    const deliveryTime = Math.floor(
      Math.random() * MAX_DELIVERY_TIME + MIN_DELIVERY_TIME
    );

    localStorage.setItem("orderNumber", orderNumber);
    localStorage.setItem("deliveryTime", deliveryTime);
    localStorage.setItem("orderTime", Date.now());
    localStorage.setItem("deliveryAddress", user.deliveryAddress);

    const orderData = {};
    orderData.user_uuid = user.uuid;
    orderData.restaurant_uuid = restaurantUUID;
    orderData.order_time = Date.now();
    orderData.delivery_time = deliveryTime;
    orderData.delivery_address = user.deliveryAddress;
    orderData.total_price = totalPrice;
    orderData.status = "Preparing";
    orderData.payment_method = paymentMethod;
    orderData.finished = false;

    const res = await orderAPI.postOrder(orderData);

    if (res.status === 201) navigate("/user-order-confirmation");
    else alert("Purchase error,please try again!");
  };

  return (
    <div>
      <UserNavbar />

      <div className="checkout-page">
        <Container className="checkout-container">
          <h2 className="checkout-title">Checkout</h2>
          <Form className="checkout-form">
            <Form.Group className="checkout-row">
              <Form.Label className="checkout-label">
                Payment Method:{" "}
              </Form.Label>
              <Form.Control
                as="select"
                className="checkout-input"
                onChange={(e) =>
                  localStorage.setItem("paymentMethod", e.target.value)
                }
              >
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="checkout-row">
              <Form.Label className="checkout-label">
                Delivery Address:{" "}
              </Form.Label>
              <Form.Control
                className="checkout-input"
                defaultValue={user.deliveryAddress}
                onChange={(e) =>
                  localStorage.setItem("deliveryAddress", e.target.value)
                }
                type="text"
              />
            </Form.Group>
            <Row className="checkout-row">
              <Col xs={6}>
                <h4 className="total-price">Total: ${totalPrice}</h4>
              </Col>
              <Col xs={6} className="Confirm-Purchase">
                <Button
                  onClick={(e) => purchase(e)}
                  variant="success"
                  block="true"
                  className="confirm-button"
                >
                  Confirm Purchase
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default UserCheckout;
