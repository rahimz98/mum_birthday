import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Page2 = () => {
    const history = useHistory();
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container alignItems='center' justify="center">
                        <Grid item>
                            <Typography variant="h3" align="center">
                                Last year was pretty Tough on all of us. Not a single day goes by I don't think about you.
                                I Know I am not that active on the group chat I do really feel bad about that. I just personally find it difficult.
                                But......
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant='outlined' onClick={() => history.push('/Love')}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Page2;