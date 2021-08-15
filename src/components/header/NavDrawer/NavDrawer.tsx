import React from 'react';
import { SwipeableDrawer, List } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { MOBILE_NAVIGATION, NavigationGroup, NavigationGroupId, NavigationLink, NavigationLinkId } from '../../../constants/navigation';
import CloseButton from '../../buttons/CloseButton';
import NavDrawerLink from './NavDrawerLink';
import NavDrawerGroup from './NavDrawerGroup';

export type NavDrawerProps = {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
    onCollapseChange: (id: NavigationGroupId | null) => void;
    currentCollapse: NavigationGroupId | null;
};

const NavDrawer: React.FunctionComponent<NavDrawerProps> = (props: NavDrawerProps): JSX.Element => {
    return (
        <StyledDrawer open={props.open} onClose={props.onClose} onOpen={props.onOpen}>
            <CloseButton onClick={props.onClose} />
            <List component="nav">
                {
                    MOBILE_NAVIGATION.map(navItem => {
                        if (navItem.type === 'link') {
                            return (
                                <NavDrawerLink
                                    key={navItem.id}
                                    navLink={navItem as NavigationLink}
                                />
                            );
                        } else if (navItem.id === 'more') {
                            const more = navItem as NavigationGroup;
                            return more.children.map(child => {
                                return (
                                    <NavDrawerLink
                                        key={child.id}
                                        navLink={child}
                                    />
                                );
                            });
                        }

                        const group = navItem as NavigationGroup;
                        return (
                            <NavDrawerGroup
                                key={navItem.id}
                                navGroup={group}
                                open={props.currentCollapse === group.id}
                                onClick={props.onCollapseChange}
                            />
                        )
                    })
                }
            </List>
        </StyledDrawer>
    );
};

export const StyledDrawer = withStyles({
    paper: {
        padding: '8px',
        width: '75vw'
    }
})(SwipeableDrawer);

export default NavDrawer;
