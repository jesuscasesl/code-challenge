import React from 'react';

import './css/articlesButtons.css';

const ArticlesButtons = ({
  onArticleItem,
  onUpdateArticle,
  onDeleteArticle
}) => (
  <div className="buttonsArticle">
    <div className="icon" onClick={onArticleItem}>
      <span className="fa fa-eye  fa-lg"></span>
    </div>
    <div className="icon" onClick={onUpdateArticle}>
      <span className="fa fa-pencil-square-o fa-lg"></span>
    </div>
    <div className="icon" onClick={onDeleteArticle}>
      <span className="fa fa-times fa-lg"></span>
    </div>
  </div>
);

export default ArticlesButtons;
