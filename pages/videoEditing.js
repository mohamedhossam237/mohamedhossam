import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const projectData = [
  {
    title: 'EduShare',
    image: 'https://i.ibb.co/T0JdkvK/Edu-Share-Logo.png', 
    videos: [
      { url: 'https://youtu.be/6klTqGlJbYg'},
    ],
  },
  {
    title: 'AdStep',
    image: 'https://i.ibb.co/kQ5yRnn/adstep-4.png', 
    videos: [
      { url: 'https://youtu.be/vm24rDRkrAY'},
      { url: 'https://youtu.be/DZ6VA_OIZkY'},
      { url: 'https://youtu.be/IMy1CVKsT3I'},

    ],
  },
  {
    title: 'QU Computing Club',
    image: 'https://i.ibb.co/CJnxDjz/ju-Nrc-Y4-N-400x400.jpg', 
    videos: [
      { url: 'https://youtu.be/JhFEEtw8Dsw'},
      { url: 'https://youtu.be/uk920ZP4Hqw'},
    ],
  },
  {
    title: 'QU College of Business & Economics',
    image: 'https://i.ibb.co/M2j5982/QNA-Faculty-Economy-03-04-2023.jpg', // Replace this URL with the actual image URL
    videos: [
      { url: 'https://youtu.be/iuzHArtHV-E'},
      { url: 'https://youtu.be/kSPlIjBx2zE'},
      { url: 'https://youtu.be/R_NfVn_RWJ0'},

      
    ],  },
  {
    title: 'Fame Academy',
    image: 'https://static.wixstatic.com/media/74669e_1b782cb74fbf4cbc9392f81f8770c57c.png/v1/crop/x_0,y_0,w_989,h_610/fill/w_206,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/74669e_1b782cb74fbf4cbc9392f81f8770c57c.png', 
    videos: [
      { url: 'https://youtu.be/ZUrb8Ij1AJw' },
    ],
  },
  {
    title: 'Qatar & Japan Documentary',
    image: 'https://tokyo.embassy.qa/images/default-source/default-album/0002.jpg?sfvrsn=14682a27_0', 
    videos: [
      { url: 'https://www.eomega.org/sites/default/files/styles/scale_width_1440/public/media/bounce-back-better_hero.jpg?itok=aD5HQUHI', description: 'EduShare Home Page' },
    ],   },];


    const VideoEditingPage = () => {
      const [open, setOpen] = React.useState(false);
      const [selectedProject, setSelectedProject] = React.useState({});
      const [activeVideoIndex, setActiveVideoIndex] = React.useState(0);
    
      const handleClickOpen = (project) => {
        setSelectedProject(project);
        setActiveVideoIndex(0);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleNextVideo = () => {
        setActiveVideoIndex((prevIndex) => Math.min(prevIndex + 1, selectedProject.videos.length - 1));
      };
    
      const handlePrevVideo = () => {
        setActiveVideoIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      };
    
      return (
        <>
          <Head>
            <title>Video Projects Gallery</title>
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
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Card
                      sx={{
                        width: 345,
                        height: 300, // Ensuring uniform size
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        margin: 'auto',
                        overflow: 'hidden', // Prevents content from overflowing
                      }}
                    >
                      <CardActionArea onClick={() => handleClickOpen(project)}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={project.image}
                          alt={project.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6">
                            {project.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
    
            {/* Dialog for displaying project videos */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
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
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    {selectedProject.videos && selectedProject.videos.length > 0 ? (
      selectedProject.videos[activeVideoIndex].url.includes("youtu") ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${selectedProject.videos[activeVideoIndex].url.split('/').pop().split('?')[0]}`} // Adjusted for URL splitting
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: '100%', maxHeight: 400 }}
        ></iframe>
      ) : (
        <video controls style={{ width: '100%', maxHeight: 400 }}>
          <source src={selectedProject.videos[activeVideoIndex].url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    ) : (
      <Typography>No videos available</Typography>
    )}
    <Typography variant="caption" sx={{ mt: 2 }}>
      {selectedProject.videos && selectedProject.videos[activeVideoIndex].description}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
      <IconButton onClick={handlePrevVideo} disabled={activeVideoIndex === 0}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton onClick={handleNextVideo} disabled={activeVideoIndex === (selectedProject.videos?.length ?? 0) - 1}>
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

export default VideoEditingPage;
