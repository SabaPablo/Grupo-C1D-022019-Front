import React, { Component } from 'react';
import '../dist/css/App.css';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "@material-ui/core/ListItem/ListItem";
import i18n from "../i18n"
import moment from "moment";
import MultipleSelect from "./MultipleSelect";

const host= "http://localhost:8080";

class MenuForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            idProvider: sessionStorage.getItem('user_id'),
            name: null,
            description: null,
            category:[],
            cantMaxPeerDay: null,
            cantMin: null,
            cantMax: null,
            price: null,
            priceMin: null,
            priceMax: null,
            priceDelivery: null,
            dateInit: null,
            dateEnd: null,
            urlImage:null,
            errors: {
                name: '',
                description: '',
                cantMaxPeerDay: '',
                cantMin: '',
                cantMax: '',
                price: '',
                priceMin: '',
                priceMax: '',
                priceDelivery: '',
                dateInit: '',
                dateEnd: '',
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
            case 'description':
                errors.description =
                    (value.length < 20 || value.length >40)
                        ? 'Error long description'
                        : '';
                break;
            case 'price':
                errors.price =
                    ( value < 0 || value > 1000)
                        ? 'Error long price'
                        : '';
                break;
            case 'cantMaxPeerDay':
                errors.cantMaxPeerDay =
                    (value < 0)
                        ? 'Error maxQuantity Per Day'
                        : '';
                break;
            case 'cantMin':
                errors.cantMin =
                    (value < 10 || value > 70 || value < this.state.cantMax)
                        ? 'Error cant mim'
                        : '';
                break;
            case 'priceMin':
                errors.priceMin =
                    (value < 0 || value > 1000 || value > this.state.price || value < this.state.priceMax)
                        ? 'Error price cant min'
                        : '';
                break;
            case 'cantMax':
                errors.cantMax =
                    (value < 40 || value > 150 || value < this.state.cantMin)
                        ? 'Error cant max'
                        : '';
                break;
            case 'priceMax':
                errors.priceMax =
                    (value < 0 || value > 1000 || value > this.state.price || value > this.state.priceMin)
                        ? 'Error price cant max'
                        : '';
                break;
            case 'priceDelivery':
                errors.priceDelivery =
                    (value < 10 || value >40)
                        ? 'Error delivery value'
                        : '';
                break;
            case 'dateEnd':
                errors.dateEnd =
                    (moment(value, "YYYY-MM-DD").diff(moment().format("YYYY-MM-DD"),'hours') < 0 ||
                     moment(value, "YYYY-MM-DD").diff(moment(this.state.dateInit, "YYYY-MM-DD"),'hours') < 0)
                        ? 'Error time Until'
                        :'';
                break;
            case 'dateInit':
                errors.dateInit =
                    (moment(value, "YYYY-MM-DD").diff(moment().format("YYYY-MM-DD"),'hours') < 0 ||
                     moment(value, "YYYY-MM-DD").diff(moment(this.state.dateEnd, "YYYY-MM-DD"),'hours') > 0)
                        ? 'Error time Since'
                        :'';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value}, ()=> {
            console.log(this.state);
        })
    };



    changeProperty = (e) => {
        let value = e.target.value;
        let property = e.target.name;
        this.setState({
            [property]: value
        });
    };

    createMenu = () => {
        fetch(host + "/api/menus", {

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
            .catch(error => console.error(error));
    };

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
                            <MultipleSelect />
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
                                id="price"
                                name="price"
                                label={i18n.t('Price.label')}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cantMaxPeerDay"
                                name="cantMaxPeerDay"
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
                                id="cantMin"
                                name="cantMin"
                                label={i18n.t('MinQuantity.label')}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="priceMin"
                                name="priceMin"
                                label={i18n.t("PriceCantMin.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="cantMax"
                                name="cantMax"
                                label={i18n.t("MaxQuantity.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="priceMax"
                                name="priceMax"
                                label={i18n.t("PriceCantMax.label")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
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
                                onChange={this.handleChange}
                                fullWidth
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label> {i18n.t("dateInit.label")} </label>
                            <TextField
                                required
                                id="dateInit"
                                name="dateInit"
                                onChange={this.handleChange}
                                fullWidth
                                noValidate
                                type={"date"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label> {i18n.t("dateEnd.label")} </label>
                            <TextField
                                required
                                id="dateEnd"
                                name="dateEnd"
                                onChange={this.handleChange}
                                fullWidth
                                noValidate
                                type={"date"}
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
