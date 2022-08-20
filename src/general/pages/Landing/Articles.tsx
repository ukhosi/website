import { Button, Grid } from '@mui/material';
import React from 'react';
import TalesColumn from './TalesColumn';

const Articles = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item lg={8} xs={12}>
                    <Grid container spacing={1}>
                        <Grid item lg={4} xs={12}>
                            Article 1
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            Article 2
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            Article 3
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            Article 4
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            Article 5
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            Article 6
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <TalesColumn />
                </Grid>
                <Button>load more</Button>
            </Grid>
        </div>
    )
}

export default Articles