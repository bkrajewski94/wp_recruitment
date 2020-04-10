import React from 'react';

import { withArticle } from './graphql/ArticleQueries';
import { ErrorPage } from '../../components/ErrorPage/ErrorPage';

import './Article.scss';

const ArticleComponent = ({ article, isLoading, error }) => {
  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return null;
  }

  const [description, ...content] = article.body;
  return (
    <div>
      <article>
        <h1 className="article__main-header">{article.title}</h1>
        <h4 className="article__description">{description.data}</h4>
        <div className="article__image-wrapper">
          <img
            className="article__image"
            src={article.img.original_url}
            alt={article.title}
          />
          <div className="article__image-description">
            Author: {article.img.author}, source: {article.img.source}
          </div>
        </div>
        {content.map((el, index) => (
          <p
            className="article__content"
            key={index}
            dangerouslySetInnerHTML={{ __html: el.data }}
          />
        ))}
      </article>
    </div>
  );
};

export const Article = withArticle(ArticleComponent);
