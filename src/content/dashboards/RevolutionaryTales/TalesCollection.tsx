import React from 'react';
import { doc, onSnapshot, collection, addDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from 'src/config/firebaseConfig';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, TextField, Button } from "@mui/material";

const TalesCollection = () => {
    const { id } = useParams();
    const [talesCollection, setTalesCollection] = React.useState('');


    {/* React.useEffect(() => {
        const docRef = doc(db, "TalesCollections", id);
        onSnapshot(docRef, (snapshot) => {
            setTalesCollection({ ...snapshot.data(), id: snapshot.id });
        });
    });*/}

    return (
        <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5' }}>
            <Container maxWidth='md' style={{ backgroundColor: '#f5f5f5' }}>
                {talesCollection && (
                    <Grid container spacing={3} alignItems='center' style={{ marginBottom: '20px' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Card style={{ backgroundColor: '#f5f5f5', border: "none", boxShadow: "none" }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {/*{talesCollection.title}*/} Title Here
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {/*{talesCollection.description}*/} Abstract here
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="450"
                                    image='src/assets/reporters/hardfacts.png'
                                    alt='somthing here'
                                />
                            </Card>
                        </Grid>
                    </Grid>
                )}
                <br />
            </Container>
        </div >
    );

}

export default TalesCollection;











