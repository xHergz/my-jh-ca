import React from 'react';

import { NavigationLink } from '../../../constants/navigation';
import NavDrawerItem from './NavDrawerItem';

export type NavDrawerLinkProps = {
    navLink: NavigationLink
}

const NavDrawerLink: React.FunctionComponent<NavDrawerLinkProps> = (props: NavDrawerLinkProps): JSX.Element => {
    return (
        <NavDrawerItem navItem={props.navLink} />
    );
}

export default NavDrawerLink;
