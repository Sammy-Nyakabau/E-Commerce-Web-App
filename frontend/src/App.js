/* eslint-disable */
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
