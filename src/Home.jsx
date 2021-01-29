import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core'
import Grow from '@material-ui/core/Grow';
//import Cake from './cake.gif'
import Cake from './Cake.jsx'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        fontFamily:  `url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap')`
    }
  });

const Home = () => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <div>
            <Grid container alignItems="center">
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        <Grid item >
                            <Grow in={true}>
                                <Typography variant="h1" className={classes.text}>Happy</Typography>
                            </Grow>
                        </Grid>
                        <Grid item >
                            <Grow in={true}>
                                <Typography variant="h1">Birthday</Typography>
                            </Grow>
                        </Grid>
                        <Grid item >
                            <Grow in={true}>
                                <Typography variant="h1">Mama <Button size='large' disableRipple={true} onClick={() => history.push('/Tough')}>❤️</Button></Typography>
                            </Grow>
                        </Grid>
                        <Grid item>
                            <Typography>(Hint: click on the heart)</Typography>
                        </Grid>

                        
                            
                    </Grid>
                </Grid>
                <Grid item>
                                <Cake />
                            
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Home;