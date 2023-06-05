// src/components/ManageMenu/ManageMenu.js
import React, { useState, useEffect, useCallback } from "react";
import { Container, Button, Card, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./ManageMenuItems.css";
import RestautantNavbar from "../RestautantNavbar/RestautantNavbar";

import { useUser } from "../UserProvider/UserProvider";
import * as restaurantAPI from "../../API/restaurant";
import * as menuAPI from "../../API/menu";

function ManageMenuItems() {
  const user = useUser();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    restaurant_uuid: "",
    name: "",
    description: "",
    price: 0,
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const fetchData = useCallback(async (user, navigate) => {
    const restaurants = await restaurantAPI.getRestauarnt();
    const menus = await menuAPI.getMenu();

    if (!restaurants.data || !menus.data) {
      return;
    }

    const restaurant = restaurants.data.find(
      (restaurant) => restaurant.user && restaurant.user.uuid === user.uuid
    );

    if (!restaurant) {
      alert("You have no restaurant now!");
      navigate("/edit-restaurant");
      return;
    }

    const filteredItems = menus.data.filter(
      (menu) => menu.restaurant && menu.restaurant.uuid === restaurant.uuid
    );

    setItems(filteredItems);

    return restaurant.uuid;
  }, []);

  const addItem = useCallback(
    async (event) => {
      event.preventDefault();
      const restaurantUUID = await fetchData(user, navigate);
      const updatedItem = { ...newItem, restaurant_uuid: restaurantUUID };
      setItems((prevItems) => [...prevItems, updatedItem]);
      await menuAPI.postMenu(updatedItem);

      // Initialization
      setNewItem({
        restaurant_uuid: restaurantUUID,
        name: "",
        description: "",
        price: 0,
      });
    },
    [fetchData, user, newItem, navigate]
  );

  const deleteItem = useCallback(async (index, uuid) => {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index));
    await menuAPI.deleteMenu(uuid);
  }, []);

  const editItem = useCallback((index) => {
    setEditingIndex(index);
  }, []);

  const saveItem = async (index) => {
    const newItems = [...items];
    if (newItems[index].restaurant) {
      newItems[index].restaurant_uuid = newItems[index].restaurant.uuid;
      delete newItems[index].restaurant;
    }
    await menuAPI.putMenu(newItems[index].uuid, newItems[index]);
    setEditingIndex(null);
  };

  useEffect(() => {
    fetchData(user, navigate);
  }, [fetchData, user, navigate]);

  return (
    <div>
      <RestautantNavbar />

      <Container className="manage-menu-items-container manage-menu-items-background">
        <div className="manage-menu-items-content">
          <div className="manage-menu-items-content">
            <h1>Manage Menu Items</h1>
            <Row className="menu-items-row">
              {items.map((item, index) => (
                <Col xs={12} sm={6} md={4} className="menu-item-col">
                  <Card className="menu-item-card">
                    <Card.Body>
                      {editingIndex === index ? (
                        <Form className="edit-form">
                          <Form.Group controlId={`formItemName${index}`}>
                            <Form.Control
                              type="text"
                              value={item.name}
                              onChange={(e) => {
                                const newItems = [...items];
                                newItems[index].name = e.target.value;
                                setItems(newItems);
                              }}
                            />
                          </Form.Group>
                          <Form.Group controlId={`formItemDescription${index}`}>
                            <Form.Control
                              type="text"
                              value={item.description}
                              onChange={(e) => {
                                const newItems = [...items];
                                newItems[index].description = e.target.value;
                                setItems(newItems);
                              }}
                            />
                          </Form.Group>
                          <Form.Group controlId={`formItemPrice${index}`}>
                            <Form.Control
                              type="number"
                              min={1}
                              max={99999}
                              value={item.price}
                              onChange={(e) => {
                                const newItems = [...items];
                                newItems[index].price = e.target.value;
                                setItems(newItems);
                              }}
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            onClick={() => saveItem(index)}
                          >
                            Save
                          </Button>
                        </Form>
                      ) : (
                        <>
                          <Card.Title className="menu-item-name">
                            {item.name}
                          </Card.Title>
                          <Card.Text>{item.description}</Card.Text>
                          <Card.Text>{`Price: ${item.price}`}</Card.Text>
                          <Button
                            variant="primary"
                            onClick={() => editItem(index)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => deleteItem(index, item.uuid)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <Form className="new-item-form">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <br />
                <Form.Control
                  type="text"
                  value={newItem.name}
                  onChange={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <br />
                <Form.Control
                  type="text"
                  value={newItem.description}
                  onChange={(e) =>
                    setNewItem({ ...newItem, description: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <br />
                <Form.Control
                  type="number"
                  min={1}
                  max={99999}
                  value={newItem.price}
                  onChange={(e) =>
                    setNewItem({ ...newItem, price: e.target.value })
                  }
                />
              </Form.Group>

              <Button variant="primary" onClick={(e) => addItem(e)}>
                Add Item
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ManageMenuItems;
