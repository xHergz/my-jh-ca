import React, { useState } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { useToggle } from '../../../utils/hooks';
import { MOBILE_NAVIGATION, NavigationGroupId } from '../../../constants/navigation';
import NavDrawer from '../NavDrawer';
import AppBarButton from './AppBarButton';

export type AppBarProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {}

const CustomAppBar: React.FunctionComponent<AppBarProps> = (props: AppBarProps): JSX.Element => {
    const [drawerOpen, toggleDrawer] = useToggle(false);
    const [currentDrawerOption, setCurrentDrawerOption] = useState<NavigationGroupId | null>(null);

    const openDrawer = (id: NavigationGroupId | null): void => {
        setCurrentDrawerOption(id);
        toggleDrawer();
    };

    return (
        <>
            <AppBar position="relative" color="primary" className={props.className}>
                <StyledToolbar>
                    {
                        MOBILE_NAVIGATION.map(navItem => {
                            return (
                                <AppBarButton
                                    key={navItem.id}
                                    icon={navItem.icon}
                                    text={navItem.text}
                                    onClick={openDrawer}
                                    id={navItem.type === 'group' ? navItem.id : undefined}
                                />
                            );
                        })
                    }
                </StyledToolbar>
            </AppBar>
            <NavDrawer
                open={drawerOpen}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                onCollapseChange={setCurrentDrawerOption}
                currentCollapse={currentDrawerOption}
            />
        </>
    );
}

const StyledToolbar = withStyles({
  root: {
    justifyContent: 'space-between',
    minHeight: 0
  }
})(Toolbar);

export default CustomAppBar;
