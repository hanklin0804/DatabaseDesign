// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "../src/components/UserProvider/UserProvider";

import Home from "./components/Home/Home";
import HomeUser from "./components/HomeUser/HomeUser";
import HomeRestaurant from "./components/HomeRestaurant/HomeRestaurant";
import EditRestaurant from "./components/EditRestaurant/EditRestaurant";
import ManageMenuItems from "./components/ManageMenuItems/ManageMenuItems";
import RestaurantOrders from "./components/RestaurantOrders/RestaurantOrders"; 
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RoleSelection from "./components/RoleSelection/RoleSelection";
import UserCart from "./components/UserCart/UserCart";
import UserCheckout from "./components/UserCheckout/UserCheckout";
// import UserMenuDetail from "./components/UserMenuDetail/UserMenuDetail";
import UserOrderConfirmation from "./components/UserOrderConfirmation/UserOrderConfirmation";
import UserOrderHistory from "./components/UserOrderHistory/UserOrderHistory";
import UserOrderStatus from "./components/UserOrderStatus/UserOrderStatus";
import UserRatingsAndReviews from "./components/UserRatingsAndReviews/UserRatingsAndReviews";
import UserRestaurantDetail from "./components/UserRestaurantDetail/UserRestaurantDetail";
import UserRestaurantShowReviews from "./components/UserRestaurantShowReviews/UserRestaurantShowReviews";


function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home-user" element={<HomeUser />} />
          <Route path="/home-restaurant" element={<HomeRestaurant />} />
          <Route path="/edit-restaurant" element={<EditRestaurant />} />
          <Route path="/manage-menu-items" element={<ManageMenuItems />} />
          <Route path="/restaurant-orders" element={<RestaurantOrders />} />
          <Route path="/role-selector" element={<RoleSelection />} />
          <Route path="/user-cart" element={<UserCart />} />
          <Route path="/user-checkout" element={<UserCheckout />} />
          {/* <Route path="/user-menu-detail" element={<UserMenuDetail />} /> */}
          <Route path="/user-order-confirmation" element={<UserOrderConfirmation />} />
          <Route path="/user-order-history" element={<UserOrderHistory />} />
          <Route path="/user-order-status" element={<UserOrderStatus />} />
          <Route path="/user-ratings-and-reviews" element={<UserRatingsAndReviews />} />
          <Route path="/user-restaurant-detail" element={<UserRestaurantDetail />}/>
          <Route path="/user-restaurant-show-reviews" element={<UserRestaurantShowReviews />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
