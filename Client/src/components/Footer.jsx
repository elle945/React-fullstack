import React from 'react';
import { Typography, AppBar, Toolbar, Container } from '@mui/material';

function Footer() {
    return (




      <div style={{position: "static", backgroundColor: "#f0efab", bottom: "0", height: "11.5vh"}}>

        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body1" color="black" >
            &copy; Smultronstället 2023
          </Typography>
        </Toolbar>
      </div>
    );
  }

  export default Footer;
