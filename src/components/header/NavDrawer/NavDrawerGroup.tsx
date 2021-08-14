import React from 'react';
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore} from '@material-ui/icons';

import { NavigationGroup, NavigationId } from '../../../constants/navigation';
import NavDrawerLink from './NavDrawerLink';

export type NavDrawerGroupProps = {
    navGroup: NavigationGroup;
    open: boolean;
    onClick: (id: NavigationId | null) => void;
}

const NavDrawerGroup: React.FunctionComponent<NavDrawerGroupProps> = (props: NavDrawerGroupProps): JSX.Element => {
    const toggleGroup = (): void => {
        if (props.open) {
            return props.onClick(null);
        }
        return props.onClick(props.navGroup.id);
    };

    return (
        <>
            <ListItem button onClick={toggleGroup}>
                <ListItemIcon>
                    {props.navGroup.icon}
                </ListItemIcon>
                <ListItemText primary={props.navGroup.text} />
                {props.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={props.open} timeout="auto" unmountOnExit>
                {
                    props.navGroup.children.map(child => {
                        return (
                            <NavDrawerLink
                                navLink={child}
                            />
                        )
                    })
                }
            </Collapse>
        </>
    );
}

export default NavDrawerGroup;
