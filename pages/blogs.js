import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
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
const BlogsPage = () => {
  return (
    <> <Head>
    <title> Blogs</title>
    <link rel="icon" href="https://i.ibb.co/gtXtT7v/My-logo-removebg-preview.png" /> {/* Replace "/favicon.ico" with the path to your logo image */}
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
            <Card 
              sx={{ 
                width: 345, // Set a fixed width
                height: 300, // Set a fixed height to make all cards the same
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                margin: 'auto' // Center the card in the grid cell
              }}
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
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default BlogsPage;