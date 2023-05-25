// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import HomeUser from './components/HomeUser/HomeUser';
import HomeRestaurant from './components/HomeRestaurant/HomeRestaurant';
import EditRestaurant from './components/EditRestaurant/EditRestaurant';
import ManageMenuItems from './components/ManageMenuItems/ManageMenuItems';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RoleSelection from './components/RoleSelection/RoleSelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home-user" element={<HomeUser />} />
        <Route path="/home-restaurant" element={<HomeRestaurant />} />
        <Route path="/edit-restaurant" element={<EditRestaurant />} />
        <Route path="/manage-menu-items" element={<ManageMenuItems />} />
        <Route path="/role-selector" element={<RoleSelection />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
