import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomePage from '../pages/Home';
import HomeIcon from '@mui/icons-material/Home';
import PlaceIcon from '@mui/icons-material/Place';
import ShareIcon from '@mui/icons-material/Share';
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="static" sx={{bgcolor: 'bgcolor.bg'}} >
      <Toolbar>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1, display: 'flex'}}>
        <Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Bodoni Moda', letterSpacing: '-0.00833em', fontSize: '20pt', fontWeight: '300', lineHeight: '1.2', flexGrow: 1, margin: '0', WebkitBoxFlex: '1', overflowY: 'hidden'}} to={"/"}>SMULTRONSTÄLLET</Link>

        </Typography>
        <IconButton edge="end" color="black" onClick={toggleDrawer} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

      </Toolbar>
      <Drawer  anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List sx={{bgcolor: 'bgcolor.bg', height: '100%'}} >
            <Link to={"/"} style={{color: 'black', textDecoration: 'none'}}>
            <ListItem button onClick={toggleDrawer}>
            <HomeIcon/>
              Hem
              </ListItem>
            </Link>
            <Link to={"/platser"} style={{color: 'black', textDecoration: 'none'}}>
          <ListItem button onClick={toggleDrawer}>
            <PlaceIcon/>
            Se fler platser här
          </ListItem>
          </Link>
          <Link to={"/recensioner"} style={{color: 'black', textDecoration: 'none'}}>
          <ListItem button onClick={toggleDrawer}>
            <ShareIcon/>
            Ladda upp din favoritplats
          </ListItem>
          </Link>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
