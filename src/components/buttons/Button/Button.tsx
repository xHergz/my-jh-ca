import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import { useDefaultProps } from '../../../utils/hooks';

export type CustomButtonProps = ButtonProps & {};

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props: CustomButtonProps): JSX.Element => {
    props = useDefaultProps<ButtonProps>(props, { variant: 'contained', color: 'primary' });
    return <Button {...props} />;
};

export default CustomButton;
