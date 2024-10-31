import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Chip, Stack } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';

const projectData = [
  {
    title: 'Maktabi Botaina',
    description: 'Maktabi Botaina is an AI-powered chatbot designed to enhance internal communications within Qatar Foundation. Developed using OpenAI models and Microsoft Azure services, the chatbot leverages Python APIs to facilitate seamless interactions. The integration of Copilot Studio enables AI-driven code suggestions, significantly improving development efficiency. Additionally, Azure Functions and SQL Database are utilized for cloud deployment and performance optimization, ensuring a robust and responsive user experience.',
    image: 'https://i.ibb.co/0QW9pV4/Screenshot-2024-10-31-134258.png', 
    link: 'https://www.qf.org.qa/',
    skills: 'Python · OpenAI · Microsoft Azure · SQL · API Design · Chatbot Development',
  },
  {
    title: 'Event Recommendation System',
    description: 'This project aims to enhance our event recommendation system by analyzing user interaction data, demographic details, and engagement metrics within our app. By studying the events users have interacted with—through responses, views, or clicks—we seek to uncover patterns that can inform better event suggestions. The goal is to create a more personalized and effective recommendation engine, leveraging algorithms to match users with events they are likely to enjoy, based on past behavior and demographic information.',
    image: 'https://t4.ftcdn.net/jpg/02/16/94/65/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7.jpg',
    link: 'https://colab.research.google.com/drive/1zdvxEKY8BWGzPTz8AoUU5gbpBH4AKax4?usp=sharing',
    skills: 'Machine Learning · Data Analysis · Recommendation Engine · Python',
  },
  {
    title: 'Fake News Detector',
    description: 'The proliferation of fake news has become a significant challenge in the digital age, undermining public discourse, swaying public opinion, and eroding trust in media. This project aims to address this issue by developing a machine learning-based system capable of identifying and flagging unreliable news articles. By leveraging natural language processing (NLP) and machine learning techniques, the system will analyze the content, context, and metadata of news articles to assess their reliability and accuracy.',
    image: 'https://i.ibb.co/pZ4kGZk/download-1.png',
    link: 'https://colab.research.google.com/drive/15mtJWuCBUrFEuXsNxLfeJVl_-TrmQGhd?usp=sharing',
    skills: 'NLP · Machine Learning · Python · Data Analysis',
  },
  {
    title: 'Predicting Heart Disease',
    description: 'Heart disease remains the leading cause of mortality in developed countries, posing a significant public health challenge. This project aims to leverage machine learning technologies to develop a predictive system capable of identifying individuals at high risk of heart disease, including heart attacks and strokes. By analyzing a wide range of health data and lifestyle factors, the system will provide early warnings and personalized recommendations for prevention strategies, thus contributing to reducing the incidence of these life-threatening conditions.',
    image: 'https://www.uab.edu/news/images/2018/HIPK2.jpg',
    link: 'https://colab.research.google.com/drive/1xXq5kYxjDsOojBZfRmzMSU3CCDhqqwOm?usp=sharing',
    skills: 'Machine Learning · Health Data · Python · Predictive Analytics',
  },
];

const machinelearningPage = () => {
  return (
    <>
      <Head>
        <title>Machine Learning Projects</title>
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    m: 2,
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    '&:hover': {
                      boxShadow: '0 16px 32px rgba(0,0,0,0.25)',
                    },
                  }}
                >
                  <CardActionArea href={project.link} target="_blank" rel="noopener noreferrer">
                    <CardMedia
                      component="img"
                      height="194"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
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
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default machinelearningPage;
