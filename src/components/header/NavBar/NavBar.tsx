import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export type NavBarProps = React.HTMLAttributes<HTMLDivElement> & {}

const NavBar: React.FunctionComponent<NavBarProps> = (props: NavBarProps): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
