import Card from "@material-ui/core/Card";
import AddIcon from '@material-ui/icons/Add';
import React from "react";
import {makeStyles} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    fab: {
        margin: theme.spacing(1),

    },
    card: {
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignSelf:'center'
    },

}));


export default function AddCard(props) {

    const goToAddMenu = () => {
        //props.history.push(`/menu/add`);
    };

    const classes = useStyles();

    return (

        <Card className={classes.card}>
            <Fab color="primary" aria-label="add" className={classes.fab}
                onClick={goToAddMenu}>
                <AddIcon />
            </Fab>
        </Card>
    )
}