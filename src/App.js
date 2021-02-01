import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Vegies from "./Vegies";
import Fruits from "./Fruits"
import Frozen from "./Frozen";
import Bakery from "./Bakery";
import Household from "./Household";
import Footer from "./Footer";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>


          <Route path="/login">
            <Login />
          </Route>

          <Route path="/loginGoogle">
            <h1> Login with Google</h1>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>


          <Route path="/payment">
            <Header />
            <Payment />
          </Route>


          <Route path="/vegies">
            <Header />
            <Vegies />
          </Route>


          <Route path="/fruits">
            <Header />
            <Fruits />
          </Route>

          <Route path="/frozen">
            <Header />
            <Frozen />
          </Route>

          <Route path="/bakery">
            <Header />
            <Bakery />
          </Route>

          <Route path="/household">
            <Header />
            <Household />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;