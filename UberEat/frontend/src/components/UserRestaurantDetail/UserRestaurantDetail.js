 /* src/components/UserRestaurantDetail/UserRestaurantDetail.css */
 import React, { useState, } from 'react';
 import { Container, Card, Row, Col, Button } from 'react-bootstrap';
 import './UserRestaurantDetail.css';
 import UserNavbar from '../UserNavbar/UserNavbar';

 function UserRestaurantDetail() {
     const [cartItems, setCartItems] = useState([]);
     const dummyDishes = [
         {name: "Dish 1", description: "Description Description 1", price: 100},
         {name: "Dish 2", description: "Description Description 2", price: 150},
         {name: "Dish 3", description: "Description Description 3", price: 200},
         {name: "Dish 4", description: "Description Description 1", price: 100},
         {name: "Dish 5", description: "Description Description 2", price: 150},
         {name: "Dish 6", description: "Description Description 3", price: 200},
     ];

     const chunkArray = (arr, size) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            const chunk = arr.slice(i, i + size);
            chunkedArray.push(chunk);
        }
        return chunkedArray;
    };

    const addToCart = (dish) => {
        setCartItems([...cartItems, dish]);
    }

     return (
         <div>
             <UserNavbar />
             <Container className="restaurant-detail-container">
                <h2 className="title">Restaurant Name</h2>
                <p className="description">Restaurant Description</p>
                {chunkArray(dummyDishes, 3).map((row, rowIndex) => (
                   <Row className="cards" key={rowIndex}>
                       {row.map((dish, index) => (
                           <Col sm={12} md={4} key={index}>
                               <Card className="dish-card"  >
                                   <Card.Body>
                                       <Card.Title>{dish.name}</Card.Title>
                                       <Card.Text>{dish.description}</Card.Text>
                                       <Card.Text>Price: {dish.price}</Card.Text>
                                       <div className='button-container'>
                                            <Button className='add_cart_btn' variant="primary" onClick={() => addToCart(dish)}>Add to Cart</Button>
                                        </div>
                                   </Card.Body>
                               </Card>
                           </Col>
                       ))}
                   </Row>
                ))}
            </Container>
            </div>
     );
 }
 
 export default UserRestaurantDetail;
 