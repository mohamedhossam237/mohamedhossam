import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Dialog, DialogTitle, DialogContent, IconButton, Chip, Stack } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const projectData = [
  {
    title: 'EduShare',
    images: [
      { url: 'https://i.ibb.co/T0JdkvK/Edu-Share-Logo.png' },
    ],
    skills: 'Web Development · Mobile App Development · Educational Support · Online Learning',
  },
  {
    title: 'AdStep',
    images: [
      { url: 'https://i.ibb.co/kQ5yRnn/adstep-4.png' },
      { url: 'https://i.ibb.co/Tg82byq/International-8.png' },
      { url: 'https://i.ibb.co/nC3KnJR/International-10.png' },
    ],
    skills: 'Marketing · Web Design · Mobile App Development · Event Management',
  },
  {
    title: 'QU Computing Club',
    images: [
      { url: 'https://i.ibb.co/CJnxDjz/ju-Nrc-Y4-N-400x400.jpg' },
      { url: 'https://i.ibb.co/JFBCVvc/Robo-Vision.png' },
    ],
    skills: 'Event Coordination · Web Design · Machine Learning · Robotics',
  },
  {
    title: 'QU College of Business & Economics',
    images: [
      { url: 'https://i.ibb.co/M2j5982/QNA-Faculty-Economy-03-04-2023.jpg' },
      { url: 'https://i.ibb.co/fDnQCwP/Announcement-temp-13.png' },
    ],
    skills: 'Social Media Marketing · Branding · Graphic Design · Video Production',
  },
  {
    title: 'QU Astronomy Club',
    images: [
      { url: 'https://quastrocon.files.wordpress.com/2021/07/quac-1.png' },
    ],
    skills: 'Event Management · Astronomy Education · Space Science · Public Relations',
  },
  {
    title: 'I believe in Science',
    images: [
      { url: 'https://i.ibb.co/Dkrc4Wp/unnamed.jpg' },
    ],
    skills: 'Graphic Design · Public Awareness · Educational Content · Social Media Management',
  },
  {
    title: 'Oxgyen Technologies',
    images: [
      { url: 'https://i.ibb.co/0hc3S6K/oxygen-events-qatar-logo.jpg' },
    ],
    skills: 'Event Management · Marketing · Tech Support · Corporate Branding',
  },
  {
    title: 'Otype Team',
    images: [
      { url: 'https://i.ibb.co/pr3FxNF/otype-final-logo.png' },
    ],
    skills: 'Logo Design · Branding · Web Development · Graphic Design',
  },
  {
    title: 'QU Research Complex',
    images: [
      { url: 'https://i.ibb.co/KDNz2dj/download.png' },
    ],
    skills: 'Research Support · Graphic Design · Social Media Content · Video Production',
  },
  {
    title: 'QU Toastmasters Club',
    images: [
      { url: 'https://i.ibb.co/vQ4CPZJ/Toastmasters-2011.png' },
    ],
    skills: 'Public Speaking · Leadership · Event Management · Branding',
  },
];

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
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                <Card
                  sx={{
                    width: 345,
                    height: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    margin: 'auto',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardActionArea onClick={() => handleClickOpen(project)}>
                    {project.images[0] ? (
                      <CardMedia
                        component="img"
                        image={project.images[0].url}
                        alt={project.title}
                        sx={{ height: 194, objectFit: 'cover' }}
                      />
                    ) : (
                      <Box sx={{ height: 194, backgroundColor: '#ececec', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h6" color="text.secondary">No Image Available</Typography>
                      </Box>
                    )}
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Click to view more
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle sx={{ m: 0, p: 2 }}>
            {selectedProject.title}
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              {selectedProject.images && selectedProject.images.length > activeImageIndex ? (
                <img 
                  src={selectedProject.images[activeImageIndex].url} 
                  alt={selectedProject.title} 
                  style={{ width: '100%', maxHeight: '60vh', objectFit: 'contain' }} 
                />
              ) : (
                <Typography variant="body1">Image not available</Typography>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
                <IconButton onClick={handlePrevImage} disabled={activeImageIndex === 0}>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton onClick={handleNextImage} disabled={!selectedProject.images || activeImageIndex === selectedProject.images.length - 1}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
              <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
                {selectedProject.skills && selectedProject.skills.split(' · ').map((skill, index) => (
                  <Chip key={index} label={skill} variant="outlined" size="small" />
                ))}
              </Stack>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default GraphicDesignPage;
