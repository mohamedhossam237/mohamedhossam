import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography, AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { name: 'Home', url: '/' },
    { name: 'Web Development', url: '/WebDevelopment' },
    { name: 'Mobile Development', url: '/mobileDevelopment' },
    { name: 'Machine Learning', url: '/machinelearning' },
    { name: 'Graphic Design', url: '/graphicDesign' },
    { name: 'Video Editing', url: '/videoEditing' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Contact', url: '/contact' },
  ];

  // Assuming the logo image is located in your public folder or accessible via URL
  const logoUrl = "https://i.ibb.co/gtXtT7v/My-logo-removebg-preview.png"; // Change this to your actual logo path

  return (
    <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(10px)', backgroundColor: '#00000050' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={logoUrl} alt="Logo" style={{ height: '70px', marginRight: '10px' }} />
          <Typography variant="h6" component="div" sx={{ color: 'white' }}>
            Mohamed Hossam
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Link key={page.name} href={page.url} passHref>
              <Button color="inherit" sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Link href={page.url} passHref>
                  <Typography textAlign="center">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
