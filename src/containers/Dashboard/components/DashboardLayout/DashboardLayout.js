import React from 'react';
import classNames from "classnames"
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import "./DashboardLayout.scss";

export const DashboardLayout = ({mainArticles}) => {
  return (
    <div className="dashboard-layout">
        {mainArticles.map((article, i) => (
            <div key={article.id} tabIndex="1" className={classNames("dashboard-layout__element", i === 0 && "dashboard-layout__element--primary")}>
                <Link to={`/article/${article.id}`} className="dashboard-layout__element-link">
                    <img src={article.img.original_url} alt="" className="dashboard-layout__element-image"/>
                    <div className="dashboard-layout__element-title">
                        {article.title}
                    </div>
                </Link>
            </div>
        ))}
    </div>
  );
};

DashboardLayout.propTypes = {
    mainArticles: PropTypes.array.isRequired,
};




