import React, { useState } from 'react';
import { AppBar, List, ListProps, Toolbar, Typography, Theme } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/styles';

import {
    DESKTOP_NAVIGATION,
    ROOT_URL,
    NavigationGroupId,
    NavigationGroupItem,
    NavigationLinkItem,
} from '../../../constants/navigation';
import { NavigationGroup, NavigationLink } from '../Navigation';
import NavBarGroup from './NavBarGroup';
import { UnformattedLink } from '../../text';

export type NavBarProps = React.HTMLAttributes<HTMLDivElement> & {};

const NavBar: React.FunctionComponent<NavBarProps> = (props: NavBarProps): JSX.Element => {
    const [currentNavOption, setCurrentNavOption] = useState<NavigationGroupId | null>(null);
    return (
        <AppBar position='static' className={props.className}>
            <StyledToolbar>
                <UnformattedLink href={ROOT_URL}>
                    <Typography variant='h6'>my-jh-ca</Typography>
                </UnformattedLink>
                <StyledList>
                    {DESKTOP_NAVIGATION.map((navItem) => {
                        if (navItem.id === 'home') {
                            return null;
                        } else if (navItem.type === 'link') {
                            return <NavigationLink key={navItem.id} navLink={navItem as NavigationLinkItem} />;
                        } else if (navItem.id === 'more') {
                            return (
                                <NavBarGroup
                                    key={navItem.id}
                                    navGroup={{
                                        ...(navItem as NavigationGroupItem),
                                        text: 'Username',
                                        icon: <AccountIcon />,
                                    }}
                                    open={currentNavOption === navItem.id}
                                    onClick={setCurrentNavOption}
                                />
                            );
                        }
                        const group = navItem as NavigationGroupItem;
                        return (
                            <NavBarGroup
                                key={navItem.id}
                                navGroup={group}
                                open={currentNavOption === navItem.id}
                                onClick={setCurrentNavOption}
                            />
                        );
                    })}
                </StyledList>
            </StyledToolbar>
        </AppBar>
    );
};

const StyledToolbar = withStyles({
    root: {
        minHeight: '60px',
        color: '#FFF',
        justifyContent: 'space-between',
    },
})(Toolbar);

const StyledList = withStyles((theme: Theme) => ({
    root: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
        },
    },
}))((props: ListProps): JSX.Element => {
    return <List component='nav' {...props} />;
});

export default NavBar;
