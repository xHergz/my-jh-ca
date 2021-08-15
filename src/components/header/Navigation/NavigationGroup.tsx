import React from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import { NavigationGroupItem, NavigationGroupId } from '../../../constants/navigation';
import NavigationItem, { NavigationItemProps } from './NavigationItem';

export type NavigationGroupProps = Pick<NavigationItemProps, 'classes' | 'ref'> &
    React.PropsWithChildren<{
        navGroup: NavigationGroupItem;
        open: boolean;
        onClick: (id: NavigationGroupId | null) => void;
    }>;

const NavigationGroup: React.FunctionComponent<NavigationGroupProps> = React.forwardRef<
    HTMLDivElement,
    NavigationGroupProps
>((props, ref): JSX.Element => {
    const toggleGroup = (): void => {
        if (props.open) {
            return props.onClick(null);
        }
        return props.onClick(props.navGroup.id as NavigationGroupId);
    };

    return (
        <>
            <NavigationItem ref={ref} {...props} navItem={props.navGroup} onClick={toggleGroup}>
                {props.open ? <ExpandLess /> : <ExpandMore />}
            </NavigationItem>
            {props.children}
        </>
    );
});

export default NavigationGroup;
