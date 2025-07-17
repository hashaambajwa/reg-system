'use client';

import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 260;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { width: drawerWidth, boxSizing: 'border-box' } }}
    >
      <List>
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component="a" href="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
