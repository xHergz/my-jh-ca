import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { useDefaultProps } from '../../utils/hooks';

export type TextInputProps = Omit<TextFieldProps, 'onChange'> & {
    onChange: (newValue: string) => void;
};

const TextInput: React.FunctionComponent<TextInputProps> = (props: TextInputProps): JSX.Element => {
    props = useDefaultProps<TextInputProps>(props, { variant: 'outlined', size: 'small', type: 'text' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(event.currentTarget.value);
        props.onChange(event.currentTarget.value);
    };

    return <TextField {...props} onChange={handleChange} />;
};

export default TextInput;
