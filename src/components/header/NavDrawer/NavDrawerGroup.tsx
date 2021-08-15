import React from 'react';
import { Collapse } from '@material-ui/core';

import { NavigationGroup, NavigationGroupProps, NavigationLink } from '../Navigation';

export type NavDrawerGroupProps = NavigationGroupProps & {};

const NavDrawerGroup: React.FunctionComponent<NavDrawerGroupProps> = (props: NavDrawerGroupProps): JSX.Element => {
    return (
        <NavigationGroup key={props.navGroup.id} navGroup={props.navGroup} open={props.open} onClick={props.onClick}>
            <Collapse in={props.open} timeout='auto' unmountOnExit>
                {props.navGroup.children.map((child) => {
                    return <NavigationLink key={child.id} navLink={child} />;
                })}
            </Collapse>
        </NavigationGroup>
    );
};

export default NavDrawerGroup;
