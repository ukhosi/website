import { Container, Grid, Typography } from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import patriotism from '../../../assets/values/patriotism.jpg';
import inclusion from '../../../assets/values/inclusion.jpg';
import compassion from '../../../assets/values/compassion.jpg';
import bantering from '../../../assets/values/bantering.jpg';

const Values = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Typography align='center' sx={{ color: '#551b10', fontSize: '2.7rem', fontWeight: 'bold' }}>
        Our Values
      </Typography>
      <Container maxWidth='lg' >
        <Grid container spacing={2} display='flex'>
          <Grid item lg={3} xs={12}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height="240"
                image={patriotism}
                alt="patriotism"
              />
              <CardContent>
                <Typography align='center' gutterBottom sx={{ color: '#551b10', fontSize: '1.3rem', fontWeight: 'bold' }} component="div">
                  Patriotism
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} xs={12}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height="240"
                image={inclusion}
                alt="inclusivity"
              />
              <CardContent>
                <Typography align='center' gutterBottom sx={{ color: '#551b10', fontSize: '1.3rem', fontWeight: 'bold' }} component="div">
                  Inclusivity
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} xs={12}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height="240"
                image={compassion}
                alt="compassion"
              />
              <CardContent>
                <Typography align='center' gutterBottom sx={{ color: '#551b10', fontSize: '1.3rem', fontWeight: 'bold' }} component="div">
                  Compassion
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3} xs={12}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardMedia
                component="img"
                height="240"
                image={bantering}
                alt="bantering"
              />
              <CardContent>
                <Typography align='center' gutterBottom sx={{ color: '#551b10', fontSize: '1.3rem', fontWeight: 'bold' }} component="div">
                  Bantering
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}

export default Values


