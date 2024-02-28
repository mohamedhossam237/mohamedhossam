import {
  Box,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  CssBaseline,
  Zoom,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExperienceList from '../components/ExperienceCard';
import RecommendationCard from '../components/RecommendationCard';
import ProjectCard from '../components/ProjectCard';
import React, { useState, useEffect } from 'react';
import { Particles } from 'react-tsparticles';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from '../components/NavBar';
import RecommendationsList from '../components/RecommendationCard'

export default function Home() {
  const linkedInURL = 'https://www.linkedin.com/in/mohamed-hossam-427b63187/';
  const githubURL = 'https://github.com/mohamed-ma1703976';
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

  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Web Developer', 'Graphic Designer', 'Video Editor', 'Mobile Developer'];


  const InfoCard = ({ icon, title, description }) => (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          {icon}
          <Typography variant="h5" sx={{ color: 'white' }} component="div" gutterBottom >
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const pages = [
    { name: 'Web Development', url: '/WebDevelopmentPage' },
    { name: 'Graphic Design', url: '/graphicDesign' },
    { name: 'Video Editing', url: '/videoEditing' },
    { name: 'Mobile Development', url: '/mobileDevelopment' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Contact Me', url: '/contact' },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };


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
        '@media (max-width: 600px)': {
          padding: '1rem',
        },
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
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
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
              <Link href={linkedInURL} target="_blank" rel="noreferrer">
                <LinkedInIcon sx={{ fontSize: 40, color: '#fff' }} />
              </Link>
              <Link href={githubURL} target="_blank" rel="noreferrer">
                <GitHubIcon sx={{ fontSize: 40, color: '#fff', marginLeft: '1rem' }} />
              </Link>
              <Link href={instagramURL} target="_blank" rel="noreferrer">
                <InstagramIcon sx={{ fontSize: 40, color: '#fff', marginLeft: '1rem' }} />
              </Link>
            </Box>
            <Typography
              variant="h2"
              component={motion.div}
              sx={{ color: 'white' }}
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
              sx={{ color: 'white' }}
              gutterBottom
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <i>Software Engineer</i> & <i>Developer</i>
            </Typography>
            <Typography
              variant="h6"
              component={motion.div}
              sx={{ color: 'white' }}
              gutterBottom
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
           I blend programming expertise (Python, Java, JavaScript, Flutter, C++), data engineering skills, and design acumen (Adobe Photoshop, Figma, Visual Paradigm) with strong problem-solving and communication abilities. Passionate about using technology to make a meaningful impact, I'm dedicated to innovation and positive change
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: '2rem' }}>
              View My Resume
            </Button>
          </Box>
        </Grid>
      </Grid>


      <ExperienceList />

    <RecommendationsList />


      <Box sx={{ marginTop: 'auto', padding: '1rem', backgroundColor: '#00000050', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'white' }}>© 2023 - Mohamed Hossam - All Rights Reserved</Typography>
      </Box>
    </Box>
  );
}
