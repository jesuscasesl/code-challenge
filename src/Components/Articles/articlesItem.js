import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ArticlesButtons from './articlesButtons';
import './css/articlesItem.css';

const ArticlesItem = ({
  id,
  author,
  title,
  excerpt,
  published,
  content,
  onArticleItem,
  onUpdateArticle,
  onDeleteArticle
}) => (
  <div className="article">
    <div className="info">
      <Link
        to={{
          pathname: `${id}`,
          state: {
           author: author,
           title: title,
           content: content,
           published: published
          }
        }}>
          <h2 className="author">{author}</h2>
      </Link>

    <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        <span className="id">{id}</span>
      </div>
      <div className="buttons">
        <ArticlesButtons
          onArticleItem={onArticleItem}
          onUpdateArticle={onUpdateArticle}
          onDeleteArticle={onDeleteArticle}
        />
      </div>
  </div>
);

export default ArticlesItem;
