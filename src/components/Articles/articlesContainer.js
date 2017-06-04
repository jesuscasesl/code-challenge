import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticlesList from './articlesList';
import * as listArticlesActions from '../../store/action/listArticlesActions';

class ArticlesContainer extends Component {
  constructor (props) {
    super(props);
    this.handleOnUpdateArticle = this.handleOnUpdateArticle.bind(this);
    this.handleOnDeleteArticle = this.handleOnDeleteArticle.bind(this);
  }

  componentWillMount() {
    this.props.listArticlesActions.loadArticleLoad();
  }

  handleOnUpdateArticle(){
    console.log("UPDATE")
  }

  handleOnDeleteArticle(){
      console.log("DELETE")
  }

  render () {
    return (
      <section className="container">
        <ArticlesList
          articles={this.props.articles}
          onUpdateArticle={this.handleOnUpdateArticle}
          onDeleteArticle={this.handleOnDeleteArticle}
        />
      </section>
    )
  }
}

ArticlesContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  loading: PropTypes.bool
};

function mapStateToProps (state) {
  return {
    articles: state.listArticles.articles,
    loading: state.listArticles.loading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    listArticlesActions: bindActionCreators(listArticlesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
