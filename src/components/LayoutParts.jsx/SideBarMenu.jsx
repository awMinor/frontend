import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AccountTree } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';


export default function SideBarMenu() {
  return (
    <React.Fragment>
      <ListItemButton component={RouterLink} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={RouterLink} to="/projects">
        <ListItemIcon>
          <AccountTree />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItemButton>
    </React.Fragment>
  );
}
