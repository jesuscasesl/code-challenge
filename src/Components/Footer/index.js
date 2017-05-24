import React, { Component } from 'react';

import './footer.css';

class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <a className="link" href="https://github.com/jesuscasesl/code-challenge">
          <span className="link-information">Jesús Castillo - 2017</span>
        </a>
      </footer>
    )
  }
}

export default Footer;
