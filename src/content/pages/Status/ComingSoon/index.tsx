import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);


function StatusComingSoon() {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center" mb={3}>
            <Container maxWidth="xs">
              <Typography variant="h1" sx={{ mt: 4, mb: 2 }}>
                Coming Soon
              </Typography>
            </Container>
          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default StatusComingSoon;
