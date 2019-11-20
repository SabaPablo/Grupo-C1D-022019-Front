import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import NavBar from "../components/NavBar"
import { Container } from "reactstrap";

import history from "../utils/history";
import PrivateRoute from "../components/PrivateRoute";
import Home from "./Home";
import Profile from "./Profile";
import Footer from "../components/Footer";
import SignIn from "./Login";
import Users from "./Users";
import MiniDrawer from "../components/NavBarDeprecated";



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
                <div id="app" className="d-flex flex-column h-100">

                    <Container className="flex-grow-1 mt-5">
                        <Switch>
                            <Route path="/" exact component={NavBar} />
                            <PrivateRoute exact path="/register" component={Users} />
                            <PrivateRoute path="/" component={MiniDrawer} />
                        </Switch>
                    </Container>
                    <Footer />
                </div>
            </Router>
        );
    }

}

export default App;
