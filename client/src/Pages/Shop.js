import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: 'green'
    }
}))

export default function Shop() {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.root}>
                <Grid container>
                    <Grid item lg={4}>
                        hello
                    </Grid>
                    <Grid item lg={8}>
                        <Paper>
                            <Typography>hello</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    )
}
