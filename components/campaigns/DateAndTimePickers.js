import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function DateAndTimePickers({ setDate, setLabel }) {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label={setLabel}
                type="datetime-local"
                defaultValue="0000-00-24T00:00"
                //onChange set the date and time accordingly
                onChange={setDate}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}
