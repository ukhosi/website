import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../assets/banner/banner.jpg';

const Tales = () => {
  return (
    <div style={{ marginBottom: '60px' }}>
      <Container maxWidth='lg'>
        <img
          src={banner}
          width='100%'
          alt='banner'
        />
        <br />
        <Typography align='right' gutterBottom sx={{ fontSize: '2.3rem', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '0px' }}>
          The Modern Sarungano
        </Typography>
        <Typography align='right' variant='subtitle2' gutterBottom sx={{ fontStyle: 'italic'}}>
          moderated by NaHlupheko
        </Typography>
        
        <Typography variant='h4' align='center' sx={{marginTop: '30px'}}>
            Revolutionary Tales Collections
          </Typography>
        <Grid container spacing={3}>
         
        </Grid>
      </Container>
    </div>
  )
}

export default Tales