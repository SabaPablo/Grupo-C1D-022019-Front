import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from '@material-ui/core/List';
import axios from "axios";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
}));
const Credits = () => {
    const classes = useStyles();

    const [amount, setAmount] = useState(0.0);
    const [userCredit, setuserCredit] = useState(0.0);

    useEffect(() => {
        axios.get((process.env.API_URL || 'http://localhost:8080/') + `api/credit?user_id=${sessionStorage.getItem('user_id')}`)
            .then(res => {
                setuserCredit(res.data);
            })

    }, []);

    const addMoney = () => {
        axios.post((process.env.API_URL || 'http://localhost:8080/') + 'api/credit' ,{
            amount: amount,
            user_id: sessionStorage.getItem('user_id')

            })
            .then(data => {
                console.log(data);
                setuserCredit(data.data.amount)
            }).catch(console.log);
    };

    const handleChange = (e) => {
        setAmount(e.target.value)
    };


    return (
        <div className={classes.root}>

            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={amount}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>

            <Button
                variant="contained"
                color="default"
                className={classes.button}
                start={<MonetizationOnIcon />}
                onClick={addMoney}
            >
                Agregar
            </Button>

            <List className={classes.root}>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <MonetizationOnIcon />
                        </Avatar>

                    </ListItemAvatar>
                    <ListItemText primary="Saldo Actual" secondary={"$ " + userCredit} />
                </ListItem>
            </List>

        </div>
    );
}

export default Credits;
