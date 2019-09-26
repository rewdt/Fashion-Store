import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import indigo from '@material-ui/core/colors/indigo';
import { Paper, TextField, FormControlLabel, Checkbox, Typography, Button, Link } from '@material-ui/core'

const GreenCheckbox = withStyles({
    root: {
        color: 'black',
        '&$checked': {
            color: 'black',
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        backgroundColor: '#dedede',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        backgroundColor: '#ffff',
        height: '80%',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: theme.spacing(5),
        [theme.breakpoints.up('md')]: {
            width: '35%',
        },
    },
    textField: {
        width: '100%',
    },
    signupButton: {
        backgroundColor: '#000',
        color: '#fff',
        width: '60%',
        padding: theme.spacing(1.5, 0)
    }
}))

const Register = () => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.root}>
                <Paper className={classes.inputContainer}>
                    <div>
                        <Typography variant="h5" style={{ textAlign: 'center', fontWeight: '300' }}>
                            Create Account
                        </Typography>
                    </div>
                    <div>
                        <TextField
                            id="filled-dense-multiline"
                            label="First Name"
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            variant="standard"
                            multiline
                            rowsMax="4"
                        />
                        <TextField
                            id="filled-dense-multiline"
                            label="Last Name"
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            variant="standard"
                            multiline
                            rowsMax="4"
                        />
                        <TextField
                            id="filled-dense-multiline"
                            label="Email"
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            variant="standard"
                            multiline
                            rowsMax="4"
                        />
                        <TextField
                            id="filled-dense-multiline"
                            label="Password"
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            variant="standard"
                            multiline
                            rowsMax="4"
                        />
                        <FormControlLabel
                            control={
                                <GreenCheckbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                />
                            }
                            label={<Typography variant="caption">
                                Let's get personal!! We'll send you only the good stuff:
                                <br />
                                Exclusive early access to Sale, new arrivals and promotions. No nasties
                            </Typography>}
                        />
                    </div>
                    <div>
                        <Typography>By signing up you agree to <Link>Terms of Service</Link> and <Link>Privacy Policy</Link></Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" size="large" className={classes.signupButton}>
                            SIGN UP
                        </Button>
                    </div>
                    <div>
                        <Link>I HAVE AN ACCOUNT</Link>
                    </div>
                </Paper>
            </Paper>
        </div>
    )
}

export default Register
