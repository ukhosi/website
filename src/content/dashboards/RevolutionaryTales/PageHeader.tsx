import { Typography,  Grid } from '@mui/material';


function PageHeader() {

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          You've made it this far
        </Typography>
        <Typography variant="subtitle2">
          Now here's some wholesome tales of the revolution
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
