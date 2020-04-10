import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import {URLS} from "../../urls";

import './PageHeader.scss';

export const PageHeader = ({children}) => (
  <div className="page-header">
      <Link className="page-header__logo-wrapper" to={URLS.DEFAULT}>
        <img src={logo} alt="Logo" className="page-header__logo"/>
      </Link>
      {children}
  </div>
);
