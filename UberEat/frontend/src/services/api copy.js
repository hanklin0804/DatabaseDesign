// src/services/api.js
import axios from 'axios';

// Set up the base URL for the axios requests
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // replace this with your Django server URL
});

// function to register a new user
export async function register(data) {
  const response = await instance.post('/users/', data);
  return response.data;
}

// function to login a user
export async function login(email, password) {
  const response = await instance.post('/users/login', { email, password });
  return response.data;
}
