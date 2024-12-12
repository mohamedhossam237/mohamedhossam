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
import ExperienceList from '../components/ExperienceCard';
import RecommendationsList from '../components/RecommendationCard';
import React, { useState, useEffect } from 'react';
import { Particles } from 'react-tsparticles';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from '../components/NavBar';
import ChatbotDialog from '@/components/ChatbotDialogue';
export default function Home() {
  const linkedInURL = 'https://www.linkedin.com/in/mohamed-hossam-427b63187/';
  const githubURL = 'https://github.com/mohamedhossam237';
  const instagramURL = 'https://www.instagram.com/mhos237';
  const chatbotButtonAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const imageUrls = ['https://i.ibb.co/Gpds9NL/Whats-App-Image-2023-06-12-at-7-28-29-PM-removebg-preview.png'];
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleOpenChatbot = () => {
    setIsChatbotOpen(true);
  };

  const handleCloseChatbot = () => {
    setIsChatbotOpen(false);
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const imageUrl = imageUrls[currentImageIndex];

  // Animation for the circular border
  const borderAnimation = {
    animate: {
      rotate: 100,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  // Courses and certificates data
  const coursesAndCertificates = [
    {
      title: 'Artificial Intelligence Essentials V2',
      description: 'IBM - Issued Oct 2024',
      image: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg', // Replace with actual image URL
    },
    {
      title: 'Finetuning Large Language Models!',
      description: 'DeepLearning.AI - Issued Oct 2024',
      image: 'https://analyticsindiamag.com/wp-content/uploads/2024/03/DeepLearning.ai_-300x300.png', // Replace with actual image URL
    },
    {
      title: 'Functions, Tools and Agents with LangChain!',
      description: 'DeepLearning.AI - Issued Oct 2024',
      image: 'https://analyticsindiamag.com/wp-content/uploads/2024/03/DeepLearning.ai_-300x300.png', // Replace with actual image URL
    },
    {
      title: 'Generative AI Essentials',
      description: 'IBM - Issued Oct 2024',
      image: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg', // Replace with actual image URL
    },
    {
      title: 'Software Engineering Essentials',
      description: 'IBM - Issued Oct 2024',
      image: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg', // Replace with actual image URL
    },
    {
      title: 'Foundations: Data, Data, Everywhere',
      description: 'Google - Issued Mar 2024',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png', // Replace with actual image URL
    },
    {
      title: 'What is Data Science?',
      description: 'IBM - Issued Aug 2023',
      image: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg', // Replace with actual image URL
    },
    {
      title: 'The Complete Flutter Development Bootcamp with Dart',
      description: 'London App Brewery - Issued Apr 2021',
      image: 'https://yt3.googleusercontent.com/ytc/AIdro_kRcKOU4apMYom4t7jG-mr15F2pKD_eAfStKx_h49pVyg=s900-c-k-c0x00ffffff-no-rj', // Replace with actual image URL
    },
  ];

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        <CssBaseline />
        <NavBar />
        <Grid container spacing={4} sx={{ padding: '2rem', marginTop: '5rem' }}>
          <Grid item xs={12} sm={6} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Animated Circular Border */}
            <Box
              component={motion.div}
              {...borderAnimation}
              sx={{
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                border: '4px dashed white',
                position: 'absolute',
                zIndex: 1,
              }}
            />
            {/* Profile Image */}
            <motion.img
              src={imageUrl}
              alt="Mohamed Hossam"
              style={{
                borderRadius: '50%',
                width: '400px',
                height: '400px',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 2,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
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
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  padding: '0 2rem',
                }}
                gutterBottom
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
                  href="https://media.licdn.com/dms/document/media/v2/D4D2DAQEGfI59CnyVUg/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1726483862871?e=1735171200&v=beta&t=xRjthBlNIAI0sDTM4IYjyVUfSsE1VhFRwI7yw41jlMY"
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
        {/* Other sections */}
        <ExperienceList />
        <RecommendationsList />

        {/* Carousel for Courses and Certificates at the end of the page */}
        <Box sx={{ width: '100%', padding: '2rem', marginTop: '5rem' }}>
  <Typography variant="h4" sx={{ color: 'white', marginBottom: '2rem', textAlign: 'center' }}>
    Courses & Certificates
  </Typography>
  <Slider {...carouselSettings}>
    {coursesAndCertificates.map((item, index) => (
      <Box key={index} sx={{ padding: '1rem' }}>
        <Box
          sx={{
            background: 'white',
            borderRadius: '12px',
            padding: '1rem',
            boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
            textAlign: 'center',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            },
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              borderRadius: '8px',
              maxWidth: '100%',
              height: '150px', // Set a consistent height
              objectFit: 'cover', // Ensure images cover the card area properly
              marginBottom: '1rem',
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', marginBottom: '1rem' }}>
            {item.description}
          </Typography>
        </Box>
      </Box>
    ))}
  </Slider>
</Box>
<Box
        sx={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
        }}
      >
        <motion.div {...chatbotButtonAnimation}>
          <Button
            onClick={handleOpenChatbot}
            sx={{
              padding: '0',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              '&:hover': {
                background: 'none',
              },
            }}
          >
            <motion.img
              src="https://i.ibb.co/9TjTZwd/image-removebg-preview.png" // Replace with the animated chatbot icon/image URL
              alt="AI Chatbot Assistant"
              style={{ width: '150px', height: '150px', cursor: 'pointer' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </Button>
        </motion.div>
        
        {/* Thinking bubble */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '140px',
            right: '10px',
            background: 'white',
            borderRadius: '16px',
            padding: '10px 15px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            width: '250px',
            fontSize: '14px',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              right: '20px',
              width: '0',
              height: '0',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid white',
            },
          }}
        >
          Hello! Let&apos;s ask me anything about Mohamed Hossam
        </Box>
              {/* Chatbot Dialogue */}
        {/* Chatbot Dialog */}
        {isChatbotOpen && (
          <ChatbotDialog onClose={handleCloseChatbot} />
        )}
      </Box>
      
        <Box sx={{ marginTop: 'auto', padding: '1rem', backgroundColor: '#00000050', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'white' }}>
            © 2023 - Mohamed Hossam - All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
}
