import React, {Component} from 'react';
import '../dist/css/App.css';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import classes from "@material-ui/core/ListItem/ListItem";
import Container from "../components/MapContainer";
import {withTranslation} from 'react-i18next';
import MailStatic from "../components/MailStatic";
import history from "../utils/history";

class Users extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            lastName: null,
            mail: null,
            phone: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            errors: {
                name: '',
                lastName: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                country: '',
            }
        };
    }

    addMail = (mail) => {
        this.setState({mail: mail}, ()=> {
        })
    };

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
            default:
                break;
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
    };

    createUser = () => {

        fetch((process.env.REACT_APP_API_URL || 'http://localhost:8080') + "/api/clients", {

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
                    throw Error(res);
                }
            })
            .then(json => {
                sessionStorage.setItem('login', 'ok');
                sessionStorage.setItem('user_id', json.id);
                history.push('/home');
                this.setState({
                    isLoaded: true,
                    token: json
                });
            })
            .catch(error => console.error(error));    };

    render(){
        const { t } = this.props;
        return (
            <div>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        {t('UserRegister')}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label={t("FirstName")}
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
                                label={t("LastName")}
                                fullWidth
                                autoComplete="lname"
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <MailStatic addMail={this.addMail} />

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="phone"
                                name="phone"
                                label={t('Phone')}
                                fullWidth
                                autoComplete="phone"
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address"
                                name="address"
                                label={t("Address")}
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
                                label={t("City")}
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
                                label={t("State")}
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
                                label={t("ZipCode")}
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
                                label={t("Country")}
                                fullWidth
                                autoComplete="billing country"
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label= {t('TermsAndConditions')}
                            />
                        </Grid>
                    </Grid>
                    <Container />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.createUser}
                        className={classes.button}>
                        {t('Register')}
                    </Button>
                </React.Fragment>
            </div>
        );
    }

}

export default withTranslation()(Users);