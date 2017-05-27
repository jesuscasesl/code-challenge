import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './details.css';

class Details extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let tags = `${this.props.location.state.tags}`;
    let arrTags = tags.split(',');
    let isPublish = "NO";
    if(`${this.props.location.state.published}` === "TRUE"){
      isPublish = "YES";
    }
    return(
      <div className="container-details">
        <div className="details">
          <label htmlFor="author" className="details-label">Author</label>
          <h3 id="author" className="details-content">{this.props.location.state.author}</h3>

          <label htmlFor="title" className="details-label">Title</label>
          <h3 id="title" className="details-content">{this.props.location.state.title}</h3>

          <label htmlFor="tags" className="details-label">Tags</label>
          <h3 id="tags" className="details-content">{tags}</h3>

          <label htmlFor="content" className="details-label">Content</label>
          <h3 id="content" className="details-content">{this.props.location.state.content}</h3>

          <label htmlFor="published" className="details-label">Published</label>
          <h3 id="published" className="details-content">{isPublish}</h3>

          <Link to="/" className="icon-return">
            <span className="fa fa-reply fa-lg"></span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Details;
