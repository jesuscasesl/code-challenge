import React, { Component } from 'react';

import './buttonsArticle.css';

class ButtonsArticle extends Component{
  constructor(props) {
    super(props);
  };

  render(){
    return(
      <div className="buttonsArticle">
        <div className="icon" onClick={this.props.onUpdateArticle}><span className="fa fa-pencil-square-o fa-lg"></span></div>
        <div className="icon" onClick={this.props.onDeleteArticle}><span className="fa fa-times fa-lg"></span></div>
      </div>
    );
  }
}

export default ButtonsArticle;
