import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

interface SidebarAdminProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarAdmin: React.FC<SidebarAdminProps> = ({ isOpen, onClose }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List>
        {[
          { name: 'Dashboard', to: '/admin' },
          { name: 'Categories', to: '/categories' },
          { name: 'Send email', to: '/send-email' },
          { name: 'Inbox', to: '/inbox' },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link to={item.to}>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Hihi', 'Hehe', 'Haha'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer open={isOpen} onClose={onClose}>
      {DrawerList}
    </Drawer>
  );
};

export default SidebarAdmin;
