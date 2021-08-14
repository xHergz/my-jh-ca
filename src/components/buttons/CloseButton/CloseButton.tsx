import React from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';

export type CloseButtonProps = {
    onClick: () => void;
};

const CloseButton: React.FunctionComponent<CloseButtonProps> = (props: CloseButtonProps): JSX.Element => {
    return (
        <CloseIconButton onClick={props.onClick}>
            <CloseIcon />
        </CloseIconButton>
    );
}

const CloseIconButton = withStyles({
    root: {
        minWidth: '24px',
        padding: '0',
        alignSelf: 'flex-end'
    }
})(IconButton);
  
export default CloseButton;
