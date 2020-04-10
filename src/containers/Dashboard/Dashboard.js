import React from 'react';

import { DashboardLayout } from './components/DashboardLayout/DashboardLayout';
import { withDashboardQueries, withArticles } from './graphql/DashboardQueries';
import { ErrorPage } from '../../components/ErrorPage/ErrorPage';

const DashboardComponent = ({
  mainArticlesLoading,
  mainArticles,
  articles,
  articlesLoading,
  fetchMoreArticles,
  error,
}) => {
  if (mainArticlesLoading || articlesLoading) return null;
  if (error) return <ErrorPage />;

  return (
    <DashboardLayout
      mainArticles={mainArticles}
      articles={articles}
      fetchMoreArticles={fetchMoreArticles}
    />
  );
};

export const Dashboard = withDashboardQueries(withArticles(DashboardComponent)); //Compose was removed from apollo client library
