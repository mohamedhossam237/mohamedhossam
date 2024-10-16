import Slider from 'react-slick';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Show up to 4 cards at a time
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280, // Adjust for large devices
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024, // Adjust for medium devices
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600, // Adjust for small devices
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const experiences = [
  {
    title: 'Software Engineer',
    company: 'AppLab Qatar',
    duration: 'March 2024 - Present',
    location: 'Doha,Qatar',
    skills:
      'Microsoft Azure · Copilot Studio · Python · React  · JavaScript  · ChatBot Development · Power Automate · LLM Models Traning · RAG · FineTuning · OpenAI Functions and tools · Indexing · Docker · Api Design and development  · Flask · FastApi',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNE0uTI12BDxkmp9XZoYxrk_g5pc7eofqUTy4fformAdTbK8Q4ppfBg0LEFrePLZu7RQY&usqp=CAU',
  },
  {
    title: 'Co-Founder & CEO',
    company: 'AdStep',
    duration: 'Sep 2022 - Present',
    location: 'Doha,Qatar',
    skills:
      'React.js · Next.js · Three.js · Adobe Premiere Pro · Communication · Project Management · Adobe Photoshop · Web Design · Flutter · Dart · Mobile Application Development · Python (Programming Language) · JavaScript · Web Development · Project Management',
    logo: 'https://i.ibb.co/kQ5yRnn/adstep-4.png',
  },
  {
    title: 'Event Coordinator',
    company: 'QUCC',
    duration: 'May 2022 - Mar 2023',
    location: 'Doha,Qatar',
    skills:
      'Machine Learning · Adobe Premiere Pro · Communication · Negotiation · Event Planning · Event Management · Adobe Photoshop · Python (Programming Language) · Web Development',
    logo: 'https://i.ibb.co/CJnxDjz/ju-Nrc-Y4-N-400x400.jpg',
  },
  {
    title: 'Media Marketing Specialist',
    company: 'College of Business & Economics- Qatar University',
    duration: 'Sep 2022 - Feb 2023',
    location: 'Doha,Qatar',
    skills: 
        'Advertising · Video Production · Marketing Strategy · Social Media Marketing · Figma · Microsoft Excel · Adobe Premiere Pro · Marketing Management · Adobe Photoshop · Python (Programming Language)',
    logo: 'https://i.ibb.co/M2j5982/QNA-Faculty-Economy-03-04-2023.jpg',
  },
  {
    title: 'Campus Director',
    company: 'Millennium Campus Network (MCN)',
    skills: 'Marketing Management · Project Management · Conceptual thinking · Event Management · Teamwork',
    duration: 'Aug 2022 - Dec 2022',
    location: 'Doha, Qatar',
    logo: 'https://i.ibb.co/60vhVhp/Untitled-design.png',

  },
  {
    title: 'Astrocon21 Coordinator',
    company: 'Astrocon21',
    duration: 'Dec 2020 - Oct 2021',
    location: 'Qatar',
    skills: 'Marketing Management · Project Management · Marketing Strategy ·  Conceptual thinking · Event Management · Teamwork · Adaptability· Public Relations · Advertising ·  Problem Solving',
    logo: 'https://i.ibb.co/DkJnx48/download.jpg',
  },

  {
    title: 'Administrator',
    company: 'QU Astronomy Club نادي الفلك',
    duration: 'Jun 2018 - Oct 2021',
    location: 'Qatar University Astronomy Club',
    skills: 'Marketing Management · Public Relations · Leadership · Project Management · Conceptual thinking · Event Management · Adaptability · Teamwork',
    logo: 'https://i.ibb.co/Q8bDmV6/7d4f9905-3ad6-4a58-a825-f6ad097683c3d012a528-ee66-4272-a1bf-161dc7b3db71.jpg',
  },
  {
    title: 'VP of Marketing',
    company: 'QuToastmasters Club',
    duration: 'Nov 2019 - May 2021',
    location: 'Doha,Qatar', 
    skills: 'Marketing Management · Public Speaking · Public Relations · Leadership · Project Management · Adobe Photoshop · Conceptual thinking',
    logo: 'https://i.ibb.co/vQ4CPZJ/Toastmasters-2011.png',
  },
  {
    title: 'Public Relations Intern',
    company: 'Qatar University',
    duration: 'Aug 2019 - Jan 2021',
    location: 'Qatar',
    skills: 
        'Advertising · Video Production · Marketing Strategy · Social Media Marketing · Figma · Adobe Premiere Pro · Adobe Photoshop · Photography · Videography · Problem Solving ',
    logo: 'https://i.ibb.co/KDNz2dj/download.png',
  },
  {
    title: 'Graphic Designer',
    company: 'I Believe in Science - أنا أصدق العلم',
    duration: 'Dec 2018 - Jul 2020',
    skills: 
        'Advertising · Figma · Adobe Photoshop  · Videography · Documentation · Time management · Teamwork ',
    location: 'Qatar',
    logo: 'https://i.ibb.co/Dkrc4Wp/unnamed.jpg',
  },
];
function ExperienceCard({ title, company, duration, location, skills, logo }) {
  const skillSet = skills ? skills.split(' · ') : [];

  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{
        maxWidth: 345,
        m: '1rem',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
      }}>
        <CardContent sx={{ p: '16px' }}>
          <Box display="flex" alignItems="center" mb={2}>
            <Box sx={{ p: '2px', background: 'linear-gradient(145deg, #e0e0e0, #ffffff)', borderRadius: '50%', display: 'flex' }}>
              {logo ? (
                <CardMedia
                  component="img"
                  image={logo}
                  alt={`${company} logo`}
                  sx={{ width: 40, height: 40, borderRadius: '50%' }}
                />
              ) : (
                <WorkIcon sx={{ fontSize: '40px' }} />
              )}
            </Box>
            <Typography variant="h6" gutterBottom sx={{ ml: '8px', fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
            {company}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {duration}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            {location}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {skillSet.map((skill, index) => (
              <Chip key={index} label={skill} variant="outlined" size="small" sx={{ mb: 1 }} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
export default function ExperienceList() {
  return (
    <Box sx={{ marginTop: '2rem', width: '100%' }}>
      <Typography variant="h4"    sx={{color: 'white', fontFamily: 'Monoton, cursive' }} component="div" gutterBottom>
        Experience
      </Typography>
      <Slider {...sliderSettings}>
        {experiences.map((experience, index) => (
          <div key={index}> {/* Wrap ExperienceCard in a div for Slider to work correctly */}
            <ExperienceCard
              title={experience.title}
              company={experience.company}
              duration={experience.duration}
              location={experience.location}
              skills={experience.skills}
              logo={experience.logo}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
}