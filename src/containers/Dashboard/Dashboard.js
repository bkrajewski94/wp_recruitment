import React from 'react';

import { DashboardLayout } from './components/DashboardLayout/DashboardLayout';
import { withDashboardQueries, withArticles } from './graphql/DashboardQueries';

const DashboardComponent = ({mainArticlesLoading, mainArticles, articles, articlesLoading, fetchMoreArticles}) => {
  if(mainArticlesLoading || articlesLoading) return null;

  return <DashboardLayout mainArticles={mainArticles} articles={articles} fetchMoreArticles={fetchMoreArticles}/>;
};

export const Dashboard = withDashboardQueries(withArticles(DashboardComponent)); //Compose was removed from apollo client library
