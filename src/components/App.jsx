import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Contact from "./Contacts";
import NavBar from "./navBar"
import Users from "./Users";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Menues from "./Menues";


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
export default class App extends React.Component {
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
                    <BrowserRouter>
                        <NavBar/>

                            <Switch>
                                <Route path="/Album" render={props => <Menues {...props}/>}/>
                                <Route path="/" render={props => <Home {...props} />} />
                                <Route path="/contacts" render={props => <Contact {...props} />}  />
                                <Route path="/Users" render={props => <Users {...props} />}  />
                            </Switch>

                    </BrowserRouter>
                </MuiThemeProvider>
            </div>
        );
    }
}