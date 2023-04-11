import React from "react";
import "./App.css";
import "./styles/Header.css";
import Header from "./components/Header";
import Home from "./components/Home.js";
import "./styles/Header.css";
import "./styles/Home.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
            
          </Route>
          <Route path="/login">
            <Header />
            <h1>Login Page</h1>
            {/* <Home />  */}
          </Route>

          <Route path="/">
            <Header />
            <Home />
           
            {/* <Header /> */}
          </Route>
        </Switch>
      </div>
    </Router>
   
    </>
  );
}

export default App;
