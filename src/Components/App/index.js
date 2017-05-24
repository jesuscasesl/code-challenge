import React, { Component } from 'react';;
import 'normalize-css';
import './app.css';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

class App extends Component {
  // Renders
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
