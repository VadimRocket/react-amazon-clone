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
        <Route path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <h2>login page</h2>
        </Route>
        <Route path="/checkout">
          <h2>checkout page</h2>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
