// src/services/api.js
import axios from "axios";

// Set up the base URL for the axios requests
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // replace this with your Django server URL
});

// function to register a new user
export async function register(data) {
  const response = await instance.post("/users/", data);
  return response.data;
}

// function to login a user
export async function login(email, password) {
  const response = await instance.post("/users/login", { email, password });
  return response.data;
}

// function to edit restaurant
export async function editRestaurant(id, data) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const response = await instance.put(`/restaurants/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

// function to get restaurant by ID
export async function getRestaurant(id) {
  const response = await instance.get(`/restaurants/${id}/`);
  return response.data;
}

// function to get all menu items for a restaurant
export async function getMenu(restaurantId) {
  const response = await instance.get(
    `/restaurants/${restaurantId}/menu-items`
  );
  return response.data;
}

// function to create a new menu item for a restaurant
export async function createMenuItem(restaurantId, data) {
  const response = await instance.post(
    `/restaurants/${restaurantId}/menu-items`,
    data
  );
  return response.data;
}

// function to edit a menu item for a restaurant
export async function editMenuItem(restaurantId, itemId, data) {
  const response = await instance.put(
    `/restaurants/${restaurantId}/menu-items/${itemId}`,
    data
  );
  return response.data;
}

// function to delete a menu item for a restaurant
export async function deleteMenuItem(restaurantId, itemId) {
  await instance.delete(`/restaurants/${restaurantId}/menu-items/${itemId}`);
}
