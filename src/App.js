import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="app">
      {/* home, login, checkout */}
      <Switch>
        <Route path="/login">
           <Header />
          <h2>login page</h2>
        </Route>
        <Route path="/checkout">
          <Header />
          <h2>checkout page</h2>
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
