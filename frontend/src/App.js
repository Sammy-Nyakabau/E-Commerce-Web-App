import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./components/Shop";
import Checkout from "./Checkout";
import Shop_helicopters from "./components/Shop_helicopters";
import Shop_aircrafts from "./components/Shop_aircrafts";
import Shop_jetLiners from "./components/Shop_jetLiners";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/shop">
            <Header />
            <Shop />
            <Footer />
          </Route>
          <Route path="/shop_helicopters">
            <Header />
            <Shop_helicopters />
            <Footer />
          </Route>
          <Route path="/shop_jetliners">
            <Header />
            <Shop_jetLiners />
            <Footer />
          </Route>
          <Route path="/shop_aircrafts">
            <Header />
            <Shop_aircrafts />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
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
