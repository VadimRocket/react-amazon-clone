import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./context/StateProvider";
import { actionTypes } from "./context/reducer";
import Payment from "./components/Payment/Payment";
import Orders from "./components/Orders/Orders";
// stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// paste stripe key
const promise = loadStripe(
  "pk_test_51HQ4A1Hbpicdl2H0sW0F7jcggpk7kUpLLLDnHxzBsCz9BCphgZc0lGXVGyyM2oEKZcKRqRev75LyDRVrloSjP9nX008N1Wjaht"
);

function App() {
  const [{}, dispatch] = useStateValue();

  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);

      if (authUser) {
        // if user logged in
        dispatch({
          type: actionTypes.SET_USER,
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
        {/* home, login, checkout */}
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
