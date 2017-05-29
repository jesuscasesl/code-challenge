import React from 'react';
import PropTypes from 'prop-types';

import ArticlesItem from './articlesItem';
import './css/articlesList.css';

const ArticlesList = ({
  articles,
  onArticleItem,
  onUpdateArticle,
  onDeleteArticle
}) => (
  <div className="listArticles">
    {
      articles.map(article => (
        <ArticlesItem
          key={article.id}
          onArticleItem={onArticleItem.bind(this, `${article.id}`)}
          onUpdateArticle={onUpdateArticle}
          onDeleteArticle={onDeleteArticle}
          {...article}
        />
      )).reverse()

    }
  </div>
);

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  onArticleItem: PropTypes.func.isRequired,
  onUpdateArticle: PropTypes.func.isRequired,
  onDeleteArticle: PropTypes.func.isRequired
};

export default ArticlesList;
