import React from 'react';
import { Link } from 'react-router-dom';

import './css/articlesButtons.css';

const ArticlesButtons = ({
  id,
  author,
  title,
  published,
  content,
  onArticleItem,
  onUpdateArticle,
  onDeleteArticle
}) => (
  <div className="buttonsArticle">
    <Link
      to={{
        pathname: `article${id}`,
        state: {
         id: id,
         author: author,
         title: title,
         content: content,
         published: published
        }
    }}>
      <div className="icon" onClick={onArticleItem}>
        <span className="fa fa-eye  fa-lg"></span>
      </div>
    </Link>
    <div className="icon" onClick={onUpdateArticle}>
      <span className="fa fa-pencil-square-o fa-lg"></span>
    </div>
    <div className="icon" onClick={onDeleteArticle}>
      <span className="fa fa-times fa-lg"></span>
    </div>
  </div>
);

export default ArticlesButtons;
