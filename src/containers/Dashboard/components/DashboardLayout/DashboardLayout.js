import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import { LIMIT } from '../../graphql/DashboardQueries';

import './DashboardLayout.scss';

export const DashboardLayout = ({
  mainArticles,
  articles,
  fetchMoreArticles,
}) => {
  const [offset, setOffset] = useState(LIMIT);
  console.log(articles);
  const onLoadMore = () => {
    fetchMoreArticles({
      variables: {
        offset: offset,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          articles: [...prev.articles, ...fetchMoreResult.articles],
        });
      },
    }).then(() => {
      setOffset((prevOffset) => prevOffset + LIMIT);
    });
  };

  return (
    <InfiniteScroll
      initialLoad={false}
      loadMore={onLoadMore}
      hasMore={true}
      threshold={0}
    >
      <div className="dashboard-layout__box dashboard-layout__box--main">
        {mainArticles.map((article, i) => (
          <Link
            to={`/article?url=${article.url}`}
            className={classNames(
              'dashboard-layout__element-link',
              i === 0 && 'dashboard-layout__primary-element'
            )}
          >
            <div
              key={article.id}
              tabIndex="1"
              className="dashboard-layout__element"
            >
              {article.img && ( //Some articles return null as img
                <img
                  src={article.img.original_url}
                  alt=""
                  className="dashboard-layout__element-image"
                />
              )}
              <div className="dashboard-layout__element-title">
                {article.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="dashboard-layout__box">
        {articles.map((article, i) => (
          <Link
            to={`/article?url=${article.url}`}
            className="dashboard-layout__element-link"
          >
            <div
              key={article.id}
              tabIndex="1"
              className="dashboard-layout__element"
            >
              {article.img && ( //Some articles return null as img
                <img
                  src={article.img.original_url}
                  alt=""
                  className="dashboard-layout__element-image"
                />
              )}
              <div className="dashboard-layout__element-title">
                {article.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};

DashboardLayout.propTypes = {
  mainArticles: PropTypes.array.isRequired,
};
