import React from 'react';

import { NavigationLinkItem } from '../../../constants/navigation';
import NavigationItem, { NavigationItemProps } from './NavigationItem';

export type NavigationLinkProps = Pick<NavigationItemProps, 'classes'> & {
    navLink: NavigationLinkItem;
};

const NavigationLink: React.FunctionComponent<NavigationLinkProps> = (props: NavigationLinkProps): JSX.Element => {
    return <NavigationItem navItem={props.navLink} classes={props.classes} />;
};

export default NavigationLink;
