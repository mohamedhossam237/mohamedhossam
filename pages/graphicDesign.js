

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Example array of projects with multiple images
const projectData = [
  {
    title: 'EduShare',
    images: [
      { url: 'https://i.ibb.co/T0JdkvK/Edu-Share-Logo.png'},

    ],
  },
  {
    title: 'AdStep',
    images: [
      { url: 'https://i.ibb.co/kQ5yRnn/adstep-4.png' },
      { url: 'https://i.ibb.co/Tg82byq/International-8.png' },
      { url: 'https://i.ibb.co/nC3KnJR/International-10.png' },
      { url: 'https://i.ibb.co/HDGyg4t/International-6.png' },
      { url: 'https://i.ibb.co/z7NhzVX/Main.jpg' },
      { url: 'https://i.ibb.co/rvZMF8N/Instagram-post-1-3.png' },

      // Add more images with descriptions here
    ],
  },
  {
    title: 'QU Computing Club',
    images: [
      { url: 'https://i.ibb.co/CJnxDjz/ju-Nrc-Y4-N-400x400.jpg' },
      { url: 'https://i.ibb.co/JFBCVvc/Robo-Vision.png' },
      { url: 'https://i.ibb.co/wcycTkR/FREE-Workdays.png' },

      // Add more images with descriptions here
    ],
  },
  {
    title: 'QU College of Business & Economics',
    images: [
      { url: 'https://i.ibb.co/M2j5982/QNA-Faculty-Economy-03-04-2023.jpg' },
      { url: 'https://i.ibb.co/fDnQCwP/Announcement-temp-13.png' },
      { url: 'https://i.ibb.co/3FBrC4N/GSSC.png' },
      { url: 'https://i.ibb.co/19DnVKw/8B0952.png' },
      { url: 'https://i.ibb.co/8NfnY4M/Beige-Monotone-Minimalist-Agenda-Document-5.png' },



      // Add more images with descriptions here
    ],  },
  {
    title: 'QU Astronomy Club',
    images: [
      { url: 'https://quastrocon.files.wordpress.com/2021/07/quac-1.png'},
      // Add more images with descriptions here
    ],  },
  {
    title: 'I believe in Science',
    images: [
      { url: 'https://i.ibb.co/Dkrc4Wp/unnamed.jpg'},
      { url: 'https://i.ibb.co/GdjDBRj/image.png'},
      { url: 'https://i.ibb.co/kmBBDrB/image.png'},
      { url: 'https://i.ibb.co/3B31yyM/image.png'},
      { url: 'https://i.ibb.co/WxF6WXc/image.png'},


      // Add more images with descriptions here
    ],  },
  {
    title: 'Oxgyen Technologies',
    images: [
      { url: 'https://i.ibb.co/0hc3S6K/oxygen-events-qatar-logo.jpg' },
      // Add more images with descriptions here
    ],   },
  {
    title: 'Otype Team',
    images: [
      { url: 'https://i.ibb.co/pr3FxNF/otype-final-logo.png' },
      { url: 'https://i.ibb.co/3Wxff5J/3.png'},
      { url: 'https://i.ibb.co/jkyTg4z/share-khair-343.png'},


      // Add more images with descriptions here
    ],  },
  {
    title: 'QU Research Complex',
    images: [
      { url: 'https://i.ibb.co/KDNz2dj/download.png'},
      { url: 'https://i.ibb.co/80F6fRR/a7.png'},
      { url: 'https://i.ibb.co/cFk5HXh/insta5-post.jpg'},
      { url: 'https://i.ibb.co/tCqF8ht/banner.png'},

      // Add more images with descriptions here
    ], 
    },
  {
    title: 'QU Toastmasters Club',
    images: [
      { url: 'https://i.ibb.co/vQ4CPZJ/Toastmasters-2011.png'},
      { url: 'https://i.ibb.co/hHBfFqn/58-tos.png'},
      { url: 'https://i.ibb.co/VVtV5XD/tttos.png'},
      { url: 'https://i.ibb.co/kxzdBHZ/11-Tos.png'},


      // Add more images with descriptions here
    ],   },
  {
    title: 'The Bounce Back Better Program',
    images: [
      { url: 'https://www.eomega.org/sites/default/files/styles/scale_width_1440/public/media/bounce-back-better_hero.jpg?itok=aD5HQUHI'},
      // Add more images with descriptions here
    ],   },];

const GraphicDesignPage = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState({});
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0); // Reset to first image
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) => Math.min(prevIndex + 1, selectedProject.images.length - 1));
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <>
      <Head>
        <title>Projects Gallery</title>
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
    <Card 
      sx={{ 
        width: 345,
        height: 250,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        margin: 'auto'
      }}
    >
      <CardActionArea onClick={() => handleClickOpen(project)}>
        {project.images && project.images.length > 0 ? (
          <CardMedia
            component="img"
            image={project.images[0].url} // Ensure there's at least one image
            alt={project.title}
            sx={{ height: 194, objectFit: 'cover' }}
          />
        ) : (
          // Fallback if no image is available
          <Box sx={{ height: 194, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ccc' }}>
            <Typography>No Image Available</Typography>
          </Box>
        )}
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" sx={{ color: '#333' }}>
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
        
        {/* Dialog for displaying project images and descriptions as a gallery */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>
            {selectedProject.title}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selectedProject.images && (
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    maxHeight: 400,
                    objectFit: 'contain',
                  }}
                  src={selectedProject.images[activeImageIndex].url}
                  alt={selectedProject.images[activeImageIndex].description}
                />
              )}
              <Typography variant="caption" sx={{ mt: 2 }}>
                {selectedProject.images && selectedProject.images[activeImageIndex].description}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
                <IconButton onClick={handlePrevImage} disabled={activeImageIndex === 0}>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton onClick={handleNextImage} disabled={activeImageIndex === (selectedProject.images?.length ?? 0) - 1}>
  <ArrowForwardIosIcon />
</IconButton>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default GraphicDesignPage;
