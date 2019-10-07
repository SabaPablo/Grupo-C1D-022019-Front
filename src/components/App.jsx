import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Contact from "./Contacts";
import NavBar from "./navBar"
import Users from "./Users";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import SignIn from "./Login";
import {Album} from "@material-ui/icons";

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
                                <Route exact path="/login" component={SignIn}/>
                            </div>
                        </Switch>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default App;