import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import NavBar from "../components/NavBar"
import Users from "./Users";
import SignIn from "./Login";
import history from "../utils/history";
import {PrivateRoute} from "../components/PrivateRoute";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: true,
        };
    }
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={SignIn}/>
                    <Route exact path="/register" component={Users} />
                    <Route path="/">
                    <PrivateRoute path="/" component={NavBar} />
                    </Route>
                </Switch>
            </Router>
        );
    }

}

export default App;
