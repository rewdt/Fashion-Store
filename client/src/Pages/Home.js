import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Blouse from '../assets/adult_beutiful.jpg'
import BlackFriday from '../assets/black_friday.jpg'
import Apparel from '../assets/apparel.jpg'
import BrandCard from '../assets/brand_card.jpg'
import FineHairGuy from '../assets/fine_hair_guy.jpg'
import FineRobust from '../assets/fine_robust.jpeg'
import { Button, Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        height: '100vh',
        backgroundImage: `url(${Blouse})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 0,
        display: 'flex',
        alignItems: 'flex-end'
    },
    firstRoot: {
        // backgroundColor: 'red',
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(5)
        },
        marginLeft: theme.spacing(15),
        marginBottom: theme.spacing(15)
    },
    secondRoot: {
        height: '100vh',
        // backgroundColor: '#3366ff',
        backgroundImage: `url(${BlackFriday})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'luminosity',
        display: 'flex',
        alignItems: 'center',
        marginTop: 0,
    },
    thirdRoot: {
        height: '100vh',
        // backgroundColor: '#3366ff',
        backgroundImage: `url(${FineRobust})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // backgroundBlendMode: 'luminosity',
        display: 'flex',
        alignItems: 'center',
        marginTop: 0,
    },
    fourthRoot: {
        height: '90vh',
        backgroundColor: '#e5e5e5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: theme.spacing(0, 10)
    },
    fifthRoot: {
        height: '100vh',
        backgroundColor: '#99cb7b',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    sixthRoot: {
        backgroundColor: 'pink',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    textColor: {
        color: '#fff'
    },
    secondContent: {
        marginLeft: theme.spacing(15),
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(5)
        },
    },
    contentTitle: {
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            fontWeight: 'bold'
        },
        color: '#fff'
    },
    buttonStyle: {
        borderColor: '#fff',
        color: '#fff',
        padding: theme.spacing(2, 10)
    },
    gridItem1: {
        backgroundImage: `url(${Apparel})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    gridItem2: {
        backgroundImage: `url(${BrandCard})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    gridItem3: {
        backgroundImage: `url(${FineHairGuy})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    arrival1: {
        backgroundColor: '#dedede'
    },
    arrival2: {
        backgroundColor: '#fefefe'
    },
    arrival3: {
        backgroundColor: '#fb0201'
    },
    arrival4: {
        backgroundColor: '#dfdfdf'
    },
    fifthRootContent: {
        // backgroundColor: 'purple',
        height: '40vh',
        padding: theme.spacing(0, 2)
    },
    finItem1: {
        backgroundColor: '#edea33',
        flex: 1,
    },
    finItem2: {
        flex: 7,
        backgroundColor: '#fdea33'
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <div className={classes.firstRoot}>
                    <Typography variant="h3" className={classes.contentTitle}>
                        NEW COLLECTION
                    </Typography>
                    <br />
                    <Typography className={classes.textColor}>
                        Our easiest chuck-op-and-go staples come with a serious style heritage
                        <br />
                        that's liberating, sexy, comfy and supremely cool
                    </Typography>
                    <br />
                    <Button variant="outlined" size="large" className={classes.buttonStyle}>
                        SHOP NEW ARRIVALS
                    </Button>
                </div>
            </Paper>
            <Paper className={classes.secondRoot}>
                <div className={classes.secondContent}>
                    <Typography className={classes.contentTitle} variant="h3">
                        VINTAGE INSPIRED
                    </Typography>
                    <br />
                    <Typography className={classes.textColor}>
                        Inspired by the '70s and 80's we know that if you sit through
                        <br />
                        our vintage inspired collection you're gonna rock the perfect silhouette
                    </Typography>
                    <br />
                    <Button variant="outlined" size="large" className={classes.buttonStyle}>
                        SHOP NOW
                    </Button>
                </div>
            </Paper>
            <Paper style={{ height: '100vh', backgroundColor: '#3366ff' }}>
                <Grid container wrap="wrap" style={{ height: '100vh' }} >
                    <Grid item lg={4} md={4} sm={12} xs={12} className={classes.gridItem1}>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12} className={classes.gridItem2}>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12} className={classes.gridItem3}>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.thirdRoot}>
                <div className={classes.secondContent}>
                    <Typography className={classes.contentTitle} variant="h3">
                        SUSTAINABLE DENIM
                    </Typography>
                    <br />
                    <Typography className={classes.textColor}>
                        What started as a true '80s pair of jeans,
                        <br />
                        finished as a re-energised, wider leg vintage jean with versatile detailing
                    </Typography>
                    <br />
                    <Button variant="outlined" size="large" className={classes.buttonStyle}>
                        SHOP DENIM
                    </Button>
                </div>
            </Paper>
            <Paper className={classes.fourthRoot}>
                <div style={{ alignSelf: 'flex-start' }}>
                    <Typography style={{ textAlign: 'left' }}>
                        NEW ARRIVALS
                    </Typography>
                </div>
                <Grid container style={{ height: '80%' }}>
                    <Grid item lg={3} md={6} sm={6} xs={12} className={classes.arrival1}>
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12} className={classes.arrival2}>
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12} className={classes.arrival3}>
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12} className={classes.arrival2}>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.fifthRoot} square={true} elevation={0}>
                <div className={classes.fifthRootContent}>
                    <Typography className={classes.contentTitle} variant="h3">
                        SUSTAINABLE DENIM
                    </Typography>
                    <br />
                    <Typography className={classes.textColor}>
                        What started as a true '80s pair of jeans,
                        <br />
                        finished as a re-energised, wider leg vintage jean with versatile detailing
                    </Typography>
                    <br />
                    <Button variant="outlined" size="large" className={classes.buttonStyle}>
                        SHOP DENIM
                    </Button>
                </div>
            </Paper>
            <div>
                <Paper className={classes.sixthRoot} square={true} elevation={0}>
                    <Container className={classes.finItem1}>
                        <Typography>SHOP INSTAGRAM</Typography>
                    </Container>
                    <Container className={classes.finItem2}>
                        <Typography>SHOP INSTAGRAM</Typography>
                    </Container>
                </Paper>
                <Container className={classes.finItem1}>
                    <Typography>SHOP INSTAGRAM</Typography>
                </Container>
            </div>
        </div>
    );
}