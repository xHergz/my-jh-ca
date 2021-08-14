import React from 'react';
import { Collapse, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import ToolsIcon from '@material-ui/icons/Gavel';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NotesIcon from '@material-ui/icons/Description';
import { withStyles } from '@material-ui/styles';

import CloseButton from '../../buttons/CloseButton';
import { useToggle, useVisibility } from '../../../utils/hooks';

export type NavDrawerProps = {
    open: boolean;
    onClose: () => void;
};

const NavDrawer: React.FunctionComponent<NavDrawerProps> = (props: NavDrawerProps): JSX.Element => {
    const [appsOpen, toggleApps] = useToggle(false);
    const [toolsOpen, openTools, closeTools] = useVisibility(false);

    return (
        <StyledDrawer open={props.open} onClose={props.onClose}>
            <CloseButton onClick={props.onClose} />
            <List component="nav">
                <ListItem button onClick={toggleApps}>
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
        </StyledDrawer>
    );
};

export const StyledDrawer = withStyles({
    paper: {
        padding: '8px',
        width: '75vw'
    }
})(Drawer);

export default NavDrawer;
