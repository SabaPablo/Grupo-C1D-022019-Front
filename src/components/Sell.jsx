import React, { useState, useEffect } from 'react';
import '../dist/css/App.css';
import Menues from "./Menues";
import {makeStyles} from "@material-ui/core";
import {fade} from "@material-ui/core/styles";
import axios from 'axios';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';


const Sell = (props) => {
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

    const [menues, setMenues] = useState([]);

    useEffect(() => {
        console.log(sessionStorage.getItem('user_id'))
        axios.get((process.env.API_URL || 'http://localhost:8080/') + `api/menus/provider?providerId=${sessionStorage.getItem('user_id')}`)
            .then(res => {
                const menues = res.data;
                setMenues(menues) })
    }, []);


    const goToMenuForm = () => {
        props.history.push("/menu/add")
    };


        return (
            <div>

            <div>
                <div className={classes.search}>

                    <div align="right">
                        <Fab color="primary" aria-label="add" className={classes.fab}
                            onClick={goToMenuForm}>
                            <AddIcon />
                        </Fab>
                    </div>
                </div>
                <Menues menues={menues}/>

            </div>

            </div>
        );

};

export default Sell;
