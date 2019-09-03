import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Root from './Root';
import Contact from "./Contacts";
import Users from "./Users";




export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
        };
    }

    render() {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route path="/home" render={props => <Home {...props} />} />
                        <Route path="/contacts" render={props => <Contact {...props} />}  />
                        <Route path="/Users" render={props => <Users {...props} />}  />
                    </Switch>
            </BrowserRouter>
        );
    }
}