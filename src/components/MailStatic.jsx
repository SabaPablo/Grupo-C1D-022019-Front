import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {useAuth0} from "../react-auth0-spa";

const MailStatic = (props) => {
    const {  user } = useAuth0();
    props.addMail(user.email);
    return(
    <Grid item xs={12}>
        <TextField
            disabled
            id="mail"
            name="mail"
            label="Mail"
            fullWidth
            autoComplete="email"
            value={user.email}
            noValidate
        />
    </Grid>
    );
};

export default MailStatic;