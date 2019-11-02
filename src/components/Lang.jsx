import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const LangSelection = (langEv) => {
    const classes = useStyles();


    const [lang, setLang] = React.useState("ES");

    const handleChange = (e) => {
        setLang(e.target.value);
        langEv(lang)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Idioma</InputLabel>
                <Select
                    native
                    value={lang}
                    onChange={handleChange}
                >
                    <option value={"es"}>ESPAÑOL</option>
                    <option value={"en"}>INGLES</option>
                </Select>
            </FormControl>
        </div>
    );
}

export default LangSelection