import React from 'react';

import ArticlesButtons from './articlesButtons';
import './css/articlesItem.css';

const ArticlesItem = ({
  id,
  author,
  title,
  excerpt,
  published,
  content,
  onUpdateArticle,
  onDeleteArticle
}) => (
  <div className="article">
    <div className="info">
      <h2 className="author">{author}</h2>
      <h3 className="title">{title}</h3>
      <p className="excerpt">{excerpt}</p>
    </div>
    <div className="buttons">
      <ArticlesButtons
        id={id}
        author={author}
        title={title}
        published={published}
        content={content}
        onUpdateArticle={onUpdateArticle}
        onDeleteArticle={onDeleteArticle}
      />
    </div>
  </div>
);

export default ArticlesItem;
