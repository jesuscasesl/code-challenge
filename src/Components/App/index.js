import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize-css';
import './app.css';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import DetailsContainer from '../Details/detailsContainer';

class App extends Component {
  // Renders
  render() {
    return (
      <div className="app">
          <div className="app">
            <Header />
            <Router>
              <div>
                <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route exact path="/article:id" component={DetailsContainer}/>
                </Switch>
              </div>
            </Router>
            <Footer />
          </div>
      </div>
    );
  }
}

export default App;
