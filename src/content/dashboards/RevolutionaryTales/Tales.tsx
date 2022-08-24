import React from 'react';
import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  styled
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';

import { db } from 'src/config/firebaseConfig';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    height: ${theme.spacing(6)};
    width: ${theme.spacing(6)};
    background: ${theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(5)};
      width: ${theme.spacing(5)};
    }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

function Tales() {
  const [talesCollections, setTalesCollections] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "TalesCollection"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let talesCollectionArray = [];
      querySnapshot.forEach((doc) => {
        talesCollectionArray.push({ ...doc.data(), id: doc.id });
      });
      setTalesCollections(talesCollectionArray);
    });

    return () => unsub();
  }, []);


  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">Tales Collections</Typography>
        <Link to='/mambo/blogger/tales' style={{ textDecoration: 'none' }}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Add new Collection
          </Button>
        </Link>
      </Box>
      <Grid container spacing={3}>
        {talesCollections.map((talesCollection) => (
          <Grid xs={12} sm={6} md={4} item key={talesCollection.id}>
            <Card
              sx={{
                px: 1
              }}
            >
              <CardContent>
                <AvatarWrapper>
                  <img
                    alt={talesCollection.title}
                    src={talesCollection.imageUrl}
                  />
                </AvatarWrapper>
                <Typography variant="h5" noWrap>
                  {talesCollection.title}
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  {talesCollection.abstract}
                </Typography>
                <Box
                  sx={{
                    pt: 3
                  }}
                >
                  <Typography variant="subtitle2" noWrap>
                    1.25843 BTC
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid xs={12} sm={6} md={4} item>
          <Link to='/mambo/blogger/tales' style={{ textDecoration: 'none' }}>
            <Tooltip arrow title="Click to add a new collection">
              <CardAddAction>
                <CardActionArea
                  sx={{
                    px: 1
                  }}
                >
                  <CardContent>
                    <AvatarAddWrapper>
                      <AddTwoToneIcon fontSize="large" />
                    </AvatarAddWrapper>
                  </CardContent>
                </CardActionArea>
              </CardAddAction>
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default Tales;
