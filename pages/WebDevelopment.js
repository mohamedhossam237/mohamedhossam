import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

// Replace the projectData array with your own project data
const projectData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    image: 'https://example.com/project1-image.jpg',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    image: 'https://example.com/project2-image.jpg',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    image: 'https://example.com/project3-image.jpg',
  },
];

const WebDevelopmentPage = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #000428 30%, #204377 90%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        padding: '2rem',
      }}
    >
      <NavBar />

      <Typography variant="h4" component="div" gutterBottom>
        Web Development Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                margin: '1rem',
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Typography variant="h5" component="div" gutterBottom>
                    {project.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WebDevelopmentPage;
