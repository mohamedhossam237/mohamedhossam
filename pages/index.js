import {
  Box,
  Typography,
  Grid,
  Button,
  CssBaseline,
  Zoom,
} from '@mui/material';
import { motion } from 'framer-motion';
import Head from 'next/head';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExperienceList from '../components/ExperienceCard';
import React, { useState, useEffect } from 'react';
import { Particles } from 'react-tsparticles';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from '../components/NavBar';
import RecommendationsList from '../components/RecommendationCard';

export default function Home() {
  const linkedInURL = 'https://www.linkedin.com/in/mohamed-hossam-427b63187/';
  const githubURL = 'https://github.com/mohamedhossam237';
  const instagramURL = 'https://www.instagram.com/mhos237';

  const imageUrls = ['https://i.ibb.co/Gpds9NL/Whats-App-Image-2023-06-12-at-7-28-29-PM-removebg-preview.png'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const imageUrl = imageUrls[currentImageIndex];

  return (
    <>
      <Head>
        <title>Mohamed Hossam</title>
        <link rel="icon" href="https://i.ibb.co/gtXtT7v/My-logo-removebg-preview.png" />
      </Head>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(45deg, #000428 30%, #204377 90%)', // Retained background color
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: 'Roboto, sans-serif',
          padding: '2rem',
        }}
      >
        <CssBaseline />
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              shape: {
                type: 'star',
                stroke: {
                  width: 1,
                  color: '#ffffff',
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
                  size_min: 0.1,
                  sync: false,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'top',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
              },
            },
          }}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
        <NavBar />
        <Grid container spacing={4} sx={{ padding: '2rem', marginTop: '5rem' }}>
          <Grid item xs={12} sm={6}>
            <Zoom in={true} style={{ transitionDelay: '500ms' }}>
              <img
                src={imageUrl}
                alt="Mohamed Hossam"
                style={{
                  borderRadius: '15%',
                  maxWidth: '100%',
                  height: 'auto',
                  boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)',
                  border: '8px solid white',
                }}
              />
            </Zoom>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Box
                component={motion.div}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Box display="flex" justifyContent="center">
                  <Link href={linkedInURL} target="_blank" rel="noreferrer">
                    <LinkedInIcon sx={{ fontSize: 40, color: '#fff', '&:hover': { color: '#0077b5' } }} />
                  </Link>
                  <Link href={githubURL} target="_blank" rel="noreferrer">
                    <GitHubIcon sx={{ fontSize: 40, color: '#fff', marginLeft: '1rem', '&:hover': { color: '#333' } }} />
                  </Link>
                  <Link href={instagramURL} target="_blank" rel="noreferrer">
                    <InstagramIcon sx={{ fontSize: 40, color: '#fff', marginLeft: '1rem', '&:hover': { color: '#E1306C' } }} />
                  </Link>
                </Box>
              </Box>
              <Typography
                variant="h2"
                component={motion.div}
                sx={{ color: 'white', fontFamily: 'Orbitron, sans-serif' }}
                gutterBottom
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Mohamed Hossam
              </Typography>
              <Typography
                variant="h4"
                component={motion.div}
                sx={{ color: 'white', fontFamily: 'Monoton, cursive' }}
                gutterBottom
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <i>Software Engineer</i> & <i>Developer</i>
              </Typography>
              <Typography
                variant="body1"
                component={motion.div}
                sx={{ color: 'white', fontFamily: 'Monoton, cursive', textAlign: 'center', padding: '0 2rem' }}
                gutterBottom
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                As a technologist with a broad skill set, I excel in programming, data engineering, and design. My passion for innovation and making a meaningful impact drives me to solve complex challenges with creative and effective solutions.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  component="a"
                  href="https://drive.google.com/file/d/1_58__XF8TlfwHkOIyP772_3F6P7oXBna/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: '2rem',
                    backgroundColor: '#1976d2',
                    '&:hover': {
                      backgroundColor: '#115293',
                    },
                    padding: '10px 20px',
                    borderRadius: '20px',
                    boxShadow: '0px 5px 15px rgba(25, 118, 210, 0.4)',
                    textTransform: 'none',
                  }}
                >
                  View My Resume
                </Button>
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        <ExperienceList />

        <RecommendationsList />

        <Box sx={{ marginTop: 'auto', padding: '1rem', backgroundColor: '#00000050', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'white' }}>
            © 2023 - Mohamed Hossam - All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
}
