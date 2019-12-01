import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuCard from "./MenuCard";


const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const Menues = ( { menues }) => {

    const classes = useStyles();

    const [offset, setOffset] = React.useState(0);

    const handleClick = ( pagNumber ) => {
        console.log(menues.length,"menues");
        setOffset( pagNumber );
        console.log(offset)
    };

    return (
        <React.Fragment>
            <CssBaseline />

            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {
                            menues.map((aMenu, index) => (
                            <Grid item key={aMenu} xs={12} sm={6} md={4}>
                                <MenuCard menu={aMenu}/>
                            </Grid>
                        ))
                        }
                    </Grid>
                </Container>
            </main>
            {/* Footer */}

            {/* End footer */}
        </React.Fragment>
    );
};

export default Menues;
