import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import 'normalize-css';
import './app.css';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import DetailsContainer from '../Details/detailsContainer';

import Hello from '../Hello';

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
                <Route exact path="/:id" component={DetailsContainer}/>
              </div>
            </Router>
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
