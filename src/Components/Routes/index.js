import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App';
import Hello from '../Hello';

export default (
  <Router>
    <Route path="/" component={Hello}/>
  </Router>
);
