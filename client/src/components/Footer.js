import React from 'react'
import { Paper, Typography, Grid, Button, Container, Icon, InputBase } from '@material-ui/core'
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(10)
    },
    newsLetterbg: {
        padding: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        // color: 'red',s
        '&:hover': {
            // backgroundColor: fade(theme.palette.common.black, 0.9),
            cursor: 'pointer'
        },
    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        display: 'flex',
        flex: 4
    },
    buttonStyle: {
        flex: 2,
    },
    inputStyle: {
        width: '60vh',
        display: 'flex',
        marginTop: theme.spacing(7),
        justifyContent: 'space-between',
        borderBottomColor: '#dedede',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        padding: theme.spacing(0),
        [theme.breakpoints.down('md')]: {
            width: '40vh',
        }
    }
}))

export default function Footer() {
    const classes = useStyles()

    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    return (
        <div className={classes.root}>
            <Container className={classes.newsLetterbg}>
                <Typography variant="h6" style={{ fontWeight: '200' }}>SIGN UP FOR UPDATES</Typography>
                <div>
                    <br />
                    <Typography variant="subtitle2" style={{ fontWeight: '100' }}>
                        Sign up for exclusive early access and tailored new arrivals
                    </Typography>
                </div>
                <div>
                    <Container className={classes.inputStyle}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <Button>
                            JOIN
                        </Button>
                    </Container>
                </div>
            </Container>
            <Paper elevation={0}>
                <Grid container spacing={4}>
                    <Grid item className={classes.rowStyle} lg={3}>
                        <Typography>
                            CUSTOMER SERVICE
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            CONTACT
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            TRACK ORDER
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            MAKE A RETURN
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            PAYMENT
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            MAKE A RETURN
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            FAQ
                        </Typography>
                    </Grid>
                    <Grid item className={classes.rowStyle} lg={3}>
                        <Typography>
                            INFO
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            GIFT VOUCHERS
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            SIZE GUIDE
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            CAREERS AT FASHIONSTORE
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            ABOUT US
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            LEGAL POLICIES
                        </Typography>
                    </Grid>
                    <Grid item className={classes.rowStyle} lg={3}>
                        <Typography>
                            FOLLOW US
                        </Typography>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Icon className="fab fa-facebook-square" fontSize="small" />
                            <Typography variant="caption">FACEBOOK</Typography>
                        </div>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Icon className="fab fa-twitter-square" fontSize="small" />
                            <Typography variant="caption">TWITTER</Typography>
                        </div>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Icon className="fab fa-instagram" fontSize="small" />
                            <Typography variant="caption">INSTAGRAM</Typography>
                        </div>
                    </Grid>
                    <Grid item className={classes.rowStyle} lg={3}>
                        <Typography>
                            CONTACT US
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            admin@fashionpolice.com
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            08101614544
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.footerText}>
                            Visit us at a non-disclosed location,
                            <br />
                            Abuja, Nigeria
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
