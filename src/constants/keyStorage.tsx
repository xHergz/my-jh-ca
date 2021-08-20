import BudgetIcon from '@material-ui/icons/LocalAtm';
import WeatherIcon from '@material-ui/icons/WbSunny';

export type KeyId = 'purchaseTracker' | 'weather';

export type KeyMetaData = {
    name: string;
    description: string;
    icon: JSX.Element;
};

export type KeyData = {
    [key in KeyId]: KeyMetaData;
};

export type KeyStorage = {
    [key in KeyId]?: string | undefined;
};

export const KEY_DATA: KeyData = {
    purchaseTracker: {
        name: 'Purchase Tracker',
        description: 'API Key to access version 1 of the purchase tracking input form',
        icon: <BudgetIcon />,
    },
    weather: {
        name: 'Weather',
        description: 'API Key to access open weather data',
        icon: <WeatherIcon />,
    },
};
