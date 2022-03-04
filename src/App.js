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
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>   
    //     <Route path="/about" element={<AboutUs />}/>
    //     <Route path="/contactus" element={<ContactUs/>}/>
    //     <Route path="/categorypagelist" element={<CategoryPageList/>}/>
    //     <Route path="/categorypagegrid" element={<CategoryPageGrid/>}/>
    //     <Route path="/productdetail" element={<ProductDetail/>}/>
    //   </Routes>
    // </Router>
    <Subscribe/>
  );
}

export default App;
