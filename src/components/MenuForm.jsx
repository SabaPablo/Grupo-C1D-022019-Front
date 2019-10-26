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

class MenuForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            price: null,
            maxQuantityPerDay: null,
            minQuantity: null,
            maxQuantity: null,
            priceCantMax: null,
            deliveryValue: null,
            urlImage:null,
            errors: {
                name: '',
                description: '',
                maxQuantityPerDay: '',
                minQuantity: '',
                maxQuantity: '',
                deliveryValue: '',
                price: '',
                priceCantMax: '',
                priceCantMin: '',
                urlImage:''
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
            case 'password':
                errors.password ='';
                if (!(value.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/) && value.length>=8) ){
                    errors.password="Please enter a valid password";
                }

                break;
            case 'mail':
                errors.mail ='';
                if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ){
                    errors.mail="Please enter a valid email address";
                }
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

    /*createUser = () => {
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
*/
    render(){
        return (
            <div>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        {i18n.t('MenuRegister.label')}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label={i18n.t("FirstName.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="price"
                                name="price"
                                label={i18n.t('Price.label')}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="description"
                                name="description"
                                label={i18n.t("Description.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="maxQuantityPerDay"
                                name="maxQuantityPerDay"
                                label={i18n.t('MaxQuantityPerDay.label')}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="minQuantity"
                                name="phone"
                                label={i18n.t('MinQuantity.label')}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="maxQuantity"
                                name="maxQuantity"
                                label={i18n.t("MaxQuantity.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="priceCantMax"
                                name="priceCantMax"
                                label={i18n.t("PriceCantMax.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="deliveryValue"
                                name="deliveryValue"
                                label={i18n.t("DeliveryValue.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="urlImage"
                                name="urlImage"
                                label={i18n.t("UrlImage.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.createMenu}
                        className={classes.button}>
                        {i18n.t('AddMenu.label')}
                    </Button>
                </React.Fragment>
            </div>
        );
    }

}

export default MenuForm;
