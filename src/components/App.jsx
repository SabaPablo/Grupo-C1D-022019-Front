import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Contact from "./Contacts";
import NavBar from "./navBar"
import Users from "./Users";
import SignIn from "./Login";
import {Album} from "@material-ui/icons";
import {Router, Switch} from "react-router";
import history from "./History";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: true,
        };
    }
    render() {
        return (
            <BrowserRouter>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/login" component={SignIn}/>
                        <Route path="/">

                            <NavBar />
                            <Route exact path="/Home" component={Home} />
                            <Route exact path="/album" component={Album} />
                            <Route exact path="/contacts" component={Contact} />
                            <Route exact path="/users" component={Users} />
                        </Route>
                    </Switch>
                </Router>
            </BrowserRouter>
        );
    }

}

export default App;