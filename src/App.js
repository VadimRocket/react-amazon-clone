import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';
import { actionTypes } from './components/reducer';

function App() {
  const [{}, dispatch] = useStateValue(); 


    React.useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log("user is ", authUser)

        if(authUser) {
          // if user logged in
          dispatch({
            type: actionTypes.SET_USER,
            user: authUser
          })
        }else {
          // the user is logged out
          dispatch({
            type:'SET_USER',
            user: null
          })
        }
      })
    },[])

  return (
    <Router>
      <div className="app">
      {/* home, login, checkout */}
      <Switch>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
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
