import { Container, Grid, Typography, TextField, Box, MenuItem, Button } from '@mui/material';
import * as React from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import Footer from 'src/components/Footer';

import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';
import { storage, db } from 'src/config/firebaseConfig';

const authors = [
  {
    value: 'Bra Rajesh',
    label: 'Bra Rajesh',
  },
  {
    value: 'NaHlupheko',
    label: 'NaHlupheko',
  },
  {
    value: 'Dr Hardfacts Masasi',
    label: 'Dr Hardfacts Masasi',
  },
];

const AddArticle = () => {
  const [author, setAuthor] = React.useState('Dr Hardfacts Masasi');
  const [loader, setLoader] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [abstract, setAbstract] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [body, setBody] = React.useState('');
  const [progress, setProgress] = React.useState(0);

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }


  const handlePublish = (event) => {
    event.preventDefault();
    setLoader(true);

    if (!title || !abstract|| !image || !body ) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${image}`
    );

    const uploadImage = uploadBytesResumable(storageRef, image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercent);
        console.log('Upload is ' + progress + '% done')
      },
      (err) => {
        console.log(err);
      },
      () =>

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: title,
            abstract: abstract,
            body: body,
            author: author,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              setLoader(false);
              alert('Article Successfully Published');
            })
            .catch((error) => {
              alert(error.message);
              setLoader(false);
            });
        }
        )
    )
  };

  return (
    <div>
      <Container maxWidth='lg'>
        <Typography variant='h3' align='center'>
          Add Article
        </Typography>

        <Grid container spacing={1.3} sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <Grid item xs={12}>
            <TextField
              placeholder='Article Title'
              label='Title'
              name='title'
              variant='outlined'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth required
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderWidth: '1px'
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              fullWidth
              required
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderWidth: '1px'
                }
              }}
            >
              {authors.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <Box textAlign='center'>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={handleImageChange}
              />
              {progress === 0 ? null : (
                <div>
                  <div
                    style={{ width: `${progress}%` }}
                  >
                    {`uploading image ${progress}%`}
                  </div>
                </div>
              )}
              <label htmlFor="raised-button-file">
                <Button component="span" sx={{ color: '#333333' }}>
                  <UploadIcon /> Article Cover Image
                </Button>
              </label>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder='Article Abstract'
              label='Abstract'
              name='abstract'
              variant='outlined'
              fullWidth required
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              multiline rows={2}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderWidth: '1px'
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder='Article Body'
              name='body'
              variant='outlined'
              fullWidth required
              multiline rows={15}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderWidth: '1px'
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign='center'>
              <Button type='submit'
                variant='contained'
                style={{
                  backgroundColor: loader ? '#e76b50' : '#551b10',
                  fontSize: '14px',
                  borderRadius: 10,
                  color: '#e1e1e1'
                }}
                onClick={handlePublish}
              >
                Publish
              </Button>
            </Box>
          </Grid>
        </Grid>
        <br />
      </Container>
      <Footer />
    </div>
  )
}

export default AddArticle
