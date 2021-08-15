import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import ContactsIcon from '@material-ui/icons/Contacts';
import NotesIcon from '@material-ui/icons/Description';
import ToolsIcon from '@material-ui/icons/Gavel';
import HomeIcon from '@material-ui/icons/Home';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import SettingsIcon from '@material-ui/icons/Settings';

export type NavigationLinkId = 'home' | 'contacts' | 'notes';

export type NavigationGroupId = 'apps' | 'tools' | 'settings' | 'more';

export type NavigationId = NavigationLinkId | NavigationGroupId;

type NavigationType = 'link' | 'group';

type NavigationContext = 'desktop' | 'mobile';

export type NavigationItem = {
    id: NavigationId,
    icon: JSX.Element;
    text: string;
    contexts: NavigationContext[];
    type: NavigationType;
}

export type NavigationLink = NavigationItem & {
    link: string;
}

export type NavigationGroup = NavigationItem & {
    children: NavigationLink[]
}

const NAVIGATION_TREE: (NavigationLink | NavigationGroup)[] = [
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
                id: 'contacts',
                icon: <ContactsIcon />,
                text: 'Contacts',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/contacts',
            },
            {
                id: 'notes',
                icon: <NotesIcon />,
                text: 'Notes',
                contexts: ['desktop', 'mobile'],
                type: 'link',
                link: '/notes',
            }
        ]
    },
    {
        id: 'tools',
        icon: <ToolsIcon />,
        text: 'Tools',
        contexts: ['desktop', 'mobile'],
        type: 'group',
        children: []
    },
    {
        id: 'settings',
        icon: <SettingsIcon />,
        text: 'Settings',
        contexts: ['desktop', 'mobile'],
        type: 'group',
        children: []
    },
    {
        id: 'more',
        icon: <MoreIcon />,
        text: 'More',
        contexts: ['desktop', 'mobile'],
        type: 'group',
        children: []
    },
];

export const MOBILE_NAVIGATION = NAVIGATION_TREE.filter(navItem => navItem.contexts.includes('mobile'));

export const DESKTOP_NAVIGATION = NAVIGATION_TREE.filter(navItem => navItem.contexts.includes('desktop'));

export default NAVIGATION_TREE;