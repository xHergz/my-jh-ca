import React, { ForwardedRef, useRef } from 'react';
import { Menu, MenuItem, MenuProps } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { NavigationGroup, NavigationGroupProps } from '../Navigation';

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
                        return (
                            <MenuItem disableRipple>
                                {child.icon}
                                {child.text}
                            </MenuItem>
                        );
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

const StyledMenu = withStyles({
    paper: {
        marginTop: '8px',
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
