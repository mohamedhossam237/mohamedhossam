import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';

const projectData = [
  {
    title: 'Titanic',
    description: 'The sinking of the Titanic is one of the most infamous shipwrecks in history. On April 15, 1912, during her maiden voyage, the widely considered “unsinkable” RMS Titanic sank after colliding with an iceberg.Unfortunately, there weren’t enough lifeboats for everyone onboard, resulting in the death of 1502 out of 2224 passengers and crew. While there was some element of luck involved in surviving, it seems some groups of people were more likely to survive than others.it is predictive model that answers the question: “what sorts of people were more likely to survive?” using passenger data (ie name, age, gender, socio-economic class, etc).',
    image: 'https://media.npr.org/assets/img/2012/03/29/titanic_custom-fc6a03aedd8e562d780ecf9b9a8a947d4dcbf163-s1100-c50.jpg', 
    link: 'https://colab.research.google.com/drive/1Nt6Q8mbBD9K_gk_GbOsjcyhTZYpoCTQ5?usp=sharing' 
  },
  {
    title: 'Event Recommendation System',
    description: 'This project aims to enhance our event recommendation system by analyzing user interaction data, demographic details, and engagement metrics within our app. By studying the events users have interacted with—through responses, views, or clicks—we seek to uncover patterns that can inform better event suggestions. The goal is to create a more personalized and effective recommendation engine, leveraging algorithms to match users with events they are likely to enjoy, based on past behavior and demographic information. This initiative is key to improving user experience, increasing engagement, and gaining deeper insights into user preferences.',
    image: 'https://www.parishrenewal.com.au/wp-content/uploads/2019/04/Events.jpg', 
    link: 'https://colab.research.google.com/drive/1zdvxEKY8BWGzPTz8AoUU5gbpBH4AKax4?usp=sharing' 
  },
  {
    title: 'Fake News Detector',
    description: 'The proliferation of fake news has become a significant challenge in the digital age, undermining public discourse, swaying public opinion, and eroding trust in media. This project aims to address this issue by developing a machine learning-based system capable of identifying and flagging unreliable news articles. By leveraging natural language processing (NLP) and machine learning techniques, the system will analyze the content, context, and metadata of news articles to assess their reliability and accuracy.',
    image: 'https://i.ibb.co/pZ4kGZk/download-1.png', 
    link: 'https://colab.research.google.com/drive/15mtJWuCBUrFEuXsNxLfeJVl_-TrmQGhd?usp=sharing' 
  },
  
  {
    title: ' Predicting Heart Disease',
    description: 'Heart disease remains the leading cause of mortality in developed countries, posing a significant public health challenge. This project aims to leverage machine learning technologies to develop a predictive system capable of identifying individuals at high risk of heart disease, including heart attacks and strokes. By analyzing a wide range of health data and lifestyle factors, the system will provide early warnings and personalized recommendations for prevention strategies, thus contributing to reducing the incidence of these life-threatening conditions.',
    image: 'https://www.uab.edu/news/images/2018/HIPK2.jpg', 
    link: 'https://colab.research.google.com/drive/1xXq5kYxjDsOojBZfRmzMSU3CCDhqqwOm?usp=sharing' 
  },
];
const machinelearningPage = () => {
  return (
    <> <Head>
    <title>Machine Learning Projects</title>
    <link rel="icon" href="https://i.ibb.co/gtXtT7v/My-logo-removebg-preview.png" /> {/* Replace "/favicon.ico" with the path to your logo image */}
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
                width: 345, // Set a fixed width
                height: 580, // Set a fixed height to make all cards the same
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                margin: 'auto' // Center the card in the grid cell
              }}
            >
              <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ height: 194,objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ color: '#333' }}>
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
    </Box>
    </>
  );
};

export default machinelearningPage;