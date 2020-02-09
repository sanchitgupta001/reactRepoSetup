import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

// components
import LandingPage from './landingPage';

const Root = function() {
  return (
    <Router>
    <Route path="/" component={LandingPage}>
    </Route>
  </Router>
);
}

ReactDOM.render(<LandingPage/>, document.getElementById('reactApp'));