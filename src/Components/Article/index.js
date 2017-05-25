import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ButtonsArticle from '../ButtonsArticle';
import './article.css';

class Article extends Component{
  constructor(props){
    super(props)
    this.handleUpdateArticle = this.handleUpdateArticle.bind(this);
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
  }
  // Se deja preparado para el ejecicio 3
  handleUpdateArticle(event){
    event.preventDefault();
    console.log("Update Article");
  }
  // Se deja preparado para el ejecicio 3
  handleDeleteArticle(event){
    event.preventDefault();
    console.log("Delete Article");
  }

  render(){
    let pathId = `/${this.props.id}`;
    let author = `${this.props.author}`;
    let title= `${this.props.title}`;

    return(
      <div className="article">
        <Link  className="article-link-details"
          to={{
            pathname: pathId,
            state: {
               author: `${this.props.author}`,
               title: `${this.props.title}`
            }
          }}>
          <div className="info">
            <h2 className="author">{this.props.author}</h2>
            <h3 className="title">{this.props.title}</h3>
            <p className="excerpt">{this.props.excerpt}</p>
          </div>
          <div className="buttons">
            <ButtonsArticle
              onUpdateArticle={this.handleUpdateArticle}
              onDeleteArticle={this.handleDeleteArticle}
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default Article;
