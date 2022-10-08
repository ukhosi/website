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
  styled
} from '@mui/material';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc,
  limit,
  DocumentData,
  getDocs,
  QuerySnapshot,
  startAfter,
  Unsubscribe,
} from 'firebase/firestore';
import { db } from 'src/config/firebaseConfig';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Link } from 'react-router-dom';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 10px;
    height: ${theme.spacing(11.5)};
    width: ${theme.spacing(17.5)};
    background: ${theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(10.5)};
      width: ${theme.spacing(15.5)};
    }
`
);


const articleSize = 4;

function getFirstArticlesBatch(
  snapshotCallback: (querySnapshot: QuerySnapshot<DocumentData>) => void
): Unsubscribe {
  const q = query(
    collection(db, "Articles"),
    orderBy("createdAt", "desc"),
    limit(articleSize)
  );

  return onSnapshot(q, snapshotCallback);
}

/**
 * this function will be fired each time the user click on 'More Posts' button,
 * it receive key of last post in previous batch, then fetch next posts
 * starting after last fetched post.
 */
async function articlesNextBatch(lastDocument: any) {
  const next = query(
    collection(db, "Articles"),
    orderBy("createdAt", "desc"),
    startAfter(lastDocument),
    limit(articleSize)
  );

  const articles: any[] = [];

  const documentSnapshots = await getDocs(next);

  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

  documentSnapshots.forEach((doc) => {
    articles.push({ id: doc.id, ...doc.data() });
  });

  return { articles, lastVisible };
}

function Articles() {
  const [articles, setArticles] = React.useState([]);

  const [data, setData] = React.useState<any[]>([]);
  /**
   * Mitigate callback closure stale state reference
   * https://css-tricks.com/dealing-with-stale-props-and-states-in-reacts-functional-components/
   * */
  const dataRef = React.useRef(data);
  const [lastDocument, setLastDocument] = React.useState<any>(null);
  const [fetchingData, setFetchingData] = React.useState(true);

  function updateData(newData: any) {
    dataRef.current = newData;
    setData(newData);
  }


  React.useEffect(() => {
    const unsub = getFirstArticlesBatch((querySnapshot) => {
      const posts: any[] = [];
      querySnapshot.docChanges().forEach(({ type, doc }) => {
        /**
         * All posts are of type 'added' when being fetched for the first time
         *    After initial fetch this callback function is triggered when new post is created
         *    This time only newly created post will be of type added
         *    Previously fetched posts will be of type removed
         **/
        if (type === "added") posts.push({ id: doc.id, ...doc.data() });
      });

      /**
       * If posts is fetched for the very first time
       *    Then set current last document as lastDocument for pagination
       *    See: https://firebase.google.com/docs/firestore/query-data/query-cursors#paginate_a_query
       * */
      if (dataRef.current.length === 0)
        setLastDocument(
          querySnapshot.docChanges()[querySnapshot.docChanges().length - 1].doc
        );
      setFetchingData(false);
      updateData([...posts, ...dataRef.current]);
    });

    return () => {
      unsub();
    };
  }, []);

  async function nextDocuments() {
    if (!lastDocument) return;
    setFetchingData(true);
    const { articles, lastVisible } = await articlesNextBatch(lastDocument);

    setLastDocument(lastVisible);
    setFetchingData(false);
    updateData([...data, ...articles]);
  }

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "Articles", id));
  };


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
        <Typography variant="h3">Articles</Typography>
        <Link to='/mambo/blogger/fake-news' style={{ textDecoration: 'none' }}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Add new Article
          </Button>
        </Link>
      </Box>
      <Grid container spacing={3}>
        {data.map((article) => (
          <Grid xs={12} sm={6} md={3} item key={article.id}>
            <Card
              sx={{
                px: 1
              }}
            >
              <CardContent>
                <AvatarWrapper>
                  <img
                    alt={article.title}
                    src={article.imageUrl}
                  />
                </AvatarWrapper>
                <Box
                  sx={{
                    pt: 3
                  }}
                >
                  <Typography variant="h4" gutterBottom noWrap>
                    {article.title}
                  </Typography>
                  <Box textAlign='center'>
                    <Button
                      variant='contained'
                      size='small'
                      style={{
                        color: '#FFF',
                        backgroundColor: 'red'
                      }}
                      onClick={() => handleDelete(article.id)}
                    >
                      Delete Article
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box textAlign='center'>
        <Button variant='contained' onClick={nextDocuments} disabled={!lastDocument} sx={{ marginTop: '8px' }}>Load More</Button>
      </Box>
    </>
  );
}

export default Articles;



