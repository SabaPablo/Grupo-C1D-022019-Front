import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuCard from "./MenuCard";
import AddCard from "./AddCard";

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

//const menues = [{name: "pure", description: "pure de papas con algo de pimienta", urlImage: ""},{name: "milas", description: "como las que hace la abuela", urlImage: "https://www.mexicoenmicocina.com/wp-content/uploads/2019/01/receta-de-milanesa-de-pollo.jpg"}, {name: "tomate"}, {name: "algo"}, {name: "mierda"}, {name: "comida"}];



export default function Menues( { menues } ) {

    const ExpansionCard = (props) => {
        const menu = props.menu;
        if (menu.isAdd) {
            return <AddCard/>;
        }
        return <MenuCard menu={menu}/>

    }

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {
                            menues.map((menu, index, array) => (
                            <Grid item key={menu} xs={12} sm={6} md={4}>
                                <ExpansionCard menu={menues[index]}/>
                            </Grid>
                        ))
                        }
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    12 Cactus
                </Typography>
             </footer>
            {/* End footer */}
        </React.Fragment>
    );
}