import React, { useState, useEffect } from "react";
import { Container, Table, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UserCart.css";
import UserNavbar from "../UserNavbar/UserNavbar";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const updateItemQuantity = (item, quantity) => {
    if (quantity < 1) return;

    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
    );
    setCartItems(newCartItems);

    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const parseNumber = (str) => {
    const num = Number(str);
    return isNaN(num) || !isFinite(num) || num < 0 ? "" : num.toFixed(2);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const checkout = () => {
    localStorage.setItem("cartTotal", parseNumber(getTotalPrice()));
    navigate("/user-checkout");
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      const groupedItems = groupCartItems(storedCartItems);
      setCartItems(groupedItems);
    }
  }, []);

  const groupCartItems = (cartItems) => {
    const groupedItemsMap = new Map();

    cartItems.forEach((item) => {
      const key = item.id;
      if (groupedItemsMap.has(key)) {
        const existingItem = groupedItemsMap.get(key);
        existingItem.quantity += item.quantity;
      } else {
        groupedItemsMap.set(key, { ...item });
      }
    });

    return Array.from(groupedItemsMap.values());
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
            <>
              <h3>Restaurant Name: {localStorage.getItem("restaurantName")}</h3>
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
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{parseNumber(item.price)}</td>
                      <td className="user-cart-quantity-input-td">
                        <Form.Control
                          type="number"
                          value={item.quantity.toString()}
                          onChange={(e) =>
                            updateItemQuantity(item, Number(e.target.value))
                          }
                        />
                      </td>
                      <td>{parseNumber(item.price * item.quantity)}</td>
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
            </>
          )}
          {cartItems.length > 0 && (
            <>
              <h4 className="user-cart-checkout-title">
                Total: {parseNumber(getTotalPrice())}
              </h4>
              <Button
                onClick={() => checkout()}
                className="user-cart-checkout-button"
                variant="success"
                size="lg"
                block="true"
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
