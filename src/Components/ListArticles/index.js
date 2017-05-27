import React, { Component } from 'react';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';

import Article from '../Article';
import * as listArticleActions from '../../redux/Actions/listArticleActions';

import './listArticles.css';

class ListArticles extends Component{
  constructor(props, context){
    super(props, context);
  }

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
            content={article.content}
            published={article.published}
            tags={article.tags}
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
