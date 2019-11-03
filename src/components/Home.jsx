import React, {useEffect, useState} from 'react';
import '../dist/css/App.css';
import Menues from "./Menues";
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core";
import {fade} from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';

import axios from 'axios';


const Home = () => {


    const useStyles = makeStyles(theme => ({

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
        }
    }));


    const classes =useStyles();

    const [menus, setMenues] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios.get((process.env.REACT_APP_API_URL || 'http://localhost:8080/') + 'api/menus')
            .then(res => {
                const menues = res.data;
                setMenues(menues) })

    }, []);


    const handleOnChange = (e) => {
        setQuery(e.target.value)
    };

    const searchWithQuery = () => {
        axios.get((process.env.REACT_APP_API_URL || 'http://localhost:8080/') + `api/menus/query?query=${query}`)
            .then(res => {
                const menues = res.data;
                setMenues(menues) })

    };

    const handleKeyPress = (e) => {
        if (e.which === 13 || e.keyCode === 13)
            searchWithQuery()
    };

        return (
            <div>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        value={query}
                        onChange={handleOnChange}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <Menues menues={menus}/>

            </div>
        );

};

export default Home;
