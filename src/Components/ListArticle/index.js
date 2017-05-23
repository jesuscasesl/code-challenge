import React, { Component } from 'react';
import Article from '../Article';

class ListArticle extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        {this.props.articles.map(article => {
          return <Article
            key={article.id}
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
