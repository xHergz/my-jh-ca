import React from 'react';

import { NavigationLinkItem } from '../../../constants/navigation';
import NavDrawerItem from './NavDrawerItem';

export type NavDrawerLinkProps = {
    navLink: NavigationLinkItem
}

const NavDrawerLink: React.FunctionComponent<NavDrawerLinkProps> = (props: NavDrawerLinkProps): JSX.Element => {
    return (
        <NavDrawerItem navItem={props.navLink} />
    );
}

export default NavDrawerLink;
