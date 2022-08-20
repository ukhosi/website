import { Container } from '@mui/material'
import React from 'react'
import FakeStory from './FakeStory'
import Reporters from './Reporters'
import Values from './Values'

const About = () => {
    return (
        <div style={{ marginTop: '80px', marginBottom: '20px' }}>
            <Container maxWidth='lg' sx={{ padding: '20px' }}>
                <FakeStory />
                <Reporters />
                <Values />
            </Container>

        </div>
    )
}

export default About