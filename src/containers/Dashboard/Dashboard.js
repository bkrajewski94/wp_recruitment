import React from 'react';

import { DashboardLayout } from './components/DashboardLayout/DashboardLayout';
import { withDashboardQueries } from './graphql/DashboardQueries';

const DashboardComponent = ({mainArticlesLoading, mainArticles}) => {
  if(mainArticlesLoading) return null;

  return <DashboardLayout mainArticles={mainArticles}/>;
};

export const Dashboard = withDashboardQueries(DashboardComponent);
