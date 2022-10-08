import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from 'src/config/firebaseConfig';
import { FacebookOutlined, Twitter, YouTube } from '@mui/icons-material';
import Logo from '../../../assets/logo/logo.png';
import Zanu from '../../../assets/sources/zanu.png';
import Ccc from '../../../assets/sources/ccc.png';
import Parlzim from '../../../assets/sources/parlzim.png';
import Zec from '../../../assets/sources/zec.png';





const Footer = () => {
  const [loader, setLoader] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    await addDoc(collection(db, 'Messages'), {
      createdAt: new Date(),
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        setLoader(false);
        alert('Submission successful, we will get back to you');
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName('');
    setEmail('');
    setMessage('');
  };



  return (
    <>
      <div style={{ backgroundColor: '#e76b50' }}>
        <Container >
          <Grid container spacing={3} justifyContent='center' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Link to='/'>
                <img
                  src={Logo}
                  width='250px'
                  alt='logo'
                />
              </Link>
              <Typography variant='subtitle1' sx={{ color: '#fff5f1', fontStyle: 'italic', textAlign: 'center', marginBottom: '15px' }}>
                Connect With Us
              </Typography>
              <Box>
                <Grid container spacing={1} direction='row' justifyContent='center' display='flex'>
                  <Grid item flex={1}>
                    <a style={{ color: '#fff' }} target='_blank' rel='noreferrer' href='https://facebook.com/patriotizim'>
                      <FacebookOutlined
                        sx={{
                          textAlign: 'center',
                          display: 'flex',
                          color: '#fff5f1',
                          fontSize: '50px',
                          ':hover': {
                            color: '#4267B2',
                            fontSize: '60px'
                          }
                        }}
                      />
                    </a>
                  </Grid>
                  <Grid item flex={1}>
                    <a style={{ color: '#fff' }} target='_blank' rel='noreferrer' href='https://twitter.com/patriotizim'>
                      <Twitter
                        sx={{
                          textAlign: 'center',
                          display: 'flex',
                          color: '#fff5f1',
                          fontSize: '50px',
                          ':hover': {
                            color: '#00c6ff',
                            fontSize: '60px'
                          }
                        }}
                      />
                    </a>
                  </Grid>
                  <Grid item flex={1}>
                    <a style={{ color: '#fff' }} target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCpsxK9qqm96XU5sTmYRHjhA'>
                      <YouTube
                        sx={{
                          textAlign: 'center',
                          display: 'flex',
                          color: '#fff5f1',
                          fontSize: '50px',
                          ':hover': {
                            color: '#FF0000',
                            fontSize: '60px'
                          }
                        }}
                      />
                    </a>
                  </Grid>
                </Grid>


              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} >
              <form onSubmit={handleSubmit}>
                <Typography variant='subtitle1' sx={{ color: '#fff5f1', fontStyle: 'italic', textAlign: 'center' }}>
                  Reach Out to Us
                </Typography>
                <Grid container spacing={0.5} style={{ backgroundColor: 'transparent', paddingTop: '0px' }}>
                  <Grid xs={12} sm={12} item>
                    <TextField
                      placeholder='Name'
                      label='Name'
                      name='name'
                      variant='outlined'
                      inputProps={{ style: { color: '#fff' } }}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth required

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='email'
                      placeholder='Enter email'
                      label='Email'
                      name='email'
                      variant='outlined'
                      inputProps={{ style: { color: '#fff' } }}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label='Message'
                      multiline rows={2}
                      placeholder='Type your message here'
                      name='message'
                      variant='outlined'
                      inputProps={{ style: { color: '#fff' } }}
                      onChange={(e) => setMessage(e.target.value)}
                      fullWidth required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box textAlign='center'>
                      <Button type='submit'
                        variant='contained'
                        style={{
                          backgroundColor: loader ? '#f36a11' : '#551b10',
                          color: '#e1e1e1',
                          fontSize: '14px',
                          borderRadius: 10,
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Grid container display='flex' spacing={1} direction='column'>
                <Typography variant='subtitle1' sx={{ color: '#fff5f1', fontStyle: 'italic', textAlign: 'center', marginTop: '7.5px' }}>
                  Quick Links
                </Typography>
                <Grid item sx={{ height: '30px' }}>
                  <Link to='/about' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                    <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#d2b48c' } }}>
                      About Us
                    </Typography>
                  </Link>
                </Grid>
                <Grid item sx={{ height: '30px' }}>
                  <Link to='/tales' style={{ textDecoration: 'none' }}>
                    <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#d2b48c' } }}>
                      Revolutionary Tales
                    </Typography>
                  </Link>
                </Grid>
                <Grid item sx={{ height: '30px' }}>
                  <Link to='/shop' style={{ textDecoration: 'none' }}>
                    <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#d2b48c' } }}>
                      The Patriots' Shop
                    </Typography>
                  </Link>
                </Grid>
                <Grid item sx={{ height: '30px' }}>
                  <Link to='/compatriots' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                    <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#d2b48c' } }}>
                      Our Compatriots
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Grid item xs={12} sm={12}>
                <Typography variant='subtitle1' sx={{ color: '#fff5f1', fontStyle: 'italic', textAlign: 'center', marginBottom: '15px' }}>
                  Our Biggest Content Sources
                </Typography>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Grid item xs={6} sm={6}>
                  <a target='_blank' rel='noreferrer' href='https://www.zanupf.org.zw/' >
                    <Card sx={{ height: '75px', display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                      <CardMedia
                        sx={{ objectFit: 'contain', ':hover': { height: '75px' } }}
                        height='70px'
                        component='img'
                        image={Zanu}
                        alt='zanu'
                      />
                    </Card>
                  </a>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <a target='_blank' rel='noreferrer' href='https://ccczimbabwe.com/'>
                    <Card sx={{ height: '75px', display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                      <CardMedia
                        sx={{ objectFit: 'contain', ':hover': { height: '75px' } }}
                        height='70px'
                        component='img'
                        image={Ccc}
                        alt='ccc'
                      />
                    </Card>
                  </a>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <a target='_blank' rel='noreferrer' href='https://parlzim.gov.zw/'>
                    <Card sx={{ height: '75px', display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                      <CardMedia
                        sx={{ objectFit: 'contain', ':hover': { height: '75px' } }}
                        height='70px'
                        component='img'
                        image={Parlzim}
                        alt='parliament of Zim'
                      />
                    </Card>
                  </a>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <a target='_blank' rel='noreferrer' href='https://www.zec.org.zw/'>
                    <Card sx={{ height: '75px', display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                      <CardMedia
                        sx={{ objectFit: 'contain', ':hover': { height: '75px' } }}
                        height='70px'
                        component='img'
                        image={Zec}
                        alt='zec'
                      />
                    </Card>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <br />
        </Container>
      </div >
      <div style={{ backgroundColor: '#d3d3d3' }}>
        <Container >
          <Typography align='center' variant='subtitle2' sx={{ color: '#333333', paddingTop: '10px' }}>
            The Venerated Houses © {new Date().getFullYear()}. All rights reserved.  <a style={{ color: '#333333' }} target='_blank' rel='noreferrer' href='https://munashe.co.zw'>SiDesigned</a>
          </Typography>
        </Container>
        <br />
      </div>
    </>
  )
}

export default Footer