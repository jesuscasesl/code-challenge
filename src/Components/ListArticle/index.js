import React, { Component } from 'react';
import Article from '../Article';

import './listArticle.css';

class ListArticle extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="listArticle">
        {this.props.articles.map(article => {
          return <Article
            key={article.id}
            id={article.id}
            author={article.author}
            title={article.title}
            excerpt={article.excerpt}
          />
        })}
      </div>
    );
  }
}

export default ListArticle;
