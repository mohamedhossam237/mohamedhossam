import { Box, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const projects = [
  {
    title: 'EduShare',
    company: 'AdStep',
    Linke: "https://edu-share.vercel.app/",
    skills:
      'React.js · Next.js · Three.js · Web Design · Flutter · Dart · Mobile Application Development ·  JavaScript · Web Development',
    logo: 'https://i.ibb.co/kQ5yRnn/adstep-4.png',
  },
  {
    title: 'Masar',
    company: 'AdStep',
    location: '',
    Linke: "",
    skills:
      'React.js · Next.js · Three.js · Web Design · Flutter · Dart · Mobile Application Development ·  JavaScript · Web Development',
    logo: 'https://i.ibb.co/kQ5yRnn/adstep-4.png',
  },
  {
    title: 'School Alert',
    company: 'AdStep',
    Linke: "",
    skills:
      'React.js · Next.js · Three.js · Web Design · Flutter · Dart · Mobile Application Development ·  JavaScript · Web Development',
    logo: 'https://i.ibb.co/kQ5yRnn/adstep-4.png',
  },
  {
    title: 'Rayg',
    company: 'AdStep',
    location: '',
    Linke: "",
    skills:
      'React.js · Next.js · Three.js · Web Design · Flutter · Dart · Mobile Application Development ·  JavaScript · Web Development',
    logo: 'https://i.ibb.co/kQ5yRnn/adstep-4.png',
  },
  {
    title: 'FoodieHub',
    company: 'AdStep',
    location: '',
    Linke: "",
    skills:
      'React.js · Next.js · Three.js · Web Design · Flutter · Dart · Mobile Application Development ·  JavaScript · Web Development',
    logo: 'https://i.ibb.co/kQ5yRnn/adstep-4.png',
  },
  {
    title: 'Dlni',
    company: 'AdStep',
    location: '',
    Linke: "",
    skills:
      'React.js · Next.js · Three.js · Web Design · Flutter · Dart · Mobile Application Development ·  JavaScript · Web Development',
    logo: 'https://i.ibb.co/kQ5yRnn/adstep-4.png',
  },
  {
    title: 'Monqz',
    company: 'AdStep',
    location: '',
    Linke: "",
    skills:
      'React.js · Next.js · Three.js · Web Design · Flutter · Dart · Mobile Application Development ·  JavaScript · Web Development',
    logo: 'https://i.ibb.co/kQ5yRnn/adstep-4.png',
  },
];
export default function ProjectCard({ project, index }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <CodeIcon />
          <Typography variant="h5" component="div" gutterBottom>
            {`Project ${index + 1}`}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {project}
        </Typography>
      </CardContent>
    </Card>
  );
}
