import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import '../dist/css/App.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import i18n from "../i18n";


class SignIn extends Component{

    constructor(props) {
        super(props);
        this.state = {
            mail: null,
            password: null
        }
    }
    useStyles = makeStyles(theme => ({
        '@global': {
            body: {
                backgroundColor: theme.palette.common.white,
            },
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    goToRegister= () => {
        this.props.history.push(`/register`);
    };

    goToHome= () =>{
        console.log(this.state.mail)
        fetch((process.env.API_URL || 'http://localhost:8080/') + 'api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail: this.state.mail,
                password: this.state.password
            })
        }) .then(res => res.json())
            .then((data) => {
                if(data.userId > 0 && data.userId !== undefined){
                console.log(data)
                    sessionStorage.setItem('login', 'ok');
                    sessionStorage.setItem('user_id', data.userId);
                    this.props.history.push(`/home`);
                }
            })
            .catch(console.log)
        this.clearState();
    };

    clearState(){
        this.setState({mail: null, password:null})
    }

    changeProperty = (e) => {
        let value = e.target.value;
        let property = e.target.name;
        this.setState({
            [property]: value
        });
    };

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={this.useStyles.paper}>
                    <Avatar className={this.useStyles.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {i18n.t('SignIn.label')}
                    </Typography>
                    <form className={this.useStyles.form}  noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="mail"
                            label={i18n.t('Mail.label')}
                            name="mail"
                            onChange={this.changeProperty}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={i18n.t("Password.label")}
                            type="password"
                            id="password"
                            onChange={this.changeProperty}
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label={i18n.t("RememberMe.label")}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.useStyles.submit}
                            onClick={this.goToHome}
                        >
                            {i18n.t('SignIn.label')}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    {i18n.t('ForgotPassword.label')}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link onClick={this.goToRegister}
                                      href="#" variant="body2">
                                    {i18n.t("DontHaveAccount.label")}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default SignIn;