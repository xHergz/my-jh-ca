import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { NavigationLink } from '../../../constants/navigation';

export type NavDrawerLinkProps = {
    navLink: NavigationLink
}

const NavDrawerLink: React.FunctionComponent<NavDrawerLinkProps> = (props: NavDrawerLinkProps): JSX.Element => {
    return (
        <ListItem button>
            <ListItemIcon>
                {props.navLink.icon}
            </ListItemIcon>
            <ListItemText primary={props.navLink.text} />
        </ListItem>
    );
}

export default NavDrawerLink;
