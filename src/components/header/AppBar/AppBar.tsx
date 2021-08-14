import React from 'react';
import { AppBar, IconButton, Paper, Toolbar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import ToolsIcon from '@material-ui/icons/Gavel';
import { makeStyles, withStyles } from '@material-ui/styles';

export type AppBarProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {}

const CustomAppBar: React.FunctionComponent<AppBarProps> = (props: AppBarProps): JSX.Element => {
  return (
    <AppBar position="relative" color="primary" className={props.className}>
      <CustomToolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <ToolsIcon />
        </IconButton>
      </CustomToolbar>
    </AppBar>
  );
}

const CustomToolbar = withStyles({
  root: {
    minHeight: 0
  }
})(Toolbar);

export default CustomAppBar;
