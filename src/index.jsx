import React from 'react';
import ReactDOM from 'react-dom';
import './dist/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Container} from "@material-ui/core";
import history from './components/History';
import { Router } from "react-router-dom";

ReactDOM.render(
    <Container>
        <Router history={history}>
            <App />
        </Router>
    </Container>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();