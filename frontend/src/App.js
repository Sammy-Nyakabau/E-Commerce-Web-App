/* eslint-disable */
import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Footer_dark from "./Footer_dark";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./components/Shop";
import Checkout from "./Checkout";
import Shop_helicopters from "./components/Shop_helicopters";
import Shop_aircrafts from "./components/Shop_aircrafts";
import Shop_jetLiners from "./components/Shop_jetliners";
import Shop_unmannedAerialSystems from "./components/Shop_unmannedAerialSystems"
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
