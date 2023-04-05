import React from "react"
import './App.css';
import "./styles/Header.css"
// import Home from "./components/Home"
// import Navbar from "./components/Navbar"
import Header from "./components/Header"
import "./styles/Header.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Aryan from "./components/Aryan"
// import { Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
            <Route path="/checkout">
              <h1>Checkout</h1>
            </Route>
            <Route path="/login">
              <h1>Login Page</h1>
            </Route>
            
            <Route path="/">
            <Header />
              <h1>Home page!!</h1>
              {/* <Header /> */}
            </Route>
            
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
