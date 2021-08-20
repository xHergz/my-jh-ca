import React, { useEffect, useState } from 'react';
import { Card, IconButton, InputAdornment, Typography } from '@material-ui/core';
import ShowKeyIcon from '@material-ui/icons/Visibility';
import HideKeyIcon from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/VpnKey';
import { makeStyles, withStyles } from '@material-ui/styles';

import { KeyId, KeyMetaData } from '../../../constants/keyStorage';
import { Button } from '../../buttons';
import { TextInput } from '../../inputs';
import { useToggle } from '../../../utils/hooks';
import { LocalStorageValue, getItem, removeItem, setItem } from '../../../utils/storage';

export type ApiKeyCardProps = {
    id: KeyId;
    metaData: KeyMetaData;
};

const useStyles = makeStyles({
    actionButtons: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginTop: '16px',
    },
});

const ApiKeyCard: React.FunctionComponent<ApiKeyCardProps> = (props: ApiKeyCardProps): JSX.Element => {
    const styles = useStyles();
    const [keyValue, setKeyValue] = useState<LocalStorageValue>(null);
    const [keyVisible, toggleKeyVisible] = useToggle(false);

    useEffect(() => {
        setKeyValue(getItem(props.id));
    }, [props.id]);

    const saveKey = (): void => {
        setItem(props.id, keyValue);
    };

    const clearKey = (): void => {
        removeItem(props.id);
        setKeyValue(null);
    };

    const updateKey = (newValue: string): void => {
        setKeyValue(newValue);
    };

    const lockIcon = (
        <InputAdornment position='start'>
            <LockIcon />
        </InputAdornment>
    );
    const visibilityButton = (
        <InputAdornment position='end'>
            <IconButton aria-label='toggle key visibility' onClick={toggleKeyVisible} edge='end'>
                {keyVisible ? <HideKeyIcon /> : <ShowKeyIcon />}
            </IconButton>
        </InputAdornment>
    );

    return (
        <StyledCard>
            <Typography variant='h6'>{props.metaData.name}</Typography>
            <Typography variant='caption'>{props.metaData.description}</Typography>
            <TextInput
                value={keyValue === null ? '' : keyValue}
                onChange={updateKey}
                InputProps={{ startAdornment: lockIcon, endAdornment: visibilityButton }}
                type={keyVisible ? 'text' : 'password'}
                autoComplete='one-time-code'
            />
            <div className={styles.actionButtons}>
                <CardActionButton color='success' onClick={saveKey}>
                    Save
                </CardActionButton>
                <CardActionButton color='error' variant='outlined' onClick={clearKey}>
                    Clear
                </CardActionButton>
            </div>
        </StyledCard>
    );
};

const StyledCard = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: '8px 0',
        padding: '16px',
        overflow: 'unset',
    },
})(Card);

const CardActionButton = withStyles({
    root: {
        minWidth: '180px',
    },
})(Button);

export default ApiKeyCard;
