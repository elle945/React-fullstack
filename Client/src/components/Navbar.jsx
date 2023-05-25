import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomePage from '../pages/Home';
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Smultronstället
        </Typography>
        <IconButton edge="end" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

      </Toolbar>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={toggleDrawer}>
            <Link to={"/"}>Hem</Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <Link to={"/platser"}>Platser</Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <Link to={"/recension"}>Lämna recension</Link>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
