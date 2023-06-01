// src/components/ManageMenu/ManageMenu.js
import React, { useState } from "react";
import { Container, Button, Card, Form, Row, Col } from "react-bootstrap";
import "./ManageMenuItems.css";
import RestautantNavbar from "../RestautantNavbar/RestautantNavbar";

function ManageMenuItems() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, newItem]);
    setNewItem({ name: "", description: "", price: "" });
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  const editItem = (index) => {
    setEditingIndex(index);
  };

  const saveItem = (index) => {
    setEditingIndex(null);
  };

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
                              type="text"
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
                          <Card.Text>{item.price}</Card.Text>
                          <Button
                            variant="primary"
                            onClick={() => editItem(index)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => deleteItem(index)}
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

            <Form onSubmit={addItem} className="new-item-form">
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
                  type="text"
                  value={newItem.price}
                  onChange={(e) =>
                    setNewItem({ ...newItem, price: e.target.value })
                  }
                />
              </Form.Group>

              <Button variant="primary" type="submit">
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
