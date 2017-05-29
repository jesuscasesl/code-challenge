import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticlesList from './articlesList';
import * as listArticleActions from '../../redux/Actions/listArticleActions';

class ArticlesContainer extends Component {
  constructor (props) {
    super(props);
    this.handleOnArticleItem = this.handleOnArticleItem.bind(this);
    this.handleOnUpdateArticle = this.handleOnUpdateArticle.bind(this);
    this.handleOnDeleteArticle = this.handleOnDeleteArticle.bind(this);
  }

  componentWillMount() {
    this.props.listArticleActions.loadListArticlesInit();
  }

  handleOnArticleItem(event, value){
    // Metodo para redirecionar y buscar en los articulos por id
    let articleSelect = this.props.articles.find(item => item.id === value);
    console.log(articleSelect);
    this.props.listArticleActions.articleSelected(articleSelect);
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
          onArticleItem={this.handleOnArticleItem.bind(this, "HOA")}
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
    listArticleActions: bindActionCreators(listArticleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
