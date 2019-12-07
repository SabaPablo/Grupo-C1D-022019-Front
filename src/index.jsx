import React from 'react';
import ReactDOM from 'react-dom';
import './dist/css/index.css';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import {Container, MuiThemeProvider} from "@material-ui/core";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
import theme from "./theme";
import { Auth0Provider } from "./react-auth0-spa";
import history from "./utils/history";

const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

ReactDOM.render(
    <Container>
        <I18nextProvider i18n={i18n}>
            <MuiThemeProvider theme={theme}>
                <Auth0Provider
                    domain={process.env.REACT_APP_AUTH0_DOMAIN}
                    client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
                    redirect_uri={window.location.origin}
                    onRedirectCallback={onRedirectCallback}
                >
                    <App/>
                </Auth0Provider>,
            </MuiThemeProvider>
        </I18nextProvider>,
    </Container>,

    document.getElementById('root'));

serviceWorker.unregister();
