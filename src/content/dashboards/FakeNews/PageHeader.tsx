import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function PageHeader() {

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, Fellow Patriot!
        </Typography>
        <Typography variant="subtitle2">
          Today is a good day to be numbered among the patriots!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
