import React from 'react';
import { Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore} from '@material-ui/icons';

import { NavigationGroup, NavigationId } from '../../../constants/navigation';
import NavDrawerItem from './NavDrawerItem';
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
            <NavDrawerItem navItem={props.navGroup} onClick={toggleGroup}>
                {props.open ? <ExpandLess /> : <ExpandMore />}
            </NavDrawerItem>
            <Collapse in={props.open} timeout="auto" unmountOnExit>
                {
                    props.navGroup.children.map(child => {
                        return (
                            <NavDrawerLink
                                key={child.id}
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
