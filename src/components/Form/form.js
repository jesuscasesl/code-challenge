import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import uuid from 'uuid';
import * as listArticlesActions from '../../store/action/listArticlesActions';
import './form.css';

class Form extends Component{
  constructor (props) {
    super(props);

    this.state = {
      author: "",
      title: "",
      content: "",
      excerpt: "",
      published: "",
      tags: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      id: uuid.v4(),
      author: this.state.author,
      title: this.state.title,
      content: this.state.content,
      excerpt: this.state.excerpt,
      published: this.state.published,
      tags: this.state.tags
   }
   this.props.listArticlesActions.newArticles(formData);
   this.props.listArticlesActions.loadArticleLoad();
   this.props.history.push('/');
  }

  render () {
    return (
      <section className="container-form">
        <form className="form-submit" onSubmit={this.handleSubmit}>
          <div className="container-item">
            <p><label className="form-label">Author:</label></p>
            <input id="author" className="form-content" type="text" name='author' onChange={this.handleChange} value={this.state.author} />
          </div>

          <div className="container-item">
            <p><label className="form-label">Title:</label></p>
            <input id="title" className="form-content" type="text" name='title' onChange={this.handleChange} value={this.state.title} />
          </div>

          <div className="container-item">
            <p><label className="form-label">Content:</label></p>
            <textarea id="content" className="form-content" type="text" name='content' onChange={this.handleChange} value={this.state.content} ></textarea>
          </div>

          <div className="container-item">
            <p><label className="form-label">Excerpt:</label></p>
            <textarea id="excerpt" className="form-content" type="text" name='excerpt' onChange={this.handleChange} value={this.state.excerpt} ></textarea>
          </div>

          <div className="container-item">
            <p><label className="form-label">Publish:</label></p>
              <select id="published" className="form-content" name='published' onChange={this.handleChange} value={this.state.published}>
                <option value=""></option>
                <option value="true">YES</option>
                <option value="false">NO</option>
              </select>
          </div>

          <div className="container-item">
            <p><label className="form-label">Tags:</label></p>
            <input id="tags" className="form-content" type="text" name='tags' onChange={this.handleChange} value={this.state.tags} />
          </div>


          <input type="submit" value="Submit"/>
        </form>
        <Link to="/" className="icon-return">
          <span className="fa fa-reply fa-2x"></span>
        </Link>
      </section>
    )
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
    listArticlesActions: bindActionCreators(listArticlesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
