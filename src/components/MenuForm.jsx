import React, { Component } from 'react';
import '../dist/css/App.css';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "@material-ui/core/ListItem/ListItem";
import moment from "moment";
import MultipleSelect from "./MultipleSelect";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import history from "../utils/history";
import { withTranslation } from 'react-i18next';

class MenuForm extends Component{
    state = {
        idProvider: null,
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

    thereAreErrors = () => {
        return this.formHaveErrors() || this.formHaveNull();
    };

    formHaveErrors = () => {
        return !Object.values(this.state.errors).every(o => o === '');
    };

    formHaveNull = () => {
        return !Object.values(this.state).every(o => o !== null);
    };


    componentDidMount(){
        this.setState({"idProvider": sessionStorage.getItem('user_id')})
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
            case 'description':
                event.target.error = 'error';
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
                    (value < 10 || value > 70 || +value >= +this.state.cantMaxPeerDay)
                        ? 'Error cant mim'
                        : '';
                break;
            case 'priceMin':
                errors.priceMin =
                    (value < 0 || +value > 1000 || +value >= +this.state.price )
                        ? 'Error price cant min'
                        : '';
                break;
            case 'cantMax':
                errors.cantMax =
                    (value < 40 || value > 150 || +value <= +this.state.cantMin || +value >= +this.state.cantMaxPeerDay)
                        ? 'Error cant max'
                        : '';
                break;
            case 'priceMax':
                errors.priceMax =
                    (value < 0 || value > 1000 || +value >= +this.state.priceMin)
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
        const { t } = this.props
        if (this.thereAreErrors()) {
            NotificationManager.error(t('MenuErrorCreation'), t('MenuErrorCreationDate'), 3000, () => {
                alert('callback');
            });
        } else {
            fetch((process.env.REACT_APP_API_URL || 'http://localhost:8080') + "/api/menus",{

                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state)
            })
                .then(res => {
                    if (res.ok) {
                        NotificationManager.success( t('MenuSuccessCreate'));
                        const data = res.json();
                        //this.cleanForm();
                        history.push('/sell');
                        return data;
                    } else {
                        NotificationManager.error(t('ConnetionError'), 'Upsss!!!', 5000, () => {
                            alert('callback');
                        });
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
        }
    };

    setCategories = values => {
        this.setState({category: values.map(v => v.value)});
    };

    render(){
        const { t } = this.props;
        return (
            <div>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        {t('MenuRegister')}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error = {this.state.errors.name !== ''}
                                required
                                id="name"
                                name="name"
                                label={t("FirstName")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <MultipleSelect onChangeMulti={this.setCategories}/>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                error = {this.state.errors.description !== ''}
                                required
                                id="description"
                                name="description"
                                label={t("Description")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error = {this.state.errors.price !== ''}
                                required
                                id="price"
                                name="price"
                                label={t('Price')}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error = {this.state.errors.cantMaxPeerDay !== ''}
                                required
                                id="cantMaxPeerDay"
                                name="cantMaxPeerDay"
                                label={t('MaxQuantityPerDay')}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error = {this.state.errors.cantMin !== ''}
                                required
                                id="cantMin"
                                name="cantMin"
                                label={t('MinQuantity')}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error = {this.state.errors.priceMin !== ''}
                                required
                                id="priceMin"
                                name="priceMin"
                                label={t("PriceCantMin")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error = {this.state.errors.cantMax !== ''}
                                id="cantMax"
                                name="cantMax"
                                label={t("MaxQuantity")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error = {this.state.errors.priceMax !== ''}
                                id="priceMax"
                                name="priceMax"
                                label={t("PriceCantMax")}
                                fullWidth
                                onChange={this.handleChange}
                                noValidate
                                type={"number"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error = {this.state.errors.priceDelivery !== ''}
                                id="priceDelivery"
                                name="priceDelivery"
                                label={t("DeliveryValue")}
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
                                label={t("UrlImage")}
                                onChange={this.handleChange}
                                fullWidth
                                noValidate
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label> {t("dateInit")} </label>
                            <TextField
                                error = {this.state.errors.dateInit !== ''}
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
                            <label> {t("dateEnd")} </label>
                            <TextField
                                error = {this.state.errors.dateEnd !== ''}
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
                        {t('AddMenu')}
                    </Button>
                </React.Fragment>
                <NotificationContainer/>
            </div>
        );
    }

}
export default withTranslation()(MenuForm);
