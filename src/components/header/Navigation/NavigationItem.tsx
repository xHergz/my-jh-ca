import React, { RefObject } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { NavigationItem } from '../../../constants/navigation';

export type NavigationItemProps = React.PropsWithChildren<{
    navItem: NavigationItem;
    onClick?: () => void;
    classes?: {
        root?: string;
        icon?: string;
    };
    ref?: React.ForwardedRef<HTMLDivElement>;
}>;

const NavigationItemComponent: React.FunctionComponent<NavigationItemProps> = React.forwardRef<
    HTMLDivElement,
    NavigationItemProps
>((props, ref): JSX.Element => {
    return (
        <ListItem ref={ref} button className={props.classes?.root} onClick={props.onClick}>
            <StyledListItemIcon className={props.classes?.icon}>{props.navItem.icon}</StyledListItemIcon>
            <ListItemText primary={props.navItem.text} />
            {props.children}
        </ListItem>
    );
});
NavigationItemComponent.displayName = 'NavigationItem';

const StyledListItemIcon = withStyles({
    root: {
        minWidth: '24px',
        marginRight: '8px',
    },
})(ListItemIcon);

export default NavigationItemComponent;
