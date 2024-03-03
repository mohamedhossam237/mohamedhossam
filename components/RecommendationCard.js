import React from 'react';
import { Card, CardContent, Typography, Box, useTheme, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import Slider from 'react-slick';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const recommendations = [
  {
    text: 'As a lecturer at Qatar University, I have had the pleasure of teaching Mohamed Hossam and supervising his senior graduation project, EDUSHARE. Mohamed is an excellent student and a huge asset to any university or business. His dedication to his studies is evident, as he is passionate about computers, consistently receiving the highest grades in his courses and projects. Beyond academics, Mohamed is an active member of society, often involved in initiatives and competitions related to technology and coding. His proactive engagement and outstanding performance make him highly recommendable without reservation.',
    author: 'Dr. Zeyad Ali',
    enterprise: 'College of Engineering- Qatar University'
  },
  
  {
    text: 'Mohamed has effectively performed tasks such as supporting as a graphic designer to provide a unified visual identity to the College of Business & Economics, media coverage for events, developing new initiatives like "My Journey" and "Let Talk About Marketing", and serving on the organizing committees for most of the CBE events. He is one of the best students and a team player, with the right knowledge, skills, and attitude for his professional career, and will be a valuable asset wherever he serves.',
    author: 'Dr. Dalia Abdelrahman Farrag',
    enterprise: 'College of Business & Economics- Qatar University'
  },
  {
    text: 'Mohamed, showed high competency level in performing these duties, with excellent communication skills and attitude. I enjoyed working with Mohamed and being one of my great team members. He is a self-motivational driven, with eagerness to learn and excel. He has proven to be an excellent team player in hosting events. He was successfully able to manage multi tasks related to communication and engagement activities.',
    author: 'Mrs. Amani A. Othman',
    enterprise: 'Office of Vice President for Research and Graduate Studies'
  },
  
  {
    text: 'During his time with us, Mr. Abdelmoety showed exemplary enthusiasm, dedication and discipline, we therefore strongly recommend him for your consideration.',
    author: 'Mr. Issam Fawaz',
    enterprise: 'I Believe in Science Foundation'
  },
];


function RecommendationCard({ recommendation }) {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card sx={{
        maxWidth: 345,
        m: '1rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)' },
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',

      }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <StarIcon sx={{ color: '#FFD700', mr: '8px' }} />
            <Typography variant="h6" component="div" gutterBottom fontWeight="medium">
              {recommendation.author}
            </Typography>
          </Box>
          <Typography variant="subtitle2" component="div" marginBottom={2} fontStyle="italic">
            {recommendation.enterprise}
          </Typography>
          <Typography variant="body2" component="p" sx={{ textAlign: 'justify', fontSize: '0.875rem' }}>
            {recommendation.text}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function RecommendationsList() {
  return (
    <Box sx={{ marginTop: '2rem', width: '100%' }}>
      <Typography variant="h4"   sx={{color: 'white', fontFamily: 'Monoton, cursive' }} component="div" gutterBottom>
        Recommendations
      </Typography>
      <Slider {...sliderSettings}>
      {recommendations.map((recommendation, index) => (
          <Grid item key={index}>
            <RecommendationCard recommendation={recommendation} index={index} />
          </Grid>
        ))}
      </Slider>
    </Box>
  );
}