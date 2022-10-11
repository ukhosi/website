import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './article.css'
import { db } from 'src/config/firebaseConfig';
import { Container, Typography } from '@mui/material';

interface ArticleData {
    title: string,
    abstract: string,
    imageUrl: string,
    author: string,
    body: string,
    id: string

}

export default function Article() {
    const { id } = useParams();
    const [article, setArticle] = React.useState<ArticleData | null>();

    React.useEffect(() => {
        const docRef = doc(db, 'Articles', id);
        onSnapshot(docRef, (snapshot) => {
            setArticle({
                title: snapshot.data().title,
                abstract: snapshot.data().abstract,
                imageUrl: snapshot.data().imageUrl,
                author: snapshot.data().author,
                body: snapshot.data().body,
                id: snapshot.data().id
            });
        });


    });

    return (
        <div style={{ marginTop: '30px' }}>
            <Helmet>
                <title>{article?.title}</title>
                <meta name='description' content={article?.abstract} />
                <meta
                    property="og:image"
                    key="og:image"
                    content={article?.imageUrl}
                />
            </Helmet>
            <Container maxWidth='sm' >
                <Typography gutterBottom variant='h3' sx={{ fontWeight: 'bold', color: '#551b10' }} component='div'>
                    {article?.title}
                </Typography>
                <br />
                <hr />
                <Typography variant='subtitle1' sx={{ fontStyle: 'italic' }} color='text.secondary'>
                    {article?.abstract}
                </Typography>
                <br />
                <img
                    src={article?.imageUrl}
                    alt={article?.title}
                    style={{ maxWidth: '100%' }}
                />
                <Typography sx={{ fontSize: 14, fontStyle: 'italic' }} color='text.secondary' >
                    By {article?.author}
                </Typography>
                <br />
                <Typography variant='body1' className='body'>
                    {article?.body}
                </Typography>
                <br />
                <br />
            </Container>
        </div >
    );
}

