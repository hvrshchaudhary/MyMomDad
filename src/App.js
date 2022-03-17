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
         <Route path="/Subcategories" element={<Subcategories/>}/>
         <Route path="/Cart" element={<Cart/>}/>
         <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
         <Route path="/OrderSummary" element={<OrderSummary/>}/>
         <Route path="/Checkout" element={<Checkout/>}/>
         <Route path="/Subscribe" element={<Subscribe/>}/>
         <Route path="/Blog" element={<Blog/>}/>
         <Route path="/Login" element={<Login/>}/>
         <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
         <Route path="/Profile" element={<Profile/>}/>
         <Route path="/OrderHistory" element={<OrderHistory/>}/>
         <Route path="/ReturnAndComplaints" element={<ReturnAndComplaints/>}/>
         <Route path="/Dashboard" element={<Dashboard/>}/>
         <Route path="/Dashboard2" element={<Dashboard2/>}/>
         <Route path="/Dashboard2" element={<Dashboard2/>}/>
         <Route path="/Dashboard1" element={<Dashboard1/>}/>
         <Route path="/DCategory" element={<DCategory/>}/>
         <Route path="/DProducts" element={<DProducts/>}/>
         <Route path="/DOrders" element={<DOrders/>}/>
         <Route path="/DOurstaff " element={<DOurstaff />}/>
         <Route path="/VendorC " element={<VendorC />}/>
         <Route path="/Vendor " element={<Vendor />}/>
         <Route path="/AddProduct " element={<AddProduct />}/>
         <Route path="/AddCategory " element={<AddCategory />}/>
       </Routes>
     </Router>

  );
}

export default App;
