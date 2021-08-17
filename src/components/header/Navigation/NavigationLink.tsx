import React from 'react';

import { NavigationLinkItem } from '../../../constants/navigation';
import NavigationItem, { NavigationItemProps } from './NavigationItem';
import { UnformattedLink } from '../../text';

export type NavigationLinkProps = Pick<NavigationItemProps, 'classes'> & {
    navLink: NavigationLinkItem;
};

const NavigationLink: React.FunctionComponent<NavigationLinkProps> = (props: NavigationLinkProps): JSX.Element => {
    return (
        <UnformattedLink href={props.navLink.link} key={props.navLink.id}>
            <NavigationItem navItem={props.navLink} classes={props.classes} />
        </UnformattedLink>
    );
};

export default NavigationLink;
