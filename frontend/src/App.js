/* REACT BOOTSTRAP */
import { Container } from "react-bootstrap";

/* COMPONENTS */
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import React  from 'react';
// import Bannercarousel from "./components/Bannercarousel";
import Navigationbar from "./components/Navigationbar";
// import ImageGrid from "./components/ImageGrid";
// import TrendingProducts from "./components/TrendingProducts";
/* REACT ROUTER */
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Categories from "./components/Categories";


// import Home from "./components/Home";
function App() {
  return (
    <>
  
    <Router>
      <Header />
      <Navigationbar/>
      {/* <Navbar /> */}
      {/* <Bannercarousel/> */}
     {/* <ImageGrid/> */}
      <Container>
        <main className="py-3">
          <Route exact path="/" component={HomeScreen}  /> 
          <Route path="/categories" component={Categories} />
          <Route path="/login" component={LoginScreen} />

          <Route path="/register" component={RegisterScreen} />

          <Route path="/profile" component={ProfileScreen} />

          <Route path="/shipping" component={ShippingScreen} />

          <Route path="/payment" component={PaymentScreen} />

          <Route path="/placeorder" component={PlaceOrderScreen} />

          <Route path="/order/:id" component={OrderScreen} />

          <Route path="/product/:id" component={ProductScreen} />

          <Route path="/cart/:id?" component={CartScreen} />

          <Route path="/admin/userlist" component={UserListScreen} />

          <Route path="/admin/user/:id/edit" component={UserEditScreen} />

          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />

          <Route path="/admin/productlist" component={ProductListScreen} />

          <Route path="/admin/orderlist" component={OrderListScreen} />
        </main>
      </Container>
      {/* <TrendingProducts/> */}
      <Footer />
    </Router>
    </>
  );
}

export default App;
