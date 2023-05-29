// src/components/HomeUser/HomeUser.js
import React, { useState, useEffect, useMemo } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomeUser.css';
import UserNavbar from '../UserNavbar/UserNavbar';

function HomeUser() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const dummyRestaurants  = useMemo(() => [
        {name: "Restaurant 1", description: "Description 1 Description 1 Description 1", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4z9Se1_X-OxbwNUk9CoUvLg2dT17kBEEmQ&usqp=CAU", rating: 4.5},
        {name: "Restaurant 2", description: "Description 2", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSlZokNhE1Td2wmEIxGfDcdkenDYEbTtgCA&usqp=CAU", rating: 4.2},
        {name: "Restaurant 3", description: "Description 3", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1ESSab1KchcGBZ0WpxH74e_BiobvxWCxag&usqp=CAU", rating: 4.9},
        {name: "Restaurant 4", description: "Description 4", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qWdzYrJaCsaj8CLOJL4BT-k031pwb0AE3A&usqp=CAU", rating: 3.5},
        {name: "Restaurant 5", description: "Description 5", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5WV2gZpckxaOEIyK5hHon2_eJo76ltBPow&usqp=CAU", rating: 4.8},
        {name: "Restaurant 6", description: "Description 6", imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/09/dd/6f/e7/logo.jpg", rating: 4.0},
    ], []);

    const chunkArray = (arr, size) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            const chunk = arr.slice(i, i + size);
            chunkedArray.push(chunk);
        }
        return chunkedArray;
    };
    // 在 HomeUser 组件内部
    const [filteredRestaurants, setFilteredRestaurants] = useState(dummyRestaurants);

    useEffect(() => {
        const filtered = dummyRestaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }, [searchTerm, dummyRestaurants]);

    return (
        <div>
            <UserNavbar />
            <div className='home-user-page'>
            <Container className="home-user-container">
                <h2 className="text-center">Restaurants</h2>
                <div className="search-bar-container">
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by restaurant name" className="search-bar" />
                </div>
                {chunkArray(filteredRestaurants, 3).map((row, rowIndex) => (
                    <Row className="cards" key={rowIndex}>
                        {row.map((restaurant, index) => (
                            <Col sm={12} md={4} key={index}>
                                <Card className="restaurant-card" onClick={() => navigate('/user-restaurant-detail')}>
                                    <Card.Img variant="top" src={restaurant.imageUrl} />
                                    <Card.Body>
                                        <Card.Title>{restaurant.name}</Card.Title>
                                        <Card.Text>{restaurant.description}</Card.Text>
                                        <Card.Text>Rating: {restaurant.rating}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Container>
        </div>
        </div>
    );
}

export default HomeUser;
