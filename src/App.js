import React,  { useEffect } from "react";
import { Login } from "@mui/icons-material";
// import { useEffect } from "react";


import "./App.css";
import "./styles/Header.css";

// import "./styles/Header.css";
import "./styles/Home.css";
//React Router .
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login.js";
{//AA}
// import "./styles/Checkout.css"
//Context 
import { useStateValue } from "./StateProvider";


function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...

        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // User is signed out
        // ...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Any cleanup operations
    return () => {
      unsubscribe(); // Detach a listener
    };
  }, []);


  return (
    <>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            
            <h1>Checkout</h1>
            {/* <Checkout /> */}
            
          </Route>
          <Route path="/login">
            {/* <Header /> */}
            <Login />
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
