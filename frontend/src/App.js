/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Footer_dark from "./components/Footer_dark";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./components/Shop";
import Search from "./components/Search";
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout";
import Shop_helicopters from "./components/Shop_helicopters";
import Shop_aircrafts from "./components/Shop_aircrafts";
import Shop_jetLiners from "./components/Shop_jetliners";
import Shop_unmannedAerialSystems from "./components/Shop_unmannedAerialSystems";
import User_page from "./components/User_page";
import Order_page from "./components/Order_page";
import Reviewpage from "./components/Reviewpage";
import Reviewdisplaypage from "./components/Reviewdisplaypage";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="App">
        <Switch>
          <Route path="/reviewdisplay">
            <Header />
            <Reviewdisplaypage />
            <Footer_dark />
          </Route>
          <Route path="/reviewpage">
            <Header />
            <Reviewpage />
            <Footer_dark />
          </Route>
          <Route path="/user_page">
            <Header />
            <User_page />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer_dark />
          </Route>
          <Route path="/wishlist">
            <Header />
            <Wishlist />
            <Footer_dark />
          </Route>
          <Route path="/shop">
            <Header />
            <Shop />
            <Footer_dark />
          </Route>
          <Route path="/search">
            <Header />
            <Search />
            <Footer_dark />
          </Route>

          <Route path="/shop_helicopters">
            <Header />
            <Shop_helicopters />
            <Footer_dark />
          </Route>
          <Route path="/shop_unmannedAerialSystems">
            <Header />
            <Shop_unmannedAerialSystems />
            <Footer_dark />
          </Route>
          <Route path="/shop_jetLiners">
            <Header />
            <Shop_jetLiners />
            <Footer_dark />
          </Route>
          <Route path="/shop_aircrafts">
            <Header />
            <Shop_aircrafts />
            <Footer_dark />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Order_page">
            <Header />
            <Order_page />
            <Footer_dark />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
