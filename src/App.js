import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
      {/* home, login, checkout */}
      <Switch>
        <Route path="/">
          <h2>Home page</h2>
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
