import React, { ForwardedRef, useRef } from 'react';
import { Menu, MenuProps } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { NavigationGroup, NavigationGroupProps } from '../Navigation';
import { NavigationLink } from '../Navigation';

export type NavBarGroupProps = NavigationGroupProps & {};

const NavBarGroup: React.FunctionComponent<NavBarGroupProps> = (props: NavBarGroupProps): JSX.Element => {
    const groupRef = useRef<HTMLDivElement>();

    const handleClose = (): void => {
        props.onClick(null);
    };

    return (
        <StyledNavigationGroup
            key={props.navGroup.id}
            ref={groupRef as ForwardedRef<HTMLDivElement>}
            navGroup={props.navGroup}
            open={props.open}
            onClick={props.onClick}
        >
            {
                <StyledMenu
                    id='customized-menu'
                    keepMounted
                    open={props.open}
                    onClose={handleClose}
                    anchorEl={groupRef.current}
                >
                    {props.navGroup.children.map((child) => {
                        return <StyledNavigationLink navLink={child} />;
                    })}
                </StyledMenu>
            }
        </StyledNavigationGroup>
    );
};

const StyledNavigationGroup = withStyles({
    root: {
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
    },
    icon: {
        color: '#FFF',
    },
})(NavigationGroup);

const StyledNavigationLink = withStyles({
    root: {
        '&:hover': {
            backgroundColor: '#D8D8D8',
        },
    },
})(NavigationLink);

const StyledMenu = withStyles({
    paper: {
        marginTop: '6px',
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

export default NavBarGroup;
