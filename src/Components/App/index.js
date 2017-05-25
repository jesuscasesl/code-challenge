import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'normalize-css';
import './app.css';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Details from '../Details';

class App extends Component {
  // Renders
  render() {
    return (
      <div className="app">
          <div className="app">
            <Header />
            <Router>
              <div>
                <Route exact path="/" component={Main}/>
                <Route exact path="/:id" component={Details}/>
              </div>
            </Router>
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
