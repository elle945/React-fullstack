import React from 'react';
import { Typography, AppBar, Toolbar, Container } from '@mui/material';

function Footer() {
    return (


      

      <AppBar position="static" style={{position: 'fixed', bottom: 0, width: "100%"}} sx={{bgcolor: 'bgcolor.bg'}}>

        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body1" color="black" >
            &copy; Smultronstället 2023
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  export default Footer;
