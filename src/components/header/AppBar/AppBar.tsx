import React from 'react';
import { AppBar, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import ToolsIcon from '@material-ui/icons/Gavel';
import HomeIcon from '@material-ui/icons/Home';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles } from '@material-ui/styles';
import NavDrawer from '../NavDrawer';
import { useToggle } from '../../../utils/hooks';
import ToolbarButton from '../../buttons/ToolbarButton';

export type AppBarProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {}

const CustomAppBar: React.FunctionComponent<AppBarProps> = (props: AppBarProps): JSX.Element => {
    const [drawerOpen, toggleDrawer] = useToggle(false);
    return (
        <>
            <AppBar position="relative" color="primary" className={props.className}>
            <StyledToolbar>
                <ToolbarButton icon={<HomeIcon />} text='Home' onClick={toggleDrawer} />
                <ToolbarButton icon={<AppsIcon />} text='Apps' onClick={toggleDrawer} />
                <ToolbarButton icon={<ToolsIcon />} text='Tools' onClick={toggleDrawer} />
                <ToolbarButton icon={<SettingsIcon />} text='Settings' onClick={toggleDrawer} />
                <ToolbarButton icon={<MoreIcon />} text='More' onClick={toggleDrawer} />
            </StyledToolbar>
            </AppBar>
            <NavDrawer
                open={drawerOpen}
                onClose={toggleDrawer}
            />
        </>
    );
}

const StyledToolbar = withStyles({
  root: {
    justifyContent: 'space-between',
    minHeight: 0
  }
})(Toolbar);

export default CustomAppBar;
