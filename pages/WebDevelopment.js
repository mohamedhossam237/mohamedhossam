import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Chip, Stack, styled } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';

const projectData = [
  {
    title: 'EduShare',
    description: 'A web & mobile platform aimed at providing free, comprehensive educational support to address educational inequality. By leveraging the internet, EduShare reaches audiences in remote or challenging circumstances, promoting educational equality with features like curated online courses, personalized instructor chats, informative blogs, and interactive events.',
    image: 'https://i.ibb.co/T0JdkvK/Edu-Share-Logo.png', 
    link: 'https://edu-share.vercel.app',
    skills: 'Web Development · Mobile App Development · Educational Platform · Interactive Events',
  },
  {
    title: 'FoodieHub',
    description: 'FoodieHub offers personalized food experiences, featuring recipe discovery based on user preferences, ingredient management, and a vibrant food community. It tackles food waste and caters to dietary needs, providing a unique interactive cooking experience.',
    image: 'https://i.ibb.co/2cn5dCk/unnamed.png',
    link: 'https://foodie-hub-ebon.vercel.app/',
    skills: 'Recipe Discovery · Food Community · User Preferences · Ingredient Management',
  },
  {
    title: 'Masar',
    description: 'Masar is a cutting-edge application designed to revolutionize the way we monitor road conditions and interact with traffic authorities. It serves as a critical bridge between the community and traffic police, enabling users to report road emergencies, accidents, and hazardous conditions in real-time.',
    image: 'https://i.ibb.co/TY6BDTB/Masar.png',
    link: 'https://masar.vercel.app/',
    skills: 'Road Monitoring · Real-time Reporting · Traffic Authority Integration · Emergency Handling',
  },
  {
    title: 'Monqz',
    description: 'Monqz is an app designed for swimmers and sailors, offering real-time sea conditions, weather forecasts, and safety information. It highlights swimmable areas and warns of potential dangers, making it essential for safe and informed marine activities.',
    image: 'https://i.ibb.co/dryWTdp/logo-1.png',
    link: 'https://monqz-api.vercel.app/',
    skills: 'Marine Safety · Sea Conditions · Weather Forecasts · Real-time Warnings',
  },
  {
    title: 'Astrocon',
    description: 'AstroCon is a conference dedicated to astronomy and space science, organized by the Astronomy Alumni Chapter at Qatar University (QU) in cooperation with QU Astronomy Club.',
    image: 'https://i.ibb.co/kD3C6qB/unnamed-1.jpg',
    link: 'https://quastrocon.wordpress.com/',
    skills: 'Conference Management · Astronomy · Space Science · Event Organization',
  },
];

const GradientCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(145deg, #6e48aa, #9d50bb)',
  '&:hover': {
    background: 'linear-gradient(145deg, #9d50bb, #6e48aa)',
  },
  transition: 'background 0.5s',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  borderRadius: '15px',
  overflow: 'hidden',
}));

const cardHoverAnimation = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 },
};

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: 'auto',
  transition: 'transform 0.15s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)',
  },
}));

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
};

const WebDevelopmentPage = () => {
  return (
    <>
      <Head>
        <title>Web Development Projects</title>
        <link rel="icon" href="https://i.ibb.co/gtXtT7v/My-logo-removebg-preview.png" />
      </Head>
      <Box
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
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                layout
              >
                <CustomCard>
                  <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
                    <CardMedia
                      component="img"
                      height="194"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
                        {project.skills.split(' · ').map((skill, index) => (
                          <Chip key={index} label={skill} variant="outlined" size="small" />
                        ))}
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </CustomCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default WebDevelopmentPage;
