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
    }

    goToHome= () =>{
    this.props.history.push(`/home`);
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
                            id="email"
                            label={i18n.t('Mail.label')}
                            name="email"
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
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label={i18n.t("RememberMe.label")}
                        />
                        <Button
                            type="submit"
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