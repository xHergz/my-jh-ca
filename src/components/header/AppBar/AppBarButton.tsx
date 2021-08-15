import React from 'react';

import { NavigationId } from '../../../constants/navigation';
import ToolbarButton, { ToolBarButtonProps } from '../../buttons/ToolbarButton';

export type AppBarButtonProps = Omit<ToolBarButtonProps, 'onClick'> & {
    onClick: (id: NavigationId | null) => void;
    id?: NavigationId;
}

const AppBarButton: React.FunctionComponent<AppBarButtonProps> = (props: AppBarButtonProps): JSX.Element => {
    const openDrawer = (): void => {
        props.onClick(props.id ? props.id : null);
    };

    return (
        <ToolbarButton {...props} onClick={openDrawer} />
    );
}

export default AppBarButton;
