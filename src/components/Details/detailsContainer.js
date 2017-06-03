import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DetailsItem from './detailsItem';


import * as listArticleActions from '../../store/action/listArticleActions';


class DetailsContainer extends Component {

  constructor(props){
    super(props)
  }
  componentWillMount() {
    this.props.listArticleActions.articleSelected(this.props.location.state.id);
  }

  render () {
    console.log(this.props);
    let published = "NO";
    let ispublished = this.props.location.state.published;
    if(ispublished){
      published = "SI"
    }
    return (
      <section className="container">
        <DetailsItem
          author={this.props.location.state.author}
          title={this.props.location.state.title}
          content={this.props.location.state.content}
          published={published}
        />
      </section>
    )
  }
}

DetailsContainer.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  published: PropTypes.bool
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
