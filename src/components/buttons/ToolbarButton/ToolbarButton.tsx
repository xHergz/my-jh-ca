import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export type ToolBarButtonProps = {
    icon: React.ReactNode,
    text: string;
    onClick: () => void;
}

const ToolBarButton: React.FunctionComponent<ToolBarButtonProps> = (props: ToolBarButtonProps): JSX.Element => {
    return (
        <StyledIconButton onClick={props.onClick}>
            {props.icon}
            <Typography variant='caption'>{props.text}</Typography>
        </StyledIconButton>
    );
}

const StyledIconButton = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: '#FFF',
        minHeight: '60px',
        minWidth: '60px'
    }
})(IconButton);

export default ToolBarButton;
