import { Grid } from '@mui/material'
import React from 'react'

const Trending = () => {
    return (
        <div>
            <Grid container spacing={3} sx={{marginBottom: '20px'}}>
                <Grid item lg={9} xs={12}>
                    Banner Article
                </Grid>
                <Grid item lg={3} >
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            Most recent Article
                        </Grid>
                        <Grid item xs={12}>
                            2nd recent Article
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Trending