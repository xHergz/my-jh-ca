import React from 'react';
import { Drawer, List } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { MOBILE_NAVIGATION, NavigationGroup, NavigationId, NavigationLink } from '../../../constants/navigation';
import { useDefaultProps, useRadio } from '../../../utils/hooks';
import CloseButton from '../../buttons/CloseButton';
import NavDrawerLink from './NavDrawerLink';
import NavDrawerGroup from './NavDrawerGroup';

export type NavDrawerProps = {
    open: boolean;
    onClose: () => void;
    currentCollapse?: NavigationId;
};

const NavDrawer: React.FunctionComponent<NavDrawerProps> = (props: NavDrawerProps): JSX.Element => {
    props = useDefaultProps(props, {currentCollapse: undefined});
    const [currentCollapse, setCurrentCollapse] = useRadio(props.currentCollapse);

    return (
        <StyledDrawer open={props.open} onClose={props.onClose}>
            <CloseButton onClick={props.onClose} />
            <List component="nav">
                {
                    MOBILE_NAVIGATION.map(navItem => {
                        if (navItem.type === 'link') {
                            return (
                                <NavDrawerLink
                                    navLink={navItem as NavigationLink}
                                />
                            )
                        }

                        const group = navItem as NavigationGroup;
                        return (
                            <NavDrawerGroup
                                navGroup={group}
                                open={currentCollapse === group.id}
                                onClick={setCurrentCollapse}
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
})(Drawer);

export default NavDrawer;
