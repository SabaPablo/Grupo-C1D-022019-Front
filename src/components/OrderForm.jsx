import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '700px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        width: "100%",
        height: "200px"
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Image
                        style={{flex:1, height: '100%', width: '300px'}}
                        resizeMode="contain"
                        src={"https://img.culturacolectiva.com/cdn-cgi/image/f=auto,w=1600,q=80,fit=contain/content_image/2019/5/2/1556836847320-recetas-de-comida-china-para-preparar-facil-y-rapido.001.jpeg"}

                    />
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <div>

                    <Typography gutterBottom variant="h4" component="h2">
                        Titulo
                    </Typography>
                    <Typography>
                        Descripcion
                    </Typography>
                    <TextField
                        id="standard-number"
                        label="Cantidad"
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                        <Typography gutterBottom variant="h5" component="h2">
                            10,5 p/menu
                        </Typography>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button variant="contained" color="primary" className={classes.button}>
                        Comprar
                    </Button>
                    </div>
                </Paper>


                </Grid>
            </Grid>
        </div>
    );
}