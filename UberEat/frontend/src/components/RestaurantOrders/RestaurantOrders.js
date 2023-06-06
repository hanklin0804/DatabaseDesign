// RestaurantOrders.js
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import "./RestaurantOrders.css";
import RestautantNavbar from "../RestautantNavbar/RestautantNavbar";

import { useUser } from "../UserProvider/UserProvider";

import * as restaurantAPI from "../../API/restaurant";
import * as orderAPI from "../../API/order";

const getCurrentTime = (timestamp) => {
  const now = new Date(Number(timestamp));
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  if (month.toString().length === 1) month = "0" + month;
  if (day.toString().length === 1) day = "0" + day;
  if (hour.toString().length === 1) hour = "0" + hour;
  if (minute.toString().length === 1) minute = "0" + minute;
  if (second.toString().length === 1) second = "0" + second;
  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  );
};

function RestaurantOrders() {
  const user = useUser();
  const [restaurant, setRestaurant] = useState({});
  const [restaurantOrders, setResturantOrders] = useState(null);

  const handleStatusChange = async (status, index) => {
    let newArray = [...restaurantOrders];
    newArray[index].status = status;
    await orderAPI.putOrder(newArray[index].uuid, newArray[index]);
    setResturantOrders(newArray);
  };

  const handleDelivery = async (index) => {
    let newArray = [...restaurantOrders];
    newArray[index].status = "Out for delivery";
    const data = newArray[index];
    data.user_uuid = user.uuid;
    data.restaurant_uuid = restaurant.uuid;
    const res = await orderAPI.putOrder(newArray[index].uuid, data);
    console.log(res);
    setResturantOrders(newArray);
  };

  const fetchOrders = async (user) => {
    const restaurants = await restaurantAPI.getRestauarnt();
    const orders = await orderAPI.getOrder();

    const restaurant = restaurants.data.find(
      (restaurant) => restaurant.user.uuid === user.uuid
    );

    const restaurantOrders = orders.data.filter(
      (order) => order.restaurant.uuid === restaurant.uuid
    );
    setRestaurant(restaurant);
    setResturantOrders(restaurantOrders);
  };

  useEffect(() => {
    fetchOrders(user);
  }, [user]);

  if (!restaurantOrders) return <div>Loading...</div>;
  else
    return (
      <div>
        <RestautantNavbar />

        <div className="RestaurantOrders-background">
          <Container className="orders-container">
            <h2 className="orders-title">Orders</h2>
            <div className="table-container">
              <Table bordered hover className="orders-table">
                <thead>
                  <tr>
                    <th>Order UUID</th>
                    <th>Order Time</th>
                    <th>Estimated Delivery</th>
                    <th>Total Price</th>
                    <th>Customer</th>
                    <th>Contact</th>
                    <th>Delivery Address</th>
                    <th>Items</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {restaurantOrders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.uuid}</td>
                      <td>{getCurrentTime(order.order_time)}</td>
                      <td>
                        {getCurrentTime(order.delivery_time + order.order_time)}
                      </td>
                      <td>{order.total_price}</td>
                      <td>
                        {order.user.first_name} {order.user.last_name}
                      </td>
                      <td>{order.user.email}</td>
                      <td>{order.user.delivery_address}</td>
                      <td>
                        <p>Order Items...</p>
                      </td>
                      <td>
                        {order.status === "Order received" && (
                          <Button
                            onClick={() =>
                              handleStatusChange("Preparing", index)
                            }
                          >
                            Accept Order
                          </Button>
                        )}
                        {order.status === "Preparing" && (
                          <Button onClick={() => handleDelivery(index)}>
                            Out for delivery
                          </Button>
                        )}
                        {order.status === "Out for delivery" && (
                          <span>Out for delivery</span>
                        )}
                        {order.status === "Delivered" && (
                          <span>Order Delivered</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
      </div>
    );
}

export default RestaurantOrders;
