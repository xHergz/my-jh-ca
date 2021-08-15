import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { NavigationItem } from '../../../constants/navigation';

export type NavDrawerItemProps = React.PropsWithChildren<{
    navItem: NavigationItem;
    onClick?: () => void;
}>;

const NavDrawerItem: React.FunctionComponent<NavDrawerItemProps> = (props: NavDrawerItemProps): JSX.Element => {
    return (
        <ListItem button onClick={props.onClick}>
            <StyledListItemIcon>
                {props.navItem.icon}
            </StyledListItemIcon>
            <ListItemText primary={props.navItem.text} />
            {props.children}
        </ListItem>
    );
}

const StyledListItemIcon = withStyles({
    root: {
        minWidth: '24px',
        marginRight: '8px',
    }
})(ListItemIcon);

export default NavDrawerItem;
