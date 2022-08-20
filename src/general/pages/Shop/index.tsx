import { Typography, Box, Container} from '@mui/material';
import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
`
);

const Shop = () => {
    return (
        <>
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
    )
}

export default Shop

