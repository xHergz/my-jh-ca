import React from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import CloseIcon from '@material-ui/icons/Close';
import ToolsIcon from '@material-ui/icons/Gavel';

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
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ToolsIcon />
          </ListItemIcon>
          <ListItemText primary="Tools" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}

export default NavDrawer;
