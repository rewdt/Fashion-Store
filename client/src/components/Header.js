import React from 'react'
import { AppBar, Typography, Toolbar, Button, IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
    },
    appbar: {
        backgroundColor: 'transparent',
    },
    menuButton: {
        alignSelf: 'flex-end'
        // marginLeft: theme.spacing()
    },
    titlePosition: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        flexGrow: 1,
        alignItems: 'center',
        paddingLeft: theme.spacing(10)
    },
    titleStyle: {
        fontWeight: 'bold'
    },
    leftPosition: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    menuLogo: {
        [theme.breakpoints.only('lg')]: {
            display: 'none'
        },
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="absolute" elevation={0} className={classes.appbar}>
                <Toolbar className={classes.root}>
                    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'row', flexWrap: 'nowrap' }}>
                        <Button>
                            <Typography noWrap variant="caption">
                                NEW ARRIVALS
                            </Typography>
                        </Button>
                        <Button>
                            <Typography noWrap variant="caption">
                                SHOP
                            </Typography>
                        </Button>
                        <Button>
                            <Typography noWrap variant="caption">
                                COLLECTIONS
                            </Typography>
                        </Button>
                    </div>
                    <div className={classes.titlePosition}>
                        <Typography variant="h4" className={classes.titleStyle}>
                            FASHION STORE
                        </Typography>
                    </div>
                    <div className={classes.leftPosition}>
                        <Button>
                            <Typography noWrap variant="caption">
                                SEARCH
                            </Typography>
                        </Button>
                        <Button>
                            <Typography noWrap variant="caption">
                                SIGN IN
                            </Typography>
                        </Button>
                        <Button>
                            <Typography noWrap variant="caption">
                                BAG(2)
                            </Typography>
                        </Button>
                        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                            <FavoriteBorder />
                        </IconButton>
                    </div>
                    <div className={classes.menuLogo}>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar >
        </div >
    )
}
