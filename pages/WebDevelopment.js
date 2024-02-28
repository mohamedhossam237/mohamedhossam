import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

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
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Typography variant="h5" component="div" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' }}>View Project</a>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WebDevelopmentPage;
