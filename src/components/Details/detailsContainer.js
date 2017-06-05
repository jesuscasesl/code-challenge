import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DetailsItem from './detailsItem';


import * as itemArticleActions from '../../store/action/itemArticleActions';


class DetailsContainer extends Component {

  constructor(props){
    super(props)
  }
  
  componentWillMount() {
    this.props.itemArticleActions.articleSelectedLoad(this.props.location.state.id);
  }

  render () {
    return (
      <section className="container">
        <DetailsItem
          article={this.props.article}
        />
      </section>
    )
  }
}

DetailsContainer.propTypes = {
  article: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool
};



function mapStateToProps (state) {
  return {
    article: state.itemArticle.article,
    loading: state.itemArticle.loading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    itemArticleActions: bindActionCreators(itemArticleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
