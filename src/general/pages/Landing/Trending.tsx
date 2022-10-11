import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent} from '@mui/material';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import {
    collection,
    query,
    onSnapshot,
    orderBy,
    limit
} from 'firebase/firestore';

import { db } from 'src/config/firebaseConfig';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Trending = () => {
    const [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        const q = query(
            collection(db, 'Articles'),
            orderBy('createdAt', 'desc'),
            limit(5)
        );
        const unsub = onSnapshot(q, (querySnapshot) => {
            let ArticlesArray = [];
            querySnapshot.forEach((doc) => {
                ArticlesArray.push({ ...doc.data(), id: doc.id });
            });
            setArticles(ArticlesArray);
        });
        return () => unsub();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Container maxWidth='lg' sx={{ padding: '10px' }}>
                <Slider {...settings}>
                    {articles.map((article, i) => {
                        return (
                            <div key={article.id}>
                                 <Link to={`/fake-news/${article.id}`} target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                                <Card sx={{ width: '450', height: '400', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                                    <CardMedia
                                        component='img'
                                        sx={{ objectFit: 'contain' }}
                                        height='320px'
                                        width='400px'
                                        image={article.imageUrl}
                                        alt={article.title}
                                    />
                                    <CardContent>
                                        <Typography variant='h3' color='text.secondary' align='center'>
                                            {article.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                </Link>
                            </div>
                        )
                    })}
                </Slider>
            </Container>
        </div>
    )
}

export default Trending
