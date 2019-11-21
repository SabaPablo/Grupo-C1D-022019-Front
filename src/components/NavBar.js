import React from "react";
import {Route, Switch} from "react-router-dom";
import {Button, Nav, NavItem,} from "reactstrap";
import {useAuth0} from "../react-auth0-spa";
import history from "../utils/history";
import axios from "axios";
import Home from "../views/Home";
import userStile from "../utils/useStyles"


const NavBar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if(user) {
    axios.get((process.env.REACT_APP_API_URL || 'http://localhost:8080') +  `/api/clientsbymail/${user.email}` )
        .then(res => {
          const userId = res.data;
          if(userId){
            sessionStorage.setItem('user_id', userId);
            history.push('/Home');
          }else{
            sessionStorage.setItem('user_mail', user.email);
            history.push('/register');
          }
        })
  }

  return (
    <div className="nav-container" style={{textAlign: 'right', alignSelf: 'stretch'}}>
        <Nav className="d-none d-md-block" navbar>
            {!isAuthenticated && (
                <NavItem>
                    <Button
                        id="qsLoginBtn"
                        color="primary"
                        className="btn-margin"
                        onClick={() => loginWithRedirect({})}>
                        Ingresar
                    </Button>
                </NavItem>
            )}
        </Nav>
        {isAuthenticated && (
            <Nav className="d-md-none" navbar>
                <NavItem>
                    <Button
                        id="qsLoginBtn"
                        color="primary"
                        block
                        onClick={() => logout({})}
                    >
                        Salir
                    </Button>
                </NavItem>
            </Nav>
        )}
      <main>
        <div/>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Route>
      </main>
    </div>
  );
};

export default NavBar;
