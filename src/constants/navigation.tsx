import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import TasksIcon from '@material-ui/icons/CheckCircleOutline';
import ContactsIcon from '@material-ui/icons/Contacts';
import NotesIcon from '@material-ui/icons/Description';
import LogOutIcon from '@material-ui/icons/ExitToApp';
import MealsIcon from '@material-ui/icons/Fastfood';
import ToolsIcon from '@material-ui/icons/Gavel';
import HomeIcon from '@material-ui/icons/Home';
import GroceriesIcon from '@material-ui/icons/Kitchen';
import BudgetIcon from '@material-ui/icons/LocalAtm';
import ApiKeysIcon from '@material-ui/icons/Lock';
import RecipesIcon from '@material-ui/icons/MenuBook';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarIcon from '@material-ui/icons/Today';
import WeatherIcon from '@material-ui/icons/WbSunny';

export type NavigationLinkId =
    // Stand Alone
    | 'home'
    // Apps
    | 'budget'
    | 'calendar'
    | 'contacts'
    | 'groceries'
    | 'meals'
    | 'notes'
    | 'recipes'
    | 'tasks'
    | 'weather'
    // Tools
    // Settings
    | 'api-keys'
    // More
    | 'logout';

export type NavigationGroupId = 'apps' | 'tools' | 'settings' | 'more';

export type NavigationId = NavigationLinkId | NavigationGroupId;

type NavigationType = 'link' | 'group';

type NavigationContext = 'desktop' | 'mobile';

export type NavigationItem = {
    id: NavigationId;
    icon: JSX.Element;
    text: string;
    contexts: NavigationContext[];
    type: NavigationType;
};

export type NavigationLinkItem = NavigationItem & {
    link: string;
};

export type NavigationGroupItem = NavigationItem & {
    children: NavigationLinkItem[];
};

const NAVIGATION_TREE: (NavigationLinkItem | NavigationGroupItem)[] = [
    {
        id: 'home',
        icon: <HomeIcon />,
        text: 'Home',
        contexts: ['mobile'],
        type: 'link',
        link: '/',
    },
    {
        id: 'apps',
        icon: <AppsIcon />,
        text: 'Apps',
        contexts: ['desktop', 'mobile'],
        type: 'group',
        children: [
            {
                id: 'budget',
                icon: <BudgetIcon />,
                text: 'Budget',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/budget',
            },
            {
                id: 'calendar',
                icon: <CalendarIcon />,
                text: 'Calendar',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/calendar',
            },
            {
                id: 'contacts',
                icon: <ContactsIcon />,
                text: 'Contacts',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/contacts',
            },
            {
                id: 'groceries',
                icon: <GroceriesIcon />,
                text: 'Groceries',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/groceries',
            },
            {
                id: 'meals',
                icon: <MealsIcon />,
                text: 'Meals',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/meals',
            },
            {
                id: 'notes',
                icon: <NotesIcon />,
                text: 'Notes',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/notes',
            },
            {
                id: 'recipes',
                icon: <RecipesIcon />,
                text: 'Recipes',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/recipes',
            },
            {
                id: 'tasks',
                icon: <TasksIcon />,
                text: 'Tasks',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/tasks',
            },
            {
                id: 'weather',
                icon: <WeatherIcon />,
                text: 'Weather',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/weather',
            },
        ],
    },
    {
        id: 'tools',
        icon: <ToolsIcon />,
        text: 'Tools',
        contexts: ['desktop', 'mobile'],
        type: 'group',
        children: [],
    },
    {
        id: 'settings',
        icon: <SettingsIcon />,
        text: 'Settings',
        contexts: ['desktop', 'mobile'],
        type: 'group',
        children: [
            {
                id: 'api-keys',
                icon: <ApiKeysIcon />,
                text: 'API Keys',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/settings/api-keys',
            },
        ],
    },
    {
        id: 'more',
        icon: <MenuIcon />,
        text: 'More',
        contexts: ['desktop', 'mobile'],
        type: 'group',
        children: [
            {
                id: 'logout',
                icon: <LogOutIcon />,
                text: 'Log Out',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/logout',
            },
        ],
    },
];

export const ROOT_URL = (NAVIGATION_TREE[0] as NavigationLinkItem).link;

export const MOBILE_NAVIGATION = NAVIGATION_TREE.filter((navItem) => navItem.contexts.includes('mobile'));

export const DESKTOP_NAVIGATION = NAVIGATION_TREE.filter((navItem) => navItem.contexts.includes('desktop'));

export default NAVIGATION_TREE;
