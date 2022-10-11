import React from 'react';
import TalesColumn from './TalesColumn';
import {
    Button,
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    CardActions,
    CardMedia,
    Skeleton
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
import { Link } from 'react-router-dom';


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

const Articles = () => {
    const [articles, setArticles] = React.useState([]);

    const [data, setData] = React.useState<any[]>([]);
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
                if (type === "added") posts.push({ id: doc.id, ...doc.data() });
            });

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
        <div>
            <Grid container spacing={3}>
                <Grid item lg={8} xs={12}>
                    <Grid container spacing={2} sx={{ padding: '20px' }}>
                        {data.map((article) => (
                            <Grid xs={12} sm={12} md={6} lg={6} item key={article.id}>
                                <Card sx={{ maxWidth: 345, height: '400px' }} >

                                    {article ? (
                                        <CardMedia
                                            component="img"
                                            alt={article.title}
                                            height="240"
                                            image={article.imageUrl}
                                        />
                                    ) : (
                                        <React.Fragment>
                                            <Skeleton variant="rectangular" width={400} height={60} />
                                        </React.Fragment>
                                    )}
                                    <CardContent sx={{ height: '80px' }}>
                                        {article ? (
                                            <Typography gutterBottom variant="h5" component="div">
                                                {article.title}
                                            </Typography>
                                        ) : (
                                            <Skeleton animation="wave" height={80} />
                                        )}
                                    </CardContent>
                                    <CardActions>
                                        {article ? (
                                            <Link to={`/fake-news/${article.id}`} target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                                                <Button size="small">Continue Reading</Button>
                                            </Link>
                                        ) : (

                                            <Box justifyContent='center'>
                                                <Skeleton animation="wave" height={30} width="60%" />
                                            </Box>
                                        )}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box textAlign='center'>
                        <Button variant='contained' onClick={nextDocuments} disabled={!lastDocument} sx={{ marginTop: '8px' }}>Load More</Button>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <TalesColumn />
                </Grid>
            </Grid>
        </div>
    )
}

export default Articles

