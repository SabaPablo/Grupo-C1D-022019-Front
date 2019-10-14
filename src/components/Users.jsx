import React, { Component } from 'react';
import '../dist/css/App.css';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import classes from "@material-ui/core/ListItem/ListItem";
import i18n from "../i18n"

class Users extends Component{
    createUser;
    render(){
        return (
            <div>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Registro de usuario
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="Nombre"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Apellido"
                                fullWidth
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="mail"
                                name="mail"
                                label="Mail"
                                fullWidth
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address"
                                name="address"
                                label="Dirección"
                                fullWidth
                                autoComplete="billing address-line2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="Partido"
                                fullWidth
                                autoComplete="billing address-level2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="state" name="state" label="Provincia" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Código postal"
                                fullWidth
                                autoComplete="billing postal-code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="País"
                                fullWidth
                                autoComplete="billing country"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Acepto haber leido los terminos y condiciones"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.createUser}
                        className={classes.button}
                    >{i18n.t('Register.label')}
                    </Button>
                </React.Fragment>
            </div>
        );
    }

}

export default Users;
