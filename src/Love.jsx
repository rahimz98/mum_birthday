import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Zille from './IMG_7647.PNG'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    media: {
        height: 500,
      },
  });


const Love = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container >
                <Grid item xs={12}>
                    <Grid container alignItems='center' justify="center">
                        <Grid item>
                            <Typography variant="h3" align="center">
                                I Love you soooo much AND I can not wait to hug you again
                            </Typography>
                            <Grid item container justify="flex-end">
                                <Typography >
                                    -From Zille
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Card>
                                    <CardMedia 
                                        className={classes.media}
                                        image = {Zille}
                                    />
                                </Card>
                            </Grid>
                            <Grid item >
                                <Typography>Wendy also says Happy Birthday</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Love;