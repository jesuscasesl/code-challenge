import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './details.css';
const Details = ({
  author,
  title,
  content,
  published
}) => (
  <div className="container-details">
    <div className="details">
      <label htmlFor="author" className="details-label">Author</label>
      <h3 id="author" className="details-content">{ author }</h3>

      <label htmlFor="title" className="details-label">Title</label>
      <h3 id="title" className="details-content">{ title }</h3>

      <label htmlFor="content" className="details-label">Content</label>
      <h3 id="content" className="details-content">{ content }</h3>

      <label htmlFor="published" className="details-label">Published</label>
      <h3 id="published" className="details-content">{ published }</h3>

      <Link to="/" className="icon-return">
        <span className="fa fa-reply fa-2x"></span>
      </Link>
    </div>
  </div>
);

Details.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  published: PropTypes.string
};

export default Details;
