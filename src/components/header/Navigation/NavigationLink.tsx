import React from 'react';

import { NavigationLinkItem } from '../../../constants/navigation';
import NavigationItem from './NavigationItem';

export type NavigationLinkProps = {
    navLink: NavigationLinkItem
}

const NavigationLink: React.FunctionComponent<NavigationLinkProps> = (props: NavigationLinkProps): JSX.Element => {
    return (
        <NavigationItem navItem={props.navLink} />
    );
}

export default NavigationLink;
