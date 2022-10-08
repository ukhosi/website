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
    CardMedia
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
        <div>
            <Grid container spacing={3}>
                <Grid item lg={8} xs={12}>
                    <Grid container spacing={2} sx={{ padding: '20px' }}>
                        {data.map((article) => (
                            <Grid xs={12} sm={12} md={6} lg={6} item key={article.id}>
                                <Card sx={{ maxWidth: 345, height: '400px' }} >
                                    <CardMedia
                                        component="img"
                                        alt={article.title}
                                        height="240"
                                        image={article.imageUrl}
                                    />
                                    <CardContent sx={{ height: '80px' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {article.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Continue Reading</Button>
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

