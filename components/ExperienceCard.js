import { Box, Typography, Card, CardContent,Grid } from '@mui/material';
import Slider from 'react-slick';
import WorkIcon from '@mui/icons-material/Work';
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
    title: 'Co-Founder & CEO',
    company: 'AdStep',
    duration: 'Sep 2022 - Present · 10 mos',
    location: 'Doha,Qatar',
    skills:
      'React.js · Next.js · Three.js · Adobe Premiere Pro · Communication · Project Management · Adobe Photoshop · Web Design · Flutter · Dart · Mobile Application Development · Python (Programming Language) · JavaScript · Web Development',
    logo: 'https://i.ibb.co/kQ5yRnn/adstep-4.png',
  },
  {
    title: 'Event Coordinator',
    company: 'QUCC',
    duration: 'May 2022 - Mar 2023 · 11 mos',
    location: 'Doha,Qatar',
    Skills:
      'Machine Learning · Adobe Premiere Pro · Communication · Negotiation · Event Planning · Event Management · Adobe Photoshop · Python (Programming Language) · Web Development',
    logo: 'https://i.ibb.co/CJnxDjz/ju-Nrc-Y4-N-400x400.jpg',
  },
  {
    title: 'Media Marketing Specialist',
    company: 'College of Business & Economics- Qatar University',
    duration: 'Sep 2022 - Feb 2023 · 6 mos',
    location: 'Doha,Qatar',
    Skills: 'Advertising · Video Production · Marketing Strategy · Social Media Marketing · Figma · Microsoft Excel · Adobe Premiere Pro · Marketing Management · Adobe Photoshop · Python (Programming Language)',
    logo: 'https://i.ibb.co/M2j5982/QNA-Faculty-Economy-03-04-2023.jpg',
  },
  {
    title: 'Campus Director',
    company: 'Millennium Campus Network (MCN)',
    duration: 'Aug 2022 - Dec 2022 · 5 mos',
    location: 'Doha, Qatar',
    logo: 'https://i.ibb.co/60vhVhp/Untitled-design.png',

  },
  {
    title: 'Astrocon21 Coordinator',
    company: 'Astrocon21',
    duration: 'Dec 2020 - Oct 2021 · 11 mos',
    location: 'Qatar',
    logo: 'https://i.ibb.co/DkJnx48/download.jpg',
  },

  {
    title: 'Administrator',
    company: 'QU Astronomy Club نادي الفلك',
    duration: 'Jun 2018 - Oct 2021 · 3 yrs 5 mos',
    location: 'Qatar University Astronomy Club',
    logo: 'https://i.ibb.co/Q8bDmV6/7d4f9905-3ad6-4a58-a825-f6ad097683c3d012a528-ee66-4272-a1bf-161dc7b3db71.jpg',
  },
  {
    title: 'VP of Marketing',
    company: 'QuToastmasters Club',
    duration: 'Nov 2019 - May 2021 · 1 yr 7 mos',
    location: 'Doha,Qatar', 
    Skills: 'Marketing Management · Public Speaking · Public Relations · Project Management · Adobe Photoshop',
    logo: 'https://i.ibb.co/vQ4CPZJ/Toastmasters-2011.png',
  },
  {
    title: 'Public Relations Intern',
    company: 'Qatar University',
    duration: 'Aug 2019 - Jan 2021 · 1 yr 6 mos',
    location: 'Qatar',
    logo: 'https://i.ibb.co/KDNz2dj/download.png',
  },
  {
    title: 'Graphic Designer',
    company: 'I Believe in Science - أنا أصدق العلم',
    duration: 'Dec 2018 - Jul 2020 · 1 yr 8 mos',
    location: 'Qatar',
    logo: 'https://i.ibb.co/Dkrc4Wp/unnamed.jpg',
  },
];
function ExperienceCard({ title, company, duration, location, skills, logo }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', borderRadius: '10px', overflow: 'hidden' }}>
      <CardContent sx={{ padding: '16px' }}>
        {/* Logo and Title Section */}
        <Box display="flex" alignItems="center" marginBottom={2}>
          {/* Display logo if available, fallback to a generic icon */}
          {logo ? (
            <img src={logo} alt={`${company} logo`} style={{ width: 40, height: 40, borderRadius: '50%', marginRight: '8px' }} />
          ) : (
            <WorkIcon sx={{ marginRight: '8px', fontSize: '40px' }} />
          )}
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
        </Box>

        {/* Company, Duration, and Location Section */}
        <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
          {company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {duration}
        </Typography>
        <Typography variant="body2" color="text.secondary" marginBottom={2}>
          {location}
        </Typography>
        {/* Skills Section */}
        {skills && (
          <Typography variant="body2" color="text.secondary">
            <b>Skills:</b> {skills}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default function ExperienceList() {
  return (
    <Box sx={{ marginTop: '2rem', width: '100%' }}>
      <Typography variant="h4"  sx={{ color: 'white' }} component="div" gutterBottom>
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