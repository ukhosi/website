import { Container } from '@mui/material';
import Articles from './Articles';
import Trending from './Trending';

const Landing = () => {
    return (
        <div style={{  marginBottom: '20px' }}>
            <Container style={{ padding: '20px' }}>
                <Trending />
                <Articles />
            </Container>
        </div>
    )
}

export default Landing