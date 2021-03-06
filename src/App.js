import CardListView from "./Components/CardListView";
import Subcategories from "./Components/Subcategories";
import AboutUs from "./Pages/AboutUs";
import CategoryPageGrid from "./Pages/CategoryPageGrid";
import CategoryPageList from "./Pages/CategoryPageList";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Cart from "./Components/Cart";
import ShoppingCart from "./Pages/ShoppingCart";
import OrderSummary from "./Components/OrderSummary";
import Checkout from "./Pages/Checkout";
import Subscribe from "./Components/Subscribe";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Profile from "./Pages/Profile";
import OrderHistory from "./Pages/OrderHistory";
import ReturnAndComplaints from "./Pages/ReturnsAndComplaints";
import ShippingAddress from "./Pages/ShippingAddress";
import Dashboard from "./Pages/Dashboard";
import Dashboard2 from "./Pages/Dashboard2";
import Dashboard1 from "./Components/AdminPanel/Dashboard/Dashboard1";
import DCategory from "./Pages/DCategory";
import DProducts from "./Pages/DProducts";
import DOrders from "./Pages/DOrders";
import DOurstaff from "./Pages/DOurstaff";
import VendorC from "./Pages/Vendor";
import Vendor from "./Pages/Vendor";
import AddProduct from "./Pages/AddProduct";
import AddCategory from "./Pages/AddCategory";
import AddStaff from "./Pages/AddStaff";
import AddGiftCard from "./Components/AddGiftCard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>   
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/categorypagelist" element={<CategoryPageList/>}/>
        <Route path="/categorypagegrid" element={<CategoryPageGrid/>}/>
        <Route path="/productdetail" element={<ProductDetail/>}/>
        <Route path="/shipping" element={<ShippingAddress/>}/>
      </Routes>
    </Router>
  );
}

export default App;
