import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import hardfacts from '../../../assets/reporters/hardfacts.png';
import rajesh from '../../../assets/reporters/rajesh.png';
import nahlupheko from '../../../assets/reporters/nahlupheko.png';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Reporters = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <Container maxWidth='lg' sx={{alignItems: 'center', justifyContent:'center'}}>
        <Typography align='center' sx={{ color: '#551b10', fontSize: '2.7rem', fontWeight: 'bold' }}>
          Our Team
        </Typography>

        <Grid container spacing={3} alignItems='center' justifyContent='center' sx={{ marginTop: '15px' }}>
          <Grid item lg={4} xs={12}>
            <Card sx={{ maxWidth: '100%'}}>
              <CardMedia
                component='img'
                height='340'
                image={rajesh}
                alt='Bra Rajesh'
              />
              <CardHeader
                title='Bra Rajesh'
                subheader='The Chief Patriot'
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Bra Rajesh is a hustler par excellence. He is doing the best that he can to get by. 
                    Having seen his uncle Ibrahim run a business displaying buttons and needles at the front (downtown of the city),
                    while doing other things in the back, Bra developed the same model for this great work now
                    known to all as PatriotiZim. Please support. 
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card sx={{ maxWidth:'100%' }}>
              <CardMedia
                component='img'
                height='340'
                image={nahlupheko}
                alt='NaHlupheko'
              />
              <CardHeader
                title='NaHlupheko'
                subheader='The Noble Villager'
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded2}
                  onClick={handleExpandClick2}
                  aria-expanded={expanded2}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded2} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    NaHlupheko is trying the best that she can to ensure that Hlue has it better than her. 
                    Her first hand presence during the vast atrocious moments in the country's past left
                    numerous scars on her body and more importantly her mind. She does not rest and keeps
                    hoping, praying and working towards a brighter future.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card sx={{ maxWidth:'100%' }}>
              <CardMedia
                component='img'
                height='340'
                image={hardfacts}
                alt='Mukoma Hardfacts'
              />
              <CardHeader
                title='Dr. Hardfacts Masasi'
                subheader='Zwitter Opinion Expert'
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded1}
                  onClick={handleExpandClick1}
                  aria-expanded={expanded1}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded1} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Dr Hardfacts is a never-employed university graduate. He doubles as a hustler as well as a valuable commentator on the Twitter streets. He has a Masters in 
                    Statistics from the Great Africa Bet University, an MBA from the Ximex Business School and an honorary
                    doctorate of philosophy from the Mbare University of Life. 
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Reporters






