import React, { Component } from 'react';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';

import Article from '../Article';
import Request from '../Request';
import { ARTICLES_QUERY } from '../Queries';
import * as listArticleActions from '../Actions/listArticleActions'

import './listArticles.css';

class ListArticles extends Component{
  constructor(props, context){
    super(props, context);
  }



  // lifecycle
  componentWillMount() {
    this.props.listArticleActions.loadListArticlesInit();
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
