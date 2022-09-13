import React from 'react';
import { Box, Container, Divider, Grid, Typography, TextField, Button, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { FacebookOutlined, Twitter, YouTube } from '@mui/icons-material';
import Logo from '../../../assets/logo/logo.png';
import Zanu from '../../../assets/sources/zanu.png';
import Ccc from '../../../assets/sources/ccc.png';
import Parlzim from '../../../assets/sources/parlzim.png';
import Zec from '../../../assets/sources/zec.png';




const Footer = () => {
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
              <Divider sx={{ marginBottom: '15px' }}>
                <Typography align='center' sx={{ color: '#fff5f1'}}> Connect with Us</Typography>
              </Divider>
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
                    <a style={{ color: '#fff' }} target='_blank' rel='noreferrer' href='https://rusero.co.zw'>
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
              <form >
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
                      fullWidth required
                      inputProps={{
                        style: {
                          color: '#fff',
                        }
                      }}
                      InputLabelProps={{
                        style: {
                          color: '#fff5f1',
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#fff',
                          borderWidth: '1px'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type='email'
                      placeholder='Enter email'
                      label='Email'
                      name='email'
                      variant='outlined'
                      fullWidth required
                      inputProps={{
                        style: {
                          color: '#fff',
                        }
                      }}
                      InputLabelProps={{
                        style: {
                          color: '#fff5f1',
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#fff',
                          borderWidth: '1px'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label='Message'
                      multiline rows={2}
                      placeholder='Type your message here'
                      name='message'
                      variant='outlined'
                      fullWidth required
                      inputProps={{
                        style: {
                          color: '#fff',
                        }
                      }}
                      InputLabelProps={{
                        style: {
                          color: '#fff5f1',
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#fff',
                          borderWidth: '1px'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box textAlign='center'>
                      <Button type='submit'
                        variant='contained'
                        style={{
                          backgroundColor: '#551b10',
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
                <Divider sx={{ marginBottom: '15px', marginTop: '9px' }}>
                  <Typography align='center' sx={{ color: '#fff5f1', fontWeight: 'bold' }}> Quick Links</Typography>
                </Divider>
                <Grid item>
                  <Link to='/about' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                    <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#d2b48c' } }}>
                      About Us
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/tales' style={{ textDecoration: 'none' }}>
                    <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#d2b48c' } }}>
                      Revolutionary Tales
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/shop' style={{ textDecoration: 'none' }}>
                    <Typography variant='subtitle1' sx={{ color: '#fff5f1', textAlign: 'center', ':hover': { fontSize: '18px', color: '#d2b48c' } }}>
                      The Patriots' Shop
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
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
                <Divider sx={{ marginBottom: '25px' }}>
                  <Typography align='center' sx={{ color: '#fff5f1', fontWeight: 'bold' }}> Our Biggest Content Sources</Typography>
                </Divider>
              </Grid>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Grid item xs={6} sm={6}>
                  <a target='_blank' rel='noreferrer' href='https://www.zanupf.org.zw/' >
                    <Card sx={{ height: '70px', display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                      <CardMedia
                        sx={{ objectFit: 'contain' }}
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
                    <Card sx={{ height: '70px', display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                      <CardMedia
                        sx={{ objectFit: 'contain' }}
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
                    <Card sx={{ height: '70px', display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                      <CardMedia
                        sx={{ objectFit: 'contain' }}
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
                    <Card sx={{ height: '70px', display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                      <CardMedia
                        sx={{ objectFit: 'contain' }}
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
          <Grid container spacing={3} direction='row' alignItems='center' justifyContent='center'  >
            <Grid item lg={6} md={6} sm={12} xs={12} >
              <Typography variant='subtitle2' sx={{ color: '#333333' }}>
                The Venerated Houses © {new Date().getFullYear()}. All right reserved.  <a style={{ color: '#333333' }} target='_blank' rel='noreferrer' href='https://rusero.co.zw'>SiDesigned</a>
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} display='flex' flexDirection='row-reverse'>
              Zimbabwe2
            </Grid>
          </Grid>
        </Container>
        <br />
      </div>
    </>
  )
}

export default Footer