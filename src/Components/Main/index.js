import React, { Component } from 'react';
import request from '../Request';
import { ARTICLES_QUERY } from '../Queries';
import ListArticle from '../ListArticle';


class Main extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <div className="Main">
        <ListArticle articles={this.state.articles} />
      </div>
    );
  }
}

export default Main;
