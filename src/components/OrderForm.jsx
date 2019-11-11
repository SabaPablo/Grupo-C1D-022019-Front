import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {withStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Rating from '@material-ui/lab/Rating';
import i18n from "../i18n";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '700px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    divider: {

        margin: theme.spacing(3, 2),
    },
    margin: {
        margin: theme.spacing(1),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    img: {
        width: "100%",
        height: "100%"
    }
}));

 const OrderForm = (params) => {

     let purchase = {
         idClient: sessionStorage.getItem('user_id'),
         deliveryDate: null,
         cant: null
     };

     useEffect(() => {
         axios.get((process.env.REACT_APP_API_URL || 'http://localhost:8080') + `/api/menus/${params.match.params.number}`)
             .then(res => {
                 console.log(res.data)
                 setMenu(res.data);
                  })

     }, [params.match.params.number]);
     const menuInit = {

         "name": "Milanesas",
         "description": "Milanesas con Ensaladas y agua mineral\n",
         "urlImage": "https://www.mexicoenmicocina.com/wp-content/uploads/2019/01/receta-de-milanesa-de-pollo.jpg",
         "deliveryValue": 5,
         "rate": [],
         "validity": null,
         "expiration": null,
         "turn": "AA",
         "deliveryTime": "A",
         "status": "CANCELED",
         "price": 3,
         "cantMin": 6,
         "priceCantMin": 5,
         "cantMax": 3,
         "priceCantMax": 4,
         "cantMaxPeerDay": 5,
         "id": 1
     };


    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const [delivery, setDelivery] = React.useState(false);
    const [menu, setMenu] = React.useState(menuInit);
    const [deliveryDate, setDeliveryDate] = React.useState('');
    const handleInputChange = event => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

     const handleChange = () => {
        setDelivery(!delivery);
     };

     const handleDateChange = (evt) => {
         setDeliveryDate(evt.target.value);
     };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    const GreenCheckbox = withStyles({
        root: {
            color: green[400],
            '&$checked': {
                color: green[600],
            },
        },
        checked: {},
    })(props => <Checkbox color="default" {...props} />);

    const buyMenu = (evt)=>{
        purchase.idMenu = menu.id;
        purchase.cant = value;
        purchase.deliveryDate = deliveryDate;
        purchase.delivery = delivery;
        console.log(purchase);

        fetch((process.env.REACT_APP_API_URL || 'http://localhost:8080') + "/api/orders",{

            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(purchase)
        })
            .then(res => {
                if (res.ok) {
                    NotificationManager.success( i18n.t('MenuSuccessCreate.label'));
                    const data = res.json();
                    return data;
                } else {
                    NotificationManager.error(i18n.t('ConnetionError.label'), 'Upsss!!!', 5000, () => {
                        alert('callback');
                    });
                    throw Error(res.statusText);
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <div className={classes.root}>
            <NotificationContainer/>

            <Paper className={classes.paper}>
            <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <Image
                            style={{flex:1, width: '100%'}}
                            resizeMode="contain"
                            src={menu.urlImage}

                        />
                    </Grid>
                    <Grid item xs={6}>
                            <div>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography gutterBottom variant="h4" component="h2">
                                            {menu.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Typography component="legend">Custom empty icon</Typography>
                                            <Rating value={menu.rate} readOnly />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <Typography>
                                        {menu.description}
                                    </Typography>
                                    </Grid>

                                <Grid item xs={5}>
                                        <Input

                                            value={value}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            inputProps={{
                                                step: 1,
                                                min: 1,
                                                max: 100,
                                                type: 'number',
                                                'aria-labelledby': 'input-slider',
                                            }}
                                        />
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography >
                                        {menu.price} p/menu
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h5" component="h2" color={"textPrimary"}>
                                         {value*menu.price}$
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="date"
                                        label="Fecha de pedido"
                                        type="date"
                                        className={classes.textField}
                                        onChange={handleDateChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                    <Grid item xs={6}>
                                    <FormControlLabel
                                        control={
                                            <GreenCheckbox
                                                checked={delivery}
                                                onChange={handleChange}
                                            />
                                        }
                                        label="Delivery"
                                    />
                                </Grid>
                                    <Grid item xs={12}>
                                <Divider variant="middle" className={classes.divider}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className={classes.heading}>Vendedor : Pizzeria los hijos de puta</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                Localidad: Villa patito
                                                Especialidad: culiarse a tu vieja
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" className={classes.button} onClick={buyMenu}>
                                        Comprar
                                    </Button>
                                </Grid>
                                </Grid>
                            </div>

                    </Grid>
            </Grid>
                </Paper>
        </div>
    );
}

export default OrderForm;
