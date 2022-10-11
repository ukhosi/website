import { Container, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import React from 'react'
import sidesigned from '../../../assets/compatriots/sidesigned.png';

const Compatriots = () => {
    return (
        <div style={{ marginTop: '80px', marginBottom: '20px' }}>
            <Container maxWidth='lg'>
                <Typography align='center' sx={{ color: '#551b10', fontSize: '2.7rem', fontWeight: 'bold' }}>
                    Our Great Compatriots
                </Typography>
                <Container maxWidth='md'>
                    <Typography variant='subtitle1' align='center'>
                        We take pride in our great partnership with these wonderful compatriots.
                        They have our complete, and total endorsement!
                    </Typography>
                </Container>
            </Container>
            <Container maxWidth='lg'>
                <Grid container spacing={2} justifyContent='space-evenly' sx={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Grid item xs={12} lg={6}>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="200"
                                image={sidesigned}
                            />
                            <CardContent>
                                <Typography align='center' gutterBottom variant="h5" component="div">
                                    SiDesigned
                                </Typography>
                                <Typography variant="body2" align='center' color="text.secondary">
                                    Our tech partners. Web and software designers,
                                    experts in tech consultancy.
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <a style={{ color: '#fff' }} target='_blank' rel='noreferrer' href='https://munashe.co.zw'>
                                    <Button size="small" sx={{ color: '#551b10' }}>visit website</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <br />
        </div>
    )
}

export default Compatriots

