// src/components/UserCart/UserCart.js
import React, { useState } from "react";
import { Container, Table, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserCart.css";
import UserNavbar from "../UserNavbar/UserNavbar";

function Cart() {
  const navigate = useNavigate();
  //   const [cartItems, setCartItems] = useState([
  //       { name: "Dish 1", description: "Description 1", price: 100, quantity: 1 },
  //       { name: "Dish 2", description: "Description 2", price: 150, quantity: 2 },
  //   ]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );

  const sortedCart = cartItems.reduce((cart, item) => {
    if (cart[item.id]) cart[item.id].quantity += 1; // 增加数量
    else cart[item.id] = { ...item, quantity: 1 }; // 新增项及其数量属性
    return sortedCart;
  }, {});

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  const updateItemQuantity = (item, quantity) => {
    if (quantity < 1) return;

    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem === item) {
        return { ...cartItem, quantity: quantity };
      } else {
        return cartItem;
      }
    });
    setCartItems(newCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <UserNavbar />
      <div className="user-cart-container">
        <Container className="user-cart-content">
          <h2 className="user-cart-title">My Cart</h2>
          {cartItems.length === 0 ? (
            <Alert className="user-cart-alert" variant="info">
              Your cart is empty.
            </Alert>
          ) : (
            <Table striped bordered hover className="user-cart-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td className="user-cart-quantity-input-td">
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateItemQuantity(item, Number(e.target.value))
                        }
                      />
                    </td>
                    <td>{item.price * item.quantity}</td>
                    <td className="user-cart-remove-btn">
                      <Button
                        variant="outline-danger"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {cartItems.length > 0 && (
            <>
              <h4 className="user-cart-checkout-title">
                Total: {getTotalPrice()}
              </h4>
              <Button
                onClick={() => navigate("/user-checkout")}
                className="user-cart-checkout-button"
                variant="success"
                size="lg"
                block
              >
                Checkout
              </Button>
            </>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Cart;
