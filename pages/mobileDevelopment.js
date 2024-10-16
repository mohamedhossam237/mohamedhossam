import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton, Chip, Stack } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const projectData = [
  {
    title: 'Basirah',
    description: 'Basirah is a mobile app paired with a smart stick that detects obstacles for individuals with visual impairments. It integrates an AI voice assistant to provide real-time guidance and navigation instructions, enhancing independence and safety.',
    image: 'https://i.ibb.co/C0pPsSp/DALL-E-2024-03-17-22-50-52-Design-a-compact-and-distinct-logo-icon-for-the-Basirah-app-embodying-the.webp',
    github: '',
    apk: '',
    gallery: '',
    skills: 'AI Voice Assistant · Smart Stick · Machine Learning · Real-time Guidance · Navigation',
  },
  {
    title: 'qucgm',
    description: 'Qucgm is a mobile app that pairs with a specialized hand band to detect diabetes. It connects users with their families and doctors, facilitating real-time health data sharing and personalized guidance for effective diabetes management.',
    image: 'https://i.ibb.co/7nVFJyR/logo.webp',
    github: '',
    apk: '',
    gallery: '',
    skills: 'Diabetes Detection · Health Data Sharing · Personalized Guidance · Machine Learning',
  },
  {
    title: 'IEpilepsy',
    description: 'IEpilepsy is a mobile app that integrates with a specialized device to detect epilepsy seizures using machine learning. It provides real-time alerts, seizure tracking, and facilitates communication between users, caregivers, and healthcare providers.',
    image: 'https://i.ibb.co/8bCtLc7/DALL-E-2023-11-21-17-37-50-An-abstract-brain-like-structure-composed-of-intertwined-wires-on-the-lef.png',
    github: '',
    apk: '',
    gallery: '',
    skills: 'Epilepsy Detection · Seizure Tracking · Real-time Alerts · Machine Learning',
  },
  {
    title: 'Dlni',
    description: 'Dlni is a mobile companion for exploring the vibrant shopping scene of Qatar! This innovative app provides a comprehensive guide to malls and stores, exclusive discounts, and enticing offers.',
    image: 'https://i.ibb.co/V396Gc1/LogoD.png',
    github: '',
    apk: '',
    gallery: '',
    skills: 'Tourism · Shopping Guide · Exclusive Discounts · Offers · User Experience',
  },
  {
    title: 'Rayig',
    description: 'Raiyg is a cutting-edge smartwatch and phone application tailored to enhance the mental health support system for students in schools. It offers a discreet method for students to monitor their mental health and recognize patterns in their mood and stress levels.',
    image: 'https://i.ibb.co/KKwqSSW/Black-Yellow-Minimalist-Brain-Logo.png',
    github: '',
    apk: '',
    gallery: '',
    skills: 'Mental Health Monitoring · Smartwatch Integration · Mood Tracking · Student Support',
  },
  {
    title: 'EduShare',
    description: 'EduShare is a web & mobile platform providing free educational support to address inequality. It promotes educational equality with features like curated online courses, personalized chats, and interactive events.',
    image: 'https://i.ibb.co/T0JdkvK/Edu-Share-Logo.png',
    github: '',
    apk: '',
    gallery: '',
    skills: 'Educational Support · Online Courses · Personalized Chats · Interactive Events',
  },
  {
    title: 'Masar',
    description: 'Masar is an application designed to revolutionize the way we monitor road conditions and interact with traffic authorities. It allows users to report road emergencies, accidents, and hazardous conditions in real-time.',
    image: 'https://i.ibb.co/TY6BDTB/Masar.png',
    github: '',
    apk: '',
    gallery: '',
    skills: 'Road Condition Monitoring · Real-time Reporting · Traffic Authority Interaction',
  },
  {
    title: 'Monqz',
    description: 'Monqz is an app designed for swimmers and sailors, offering real-time sea conditions, weather forecasts, and safety information. It highlights swimmable areas and warns of potential dangers.',
    image: 'https://i.ibb.co/dryWTdp/logo-1.png',
    github: '',
    apk: '',
    gallery: '',
    skills: 'Sea Conditions · Weather Forecasts · Safety Information · Marine Activities',
  },
];

const MobileDevelopmentPage = () => {
  return (
    <>
      <Head>
        <title>Mobile Development Projects</title>
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
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card
                  sx={{
                    width: '100%',
                    height: 480,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    margin: 'auto',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    },
                  }}
                >
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
                    <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
                      {project.skills && project.skills.split(' · ').map((skill, index) => (
                        <Chip key={index} label={skill} variant="outlined" size="small" />
                      ))}
                    </Stack>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                    <IconButton aria-label="github" href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="download" href={project.apk} target="_blank" rel="noopener noreferrer">
                      <DownloadForOfflineIcon />
                    </IconButton>
                    <IconButton aria-label="gallery" href={project.gallery} target="_blank" rel="noopener noreferrer">
                      <PhotoLibraryIcon />
                    </IconButton>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MobileDevelopmentPage;
