import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import i18n from "../i18n";

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
                <InputLabel htmlFor="age-native-simple">{i18n.t('Language.label')}</InputLabel>
                <Select
                    native
                    value={lang}
                    onChange={handleChange}
                >
                    <option value={"es"}>{i18n.t('Spanish.label')}</option>
                    <option value={"en"}>{i18n.t('English.label')}</option>
                </Select>
            </FormControl>
        </div>
    );
}

export default LangSelection
