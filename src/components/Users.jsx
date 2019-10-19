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

const host= "http://localhost:8080";

class Users extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            lastName: null,
            mail: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            password: null,
            errors: {
                name: '',
                lastName: '',
                mail: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                password: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':
                errors.name =
                    (value.length < 4 || value.length >30)
                        ? 'Error long name'
                        : '';
                break;
            case 'lastName':
                errors.lastName =
                    (value.length < 4 || value.length >30)
                        ? 'Error long lastName'
                        : '';
                break;
            case 'mail':
                errors.mail ='';
                    //validEmailRegex.test(value)
                        //? ''
                        //: 'Email is not valid!';
                break;
            case 'address':
                errors.address =
                    (value.length < 4 || value.length >30)
                        ? 'Error long address'
                        : '';
                break;
            case 'city':
                errors.city =
                    (value.length < 4 || value.length >30)
                        ? 'Error long city'
                        : '';
                break;
            case 'zip':
                errors.zip =
                    (value.length < 4 || value.length >8)
                        ? 'Error long zip'
                        : '';
                break;
            case 'state':
                errors.state =
                    (value.length < 4 || value.length >30)
                        ? 'Error long state'
                        : '';
                break;
            case 'country':
                errors.country =
                    (value.length < 4 || value.length >30)
                        ? 'Error long country'
                        : '';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
    };



    changeProperty = (e) => {
        let value = e.target.value;
        let property = e.target.name;
        this.setState({
            [property]: value
        });
    };

    createUser = () => {
        fetch(host + "/api/clients", {

            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify( this.state )
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
            .then(json => {
                this.setState({
                    isLoaded: true,
                    token: json
                });
            })
            .catch(error => console.error(error));    };

    render(){
        return (
            <div>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        {i18n.t('UserRegister.label')}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label={i18n.t("FirstName.label")}
                                fullWidth
                                autoComplete="fname"
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label={i18n.t("LastName.label")}
                                fullWidth
                                autoComplete="lname"
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="mail"
                                name="mail"
                                label={i18n.t('Mail.label')}
                                fullWidth
                                autoComplete="email"
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address"
                                name="address"
                                label={i18n.t("Address.label")}
                                fullWidth
                                autoComplete="billing address-line2"
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label={i18n.t("City.label")}
                                fullWidth
                                autoComplete="billing address-level2"
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="state"
                                name="state"
                                label={i18n.t("State.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label={i18n.t("ZipCode.label")}
                                fullWidth
                                autoComplete="billing postal-code"
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label={i18n.t("Country.label")}
                                fullWidth
                                autoComplete="billing country"
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label= {i18n.t('TermsAndConditions.label')}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.createUser}
                        className={classes.button}>
                        {i18n.t('Register.label')}
                    </Button>
                </React.Fragment>
            </div>
        );
    }

}

export default Users;
