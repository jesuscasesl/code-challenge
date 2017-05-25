import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Details extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h2>{this.props.location.state.author}</h2>
        <h2>{this.props.location.state.title}</h2>
        <Link to="/">
          <span className="fa fa-reply fa-lg"></span>
        </Link>
      </div>
    )
  }
}

export default Details;
