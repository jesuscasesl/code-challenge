import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './listArticles.css'

import Article from '../Article'
import * as listArticleActions from '../../store/action/listArticleActions';


class ListArticles extends Component{
  constructor(props, context){
    super(props, context);
    this.handleUpdateArticle = this.handleUpdateArticle.bind(this);
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
  }

  componentWillMount() {
    this.props.listArticleActions.loadListArticlesInit();
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
    return(
      <div className="listArticles">
        {this.props.articles.map(article => {
          return <Article
            key={article.id}
            id={article.id}
            author={article.author}
            title={article.title}
            excerpt={article.excerpt}
            content={article.content}
            published={article.published}
            tags={article.tags}
            onUpdateArticle={this.handleUpdateArticle}
            onDeleteArticle={this.handleDeleteArticle}
          />
        })}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    articles: state.listArticles.articles,
    loading: state.listArticles.loading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    listArticleActions: bindActionCreators(listArticleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListArticles);
