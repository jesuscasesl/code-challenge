import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DetailsItem from './detailsItem';


class DetailsContainer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
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

export default DetailsContainer;
