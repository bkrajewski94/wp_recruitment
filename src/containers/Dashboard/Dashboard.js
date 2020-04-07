import React from 'react';
import {compose} from "@apollo/react-common";

import {DashboardLayout} from "./components/DashboardLayout/DashboardLayout";
import {withDashboardQueries} from "./graphql/DashboardQueries";

const DashboardComponent = () => {
  return (
    <DashboardLayout />
  );
};

export const Dashboard = compose(withDashboardQueries)(DashboardComponent)
