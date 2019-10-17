import React from 'react';
import ReactDOM from 'react-dom';
import './dist/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Container, MuiThemeProvider} from "@material-ui/core";
import history from './components/History';
import { Router } from "react-router-dom";

import Home from './components/Home'
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
import theme from "./theme"

ReactDOM.render(
    <Container>
        <I18nextProvider i18n={i18n}>
                <MuiThemeProvider theme={theme}>
                    <App/>
                </MuiThemeProvider>
        </I18nextProvider>,
    </Container>,
    document.getElementById('root'));

serviceWorker.unregister();
