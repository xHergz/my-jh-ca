import React from 'react';
import type { NextPage } from 'next';

import ApiKeyCard from '../../components/cards/ApiKeyCard';
import { CoreLayout } from '../../components/layouts';
import { KEY_DATA, KeyStorage, KeyId } from '../../constants/keyStorage';

const ApiKeysPage: NextPage = () => {
    //const [keyData, setKeyData] = useLocalStorage('api-keys', {});

    /*const saveKey = (id: KeyId, value: string | undefined): void => {
        setKeyData({
            ...keyData,
            [id]: value,
        });
    };

    const clearKey = (id: KeyId): void => {
        setKeyData({
            ...keyData,
            [id]: undefined,
        });
    };*/

    return (
        <CoreLayout title='API Key Settings'>
            {Object.keys(KEY_DATA).map((key) => {
                const realKey = key as KeyId;
                return <ApiKeyCard key={key} id={realKey} metaData={KEY_DATA[realKey]} />;
            })}
        </CoreLayout>
    );
};

export default ApiKeysPage;
