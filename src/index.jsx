import React from 'react';
import ReactDOM from 'react-dom';
import './dist/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Container} from "@material-ui/core";
import history from './components/History';
import { Router } from "react-router-dom";

import Home from './components/Home'
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";

ReactDOM.render(
    <Container>
        <I18nextProvider i18n={i18n}>
            <Router history={history}>
                <Home />
            </Router>
        </I18nextProvider>,
    </Container>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
