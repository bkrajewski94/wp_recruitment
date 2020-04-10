import React from "react";
import { Link } from 'react-router-dom';

import {URLS} from "../../urls";
import error from '../../assets/error.png';

import "./ErrorPage.scss";

export const ErrorPage = () => (
    <div className="error-page">
        <h2 className="error-page__header">
            Strona jest niedostępna
        </h2>
        <h3 className="error-page__description">
            Spróbuj ponownie później.
        </h3>
        <img className="error-page__image" src={error} alt="error" />
        <div>
        <Link to={URLS.DEFAULT}>Wróć do strony głównej</Link>
        </div>
    </div>
)