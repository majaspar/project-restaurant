import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

// Admin
import AddDish from "./screens/AddDish";
import EditDish from "./screens/EditDish";
import OrdersList from "./screens/OrdersList";
import DishesList from "./screens/DishesList";
import UsersList from "./screens/UsersList";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/basket" element={<CartScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/gallery" element={<GalleryScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/thanks" element={<ThanksScreen />} />

          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/admin/userslist" element={<UsersList />} />
          <Route path="/admin/orderslist" element={<OrdersList />} />
          <Route path="/admin/disheslist/" element={<DishesList />} />
          <Route path="/admin/adddish" element={<AddDish />} />
          <Route path="/admin/editdish/:dishid" element={<EditDish />} />
        </Routes>
      </BrowserRouter>



      <Footer />
    </div>
  );
}

export default App;
