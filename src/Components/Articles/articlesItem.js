import React from 'react';

import { Link } from 'react-router-dom';

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
           published: published,
           id: id
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
          onArticleItem={onArticleItem.bind(this, {id})}
          onUpdateArticle={onUpdateArticle}
          onDeleteArticle={onDeleteArticle}
        />
      </div>
  </div>
);

export default ArticlesItem;
