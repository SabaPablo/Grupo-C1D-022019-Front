import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Contact from "./Contacts";
import NavBar from "./navBar"
import Users from "./Users";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import SignIn from "./Login";
import {Album} from "@material-ui/icons";
import {observable} from "mobx";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#5fb51e',
            dark: '#148418',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f4b123',
            dark: '#baaa25',
            contrastText: '#000',
        },
    },
});

const appState = observable({
    name: "",
    pass: "",

    addName: (name) => {
        appState.name = name
    },
    addPass: (pass) => {
        appState.pass = pass
    }
});


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }





    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                        <Switch>
                            <div>
                                <Route path="/">
                                    <NavBar />
                                    <Route exact path="/Home" component={Home} />
                                    <Route exact path="/album" component={Album} />
                                    <Route exact path="/contacs" component={Contact} />
                                    <Route exact path="/users" component={Users} />
                                </Route>
                                <Route>
                                    <Route exact path="/login" component={SignIn}/>
                                </Route>
                            </div>
                        </Switch>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default App;
