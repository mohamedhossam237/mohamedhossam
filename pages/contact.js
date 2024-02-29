import React from 'react';
import { Box, Typography, CssBaseline, Link, Stack } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const ContactPage = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#fff', marginBottom: '2rem' }}>
          Let's Connect
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', marginBottom: '2rem' }}>
          Feel free to reach out to me via email or follow me on social media.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginBottom: '2rem' }}>
          <Link href="mailto:Mohamedabdelmoety3@gmail.com" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff' }}>
            <EmailIcon sx={{ fontSize: 40 }} />
            Email : Mohamedabdelmoety3@gmail.com
          </Link>
          <Link href="tel:+97466366292" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff' }}>
            <PhoneIcon sx={{ fontSize: 40 }} />
            Call : +97466366292
          </Link>
        </Stack>
        <Box>
          <Link href="https://www.linkedin.com/in/mohamed-hossam-427b63187/" target="_blank" rel="noopener" sx={{ marginRight: '10px' }}>
            <LinkedInIcon sx={{ fontSize: 40, color: '#fff' }} />
          </Link>
          <Link href="https://www.instagram.com/mhos237" target="_blank" rel="noopener" sx={{ marginRight: '10px' }}>
            <InstagramIcon sx={{ fontSize: 40, color: '#fff' }} />
          </Link>
          <Link href="https://twitter.com/Mohamed84467336" target="_blank" rel="noopener" sx={{ marginRight: '10px' }}>
            <TwitterIcon sx={{ fontSize: 40, color: '#fff' }} />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener">
            <FacebookIcon sx={{ fontSize: 40, color: '#fff' }} />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
