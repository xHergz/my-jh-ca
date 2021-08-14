import React from 'react';
import { Collapse, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import CloseIcon from '@material-ui/icons/Close';
import ToolsIcon from '@material-ui/icons/Gavel';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NotesIcon from '@material-ui/icons/Description'

import { useVisibility } from '../../../utils/hooks';

export type NavDrawerProps = {
  open: boolean;
  onClose: () => void;
}

const NavDrawer: React.FunctionComponent<NavDrawerProps> = (props: NavDrawerProps): JSX.Element => {
  const [appsOpen, openApps, closeApps] = useVisibility(false);
  const [toolsOpen, openTools, closeTools] = useVisibility(false);

  return (
    <Drawer open={props.open} onClose={props.onClose}>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <List
        component="nav"
      >
        <ListItem button>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Apps" />
          {appsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={appsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <NotesIcon />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <ToolsIcon />
          </ListItemIcon>
          <ListItemText primary="Tools" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default NavDrawer;
