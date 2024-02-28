import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const ContactForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Name" variant="outlined" />
      <TextField label="Email" variant="outlined" />
      <TextField
        label="Message"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
