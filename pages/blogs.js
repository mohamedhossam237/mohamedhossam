import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, styled } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';


const projectData = [
  {
    title: 'I believe in science',
    image: 'https://i.ibb.co/Dkrc4Wp/unnamed.jpg', 
    link: 'https://www.ibelieveinsci.com/author/mohamad_hussam/' 
  },
  {
    title: 'medium',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png',
    link: 'https://medium.com/@mohamedhossam_88384' 

  },
];
const MotionCard = motion(styled(Card)(({ theme }) => ({
  width: 345, // Maintain a fixed width for consistency
  height: 300, // Maintain a fixed height for consistency
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: 'auto', // Center the card within its container
  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    transform: 'scale(1.05)', // Scale up cards on hover
    boxShadow: theme.shadows[10], // Use a deeper shadow on hover
  },
})));

const BlogsPage = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="https://i.ibb.co/gtXtT7v/My-logo-removebg-preview.png" />
      </Head>
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
          padding: '100px',
        }}
      >
        <NavBar />

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {projectData.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} display="flex" justifyContent="center">
              <MotionCard
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ height: 194, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#333' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {/* If there's a description, display it */}
                      {project.description || 'Click to read more'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default BlogsPage;