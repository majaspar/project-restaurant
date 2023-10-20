import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import CartScreen from './screens/CartScreen';
import MenuScreen from './screens/MenuScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Homescreen from './screens/Homescreen';
import OrdersScreen from './screens/OrdersScreen';
import AdminScreen from './screens/AdminScreen';
import GalleryScreen from './screens/GalleryScreen';
import ContactScreen from './screens/ContactScreen';
import ThanksScreen from './screens/ThanksScreen';
import AboutScreen from './screens/AboutScreen';
import UserScreen from './screens/UserScreen';

// Admin
import AddDish from "./screens/AddDish";
import EditDish from "./screens/EditDish";
import OrdersList from "./screens/OrdersList";
import DishesList from "./screens/DishesList";
import UsersList from "./screens/UsersList";

function App() {

  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState;

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/basket" element={<CartScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/gallery" element={<GalleryScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/orders" element={(!currentUser) ? (<LoginScreen />) : <OrdersScreen />} />
          <Route path="/dashboard" element={(!currentUser) ? (<LoginScreen />) : <UserScreen />} />
          <Route path="/thanks" element={<ThanksScreen />} />

          <Route path="/admin" element={((!currentUser) || (!currentUser.isAdmin)) ? (<LoginScreen />) : <AdminScreen />} />
          <Route path="/admin/userslist" element={((!currentUser) || (!currentUser.isAdmin)) ? (<LoginScreen />) : <UsersList />} />
          <Route path="/admin/orderslist" element={((!currentUser) || (!currentUser.isAdmin)) ? (<LoginScreen />) : <OrdersList />} />
          <Route path="/admin/disheslist/" element={((!currentUser) || (!currentUser.isAdmin)) ? (<LoginScreen />) : <DishesList />} />
          <Route path="/admin/adddish" element={((!currentUser) || (!currentUser.isAdmin)) ? (<LoginScreen />) : <AddDish />} />
          <Route path="/admin/editdish/:dishid" element={((!currentUser) || (!currentUser.isAdmin)) ? (<LoginScreen />) : <EditDish />} />
        </Routes>
      </HashRouter>



      <Footer />
    </div>
  );
}

export default App;
