import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useTranslation} from "react-i18next";


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const LangSelection = () => {
    const classes = useStyles();

    const { t, i18n } = useTranslation();
    const [lang, setLang] = React.useState("ES");

    const handleChange = (e) => {
        setLang(e.target.value);
        i18n.changeLanguage(e.target.value,console.log)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">{t('Language.label')}</InputLabel>
                <Select
                    native
                    value={lang}
                    onChange={handleChange}
                >
                    <option value={"es"}>{t('Spanish.label')}</option>
                    <option value={"en"}>{t('English.label')}</option>
                </Select>
            </FormControl>
        </div>
    );
}

export default LangSelection
