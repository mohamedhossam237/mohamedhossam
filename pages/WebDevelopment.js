import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';

const projectData = [
  {
    title: 'EduShare',
    description: 'A web platform aimed at providing free, comprehensive educational support to address educational inequality. By leveraging the internet, EduShare reaches audiences in remote or challenging circumstances, promoting educational equality with features like curated online courses, personalized instructor chats, informative blogs, and interactive events.',
    image: 'https://i.ibb.co/T0JdkvK/Edu-Share-Logo.png', 
    link: 'https://edu-share.vercel.app' 
  },
  {
    title: 'FoodieHub',
    description: 'FoodieHub offers personalized food experiences, featuring recipe discovery based on user preferences, ingredient management, and a vibrant food community. It tackles food waste and caters to dietary needs, providing a unique interactive cooking experience.',
    image: 'https://i.ibb.co/2cn5dCk/unnamed.png',
    link: 'https://foodie-hub-ebon.vercel.app/' 

  },
  {
    title: 'Masar',
    description: 'Description of Project 2',
    image: 'https://i.ibb.co/TY6BDTB/Masar.png',
    link: 'https://masar.vercel.app/' 

  },
  {
    title: 'Monqz',
    description: 'Description of Project 3',
    image: 'https://i.ibb.co/dryWTdp/logo-1.png',
    link: 'https://monqz-api.vercel.app/' 
  },
  {
    title: 'Astrocon',
    description: 'AstroCon is a conference dedicated to astronomy and space science, organized by the Astronomy Alumni Chapter at Qatar University (QU) in cooperation with QU Astronomy Club. ',
    image: 'https://i.ibb.co/kD3C6qB/unnamed-1.jpg',
    link: 'https://quastrocon.wordpress.com/' 

  },
];
const WebDevelopmentPage = () => {
  return (
    <> <Head>
    <title> Web Development Projects</title>
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
                height: 450, // Set a fixed height to make all cards the same
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

export default WebDevelopmentPage;