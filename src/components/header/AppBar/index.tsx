import React from 'react';
import { AppBar, IconButton, Paper, Toolbar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import ToolsIcon from '@material-ui/icons/Gavel';
import { makeStyles } from '@material-ui/styles';

export type AppBarProps = React.HTMLAttributes<HTMLDivElement> & {}

const useStyles = makeStyles({

});

const CustomAppBar: React.FunctionComponent<AppBarProps> = (props: AppBarProps): JSX.Element => {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <ToolsIcon />
        </IconButton>
      </Toolbar>
      <Paper />
    </AppBar>
  );
}

export default CustomAppBar;
