import { Box, Typography, Grid, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, CssBaseline, Zoom, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import WebIcon from '@mui/icons-material/Web';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import { Code as CodingIcon, Palette as PaletteIcon } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import Particles from 'react-particles';

export default function Home() {
  const linkedInURL = "https://www.linkedin.com/in/yourProfile";
  const githubURL = "https://github.com/yourProfile";
  const instagramURL = "https://www.instagram.com/yourProfile";
  
  const imageUrls = [
    "https://i.ibb.co/Gpds9NL/Whats-App-Image-2023-06-12-at-7-28-29-PM-removebg-preview.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const imageUrl = imageUrls[currentImageIndex];

  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Web Developer", "Graphic Designer", "Video Editor", "Mobile Developer"];
  
  const experiences = ["Experience 1", "Experience 2", "Experience 3"];
  const recommendations = ["Recommendation 1", "Recommendation 2", "Recommendation 3"];
  const projects = ["Project 1", "Project 2", "Project 3"];

  const InfoCard = ({ icon, title, description }) => (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          {icon}
          <Typography variant="h5" component="div" gutterBottom>{title}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const pages = [
    { name: 'Web Development', url: '/WebDevelopmentPage' },
    { name: 'Graphic Design', url: '/graphic-design' },
    { name: 'Video Editing', url: '/video-editing' },
    { name: 'Mobile Development', url: '/mobile-development' },
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

      <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(10px)', backgroundColor: '#00000050' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ display: { xs: 'block', md: 'none' } }}>
            Mohamed Hossam
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.name} color="inherit" startIcon={<WebIcon />}>
                {page.name}
              </Button>
            ))}
          </Box>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={handleMenuClose}
                component="a"
                href={page.url}
                target="_blank"
                rel="noreferrer"
              >
                {page.name}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

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
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <a href={linkedInURL} target="_blank" rel="noreferrer">
                <LinkedInIcon sx={{ fontSize: 40, color: '#fff' }} />
              </a>
              <a href={githubURL} target="_blank" rel="noreferrer">
                <GitHubIcon sx={{ fontSize: 40, color: '#fff', marginLeft: '1rem' }} />
              </a>
              <a href={instagramURL} target="_blank" rel="noreferrer">
                <InstagramIcon sx={{ fontSize: 40, color: '#fff', marginLeft: '1rem' }} />
              </a>
            </Box>
            <Typography variant="h2" component={motion.div} gutterBottom
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Mohamed Hossam
            </Typography>
            <Typography variant="h4" component={motion.div} gutterBottom
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <i>Software Engineer</i> & <i>Creative Designer</i>
            </Typography>
            <Typography variant="h6" component={motion.div} gutterBottom
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Specializing in React.js and Mobile App Development. Passionate about user-friendly design and always aiming for perfection.
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: '2rem' }}>View My Resume</Button>
          </Box>
        </Grid>
      </Grid>

      {/* Experience section */}
      <Box sx={{ marginTop: '2rem', width: '100%' }}>
        <Typography variant="h4" component="div" gutterBottom>
          Experience
        </Typography>
        <Grid container justifyContent="center">
          {experiences.map((experience, index) => (
            <InfoCard key={index} icon={<WorkIcon />} title={`Experience ${index + 1}`} description={experience} />
          ))}
        </Grid>
      </Box>

      {/* Recommendations section */}
      <Box sx={{ marginTop: '2rem', width: '100%' }}>
        <Typography variant="h4" component="div" gutterBottom>
          Recommendations
        </Typography>
        <Grid container justifyContent="center">
          {recommendations.map((recommendation, index) => (
            <InfoCard key={index} icon={<StarIcon />} title={`Recommendation ${index + 1}`} description={recommendation} />
          ))}
        </Grid>
      </Box>

      {/* Latest Projects section */}
      <Box sx={{ marginTop: '2rem', width: '100%' }}>
        <Typography variant="h4" component="div" gutterBottom>
          Latest Projects
        </Typography>
        <Grid container justifyContent="center">
          {projects.map((project, index) => (
            <InfoCard key={index} icon={<CodeIcon />} title={`Project ${index + 1}`} description={project} />
          ))}
        </Grid>
      </Box>

      <Box sx={{ marginTop: 'auto', padding: '1rem', backgroundColor: '#00000050', textAlign: 'center' }}>
        <Typography variant="body2">© 2023 - Mohamed Hossam - All Rights Reserved</Typography>
      </Box>
    </Box>
  );
}
