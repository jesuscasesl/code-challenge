import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './details.css';

const Details = ({
  article
}) => (
  <section className="details">
    <label htmlFor="author" className="details-label">Author</label>
    <h3 id="author" className="details-content">{ article.author }</h3>

    <label htmlFor="title" className="details-label">Title</label>
    <h3 id="title" className="details-content">{ article.title }</h3>

    <label htmlFor="content" className="details-label">Content</label>
    <h3 id="content" className="details-content">{ article.content }</h3>

    <label htmlFor="published" className="details-label">Published</label>
    <h3 id="published" className="details-content">{ (article.published === true) ? "YES" : "NO" }</h3>

    <Link to="/" className="icon-return">
      <span className="fa fa-reply fa-2x"></span>
    </Link>
  </section>
);

Details.propTypes = {
  article: PropTypes.object
};

export default Details;
