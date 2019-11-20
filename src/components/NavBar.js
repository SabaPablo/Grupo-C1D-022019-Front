import React, {useState} from "react";
import {NavLink as RouterNavLink, Route, Switch} from "react-router-dom";

import {Button, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,} from "reactstrap";


import {useAuth0} from "../react-auth0-spa";
import history from "../utils/history";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";
import Home from "../views/Home";
import {makeStyles} from "@material-ui/core";
import {fade} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({


  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    position:'float',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(10)
  },

  currentBalance: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    position:'right',
    marginLeft: theme.spacing(2),
  },

  amount: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    position:'right',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(40)
  },

  lang: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    position:'right',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },

  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
      logout({
        returnTo: window.location.origin
      });


  if(user) {
    console.log(user,"user")
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


  const classes = useStyles();


  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo" />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
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
