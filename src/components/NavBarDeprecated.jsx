import React, {useEffect} from 'react';
import clsx from 'clsx';
import {fade, makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import Main from "../views/Main";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Contact from "../views/Contacts";
import Sell from "../views/Sell";
import Buy from "../views/Buy";
import MenuForm from "./MenuForm";
import Credits from "../views/Credits";
import Lang from "./Lang";
import OrderForm from "./OrderForm";
import axios from "axios";
import Profile from "../views/Profile";
import {useAuth0} from "../react-auth0-spa";
import history from "../utils/history";
import {useTranslation} from "react-i18next";


const drawerWidth = 240;

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
    pictureSize:{
        width: '8%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
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
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
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

const MiniDrawer = ()  => {
    const classes = useStyles();
    const theme = useTheme();
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [creditAmount, setCreditAmount ] = React.useState(0);
    const { logout } = useAuth0();

    useEffect(() => {
        axios.get((process.env.REACT_APP_API_URL || 'http://localhost:8080') + `/api/credit?user_id=${sessionStorage.getItem('user_id')}`)
            .then(res => {
                console.log(res.data, "data credit");
                setCreditAmount(res.data);
            })
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const goToHome = () => {
        history.push(`/home`);

    };
    const goToSell = () => {
        history.push(`/sell`);

    };
    const goToProfile = () => {
        history.push(`/profile`);

    };

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin
        });
    const goToConfig = () => {
        history.push(`/config`);

    };
    const goToCredit = () => {
        history.push(`/credit`);

    };
    const goToBuy = () => {
        history.push(`/cart`);
    };
    const goOut = () => {
        logoutWithRedirect()
        sessionStorage.setItem('login', 'off');
        sessionStorage.setItem('user_id', '0');
        history.push(`/login`);
    };

    const { user } = useAuth0();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.grow } variant="h6" noWrap>
                        Viandas YA
                    </Typography>
                    <Typography className={classes.grow} variant="h7" noWrap>
                        Saldo Actual: {creditAmount}
                    </Typography>
                    <img
                        src={user.picture}
                        alt="Profile"
                        className="rounded-circle w-10 pictureSize profile-picture mb-3 mb-md-0"
                    />
                    <div className={classes.lang}>
                        <Lang />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    { [
                        <ListItem button key={t('Start')}
                                  onClick={goToHome}
                        >
                            <ListItemIcon>
                                <HomeIcon onClick={goToHome} />
                            </ListItemIcon>
                            <ListItemText primary={t('Start')} />
                        </ListItem>,
                        <ListItem button key={t("Profile")}
                                  onClick={goToProfile}
                        >
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={t("Profile")} />
                        </ListItem>,
                        <ListItem button key={t("Purchases")}
                                  onClick={goToBuy}
                        >
                            <ListItemIcon>
                            <ShoppingCartIcon />
                            </ListItemIcon>
                        <ListItemText primary={t("Purchases")} />
                        </ListItem>,
                        <ListItem button key={t("Sells")}
                                  onClick={goToSell}
                        >
                            <ListItemIcon>
                                <ShoppingBasketIcon />
                            </ListItemIcon>
                            <ListItemText primary={t("Sells")} />
                        </ListItem>,
                        <ListItem button key={t("Credit")}
                                  onClick={goToCredit}
                        >
                            <ListItemIcon>
                                <LocalAtmIcon />
                            </ListItemIcon>
                            <ListItemText primary={t("Credit")} />
                        </ListItem>,

                        ]
                    }

                </List>
                <Divider />
                <List>
                    {[t("Configuration"), t("CloseSession")].map((text, index) => (
                        <ListItem button key={text}
                                  onClick={index %2 === 0 ? goToConfig: goOut}
                        >
                            <ListItemIcon>{index % 2 === 0 ? <SettingsIcon /> : <MeetingRoomIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route>
                    <Switch>
                        <PrivateRoute exact path="/Home" component={Main} />
                        <PrivateRoute exact path="/cart" component={Buy} />
                        <PrivateRoute exact path="/sell" component={Sell} />
                        <PrivateRoute exact path="/credit" component={()=><Credits setCredit={setCreditAmount}/>} />
                        <PrivateRoute exact path="/menu/add" component={MenuForm} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <PrivateRoute exact path="/order/:number" component={OrderForm} />
                        <PrivateRoute exact path="/contacts" component={Contact} />

                    </Switch>
                </Route>
            </main>

        </div>
    );
};

export default MiniDrawer;