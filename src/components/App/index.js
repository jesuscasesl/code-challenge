import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize-css';
import './app.css';

import Header from '../Header';
import ArticlesContainer from '../Articles/articlesContainer';
import DetailsContainer from '../Details/detailsContainer';
import Footer from '../Footer';
import Nofound from '../Nofound';
import Form from '../Form/form';


class App extends Component {
  // Renders
  render() {
    return (
      <div className="app">
        <Header />
        <Router>
            <Switch>
              <Route exact path="/" component={ArticlesContainer}/>
              <Route exact path="/article/:id" component={DetailsContainer}/>
              <Route exact path="/form/" component={Form}/>
              <Route path="*" component={Nofound}/>
            </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
