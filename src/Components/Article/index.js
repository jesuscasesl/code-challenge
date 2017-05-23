import React, { Component } from 'react';
import './article.css';

class Article extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="root">
        <div className="info">
          <h2 className="author">{this.props.author}</h2>
          <h3 className="title">{this.props.title}</h3>
          <p className="excerpt">{this.props.excerpt}</p>
        </div>
        <div className="buttons">
          <div className="icon"><span className="fa fa-pencil-square-o"></span></div>
          <div className="icon"><span className="fa fa-times"></span></div>
        </div>
      </div>
    );
  }
}

export default Article;
