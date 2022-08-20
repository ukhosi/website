import { Container, Grid, Typography } from '@mui/material'
import React from 'react';
import story1 from '../../../assets/story/story1.jpg';
import story2 from '../../../assets/story/story2.jpg';

const FakeStory = () => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={2} display='flex' alignItems='center' justifyContent='center' sx={{marginBottom: '40px'}}>
          <Grid item lg={6} xs={12}>
            <img
              src={story1}
              alt='the real patriots'
              style={{ height: 'auto', width: '100%' }}
            />
          </Grid>
          <Grid item lg={6} xs={12} sx={{padding: '40px'}} >
            <Typography variant='h4' align='center' sx={{color: '#551b10'}}>
              Our Story
            </Typography>
            <Typography variant='subtitle1' align='center' sx={{color: '#333333'}}>
              From the dusty grounds and asphalt-tarred potholed urban roads, 
              we've converged with the unity of purpose and the sole goal of reminiscing the good old chikweshe. 
              As age, responsibilities, work and life no longer permit us to physically enjoy, 
              we've resorted to sneaking a little article every now and then to laugh it all out.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} display='flex' alignItems='center' justifyContent='center' >
          <Grid item lg={6} xs={12} sx={{padding: '40px'}} >
            <Typography variant='h4' align='center' sx={{color: '#551b10'}}>
              The Venerated Houses
            </Typography>
            <Typography variant='subtitle1' align='center' sx={{color: '#333333'}}>
              We have bruises, we have pains aching from past afflictions; and somehow we still hold the line.
              We still believe in the land between the Zambezi and the Limpopo. We believe it is prime above all. 
              We stand firmly and boldly stating that this is home! One day, everything will be alright!
            </Typography>
          </Grid>
          <Grid item lg={6} xs={12}>
            <img
              src={story2}
              alt='the real patriots'
              style={{ height: 'auto', maxWidth: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default FakeStory