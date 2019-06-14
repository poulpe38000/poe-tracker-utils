import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import APP_CONSTANTS from 'constants/app.constants';
import homeLogo from 'layout/SideMenuComponents/home_logo.png';
import {IconAvatar, ImageAvatar} from 'components/shared';
import hideoutLogo from 'layout/SideMenuComponents/hideout_logo.png';
import incursionLogo from 'layout/SideMenuComponents/incursion_logo.png';
import filterLogo from 'layout/SideMenuComponents/filter_logo.png';

export const sideMenuElements = {
    pages: [
        {
            link: {to: APP_CONSTANTS.routes.root, exact: true},
            label: 'Home',
            icon: (<ImageAvatar label={'Home'} value={homeLogo}/>),
        },
        {
            link: {to: APP_CONSTANTS.routes.hideouts.root},
            label: 'Hideouts unlocks',
            icon: (<ImageAvatar label={'Hideouts unlocks'} value={hideoutLogo}/>),
        },
        {
            link: {to: APP_CONSTANTS.routes.incursions.root},
            label: 'Incursion rooms',
            icon: (<ImageAvatar label={'Incursion rooms'} value={incursionLogo}/>),
        },
        {
            link: {to: APP_CONSTANTS.routes.filters.root},
            label: 'Filter editor',
            icon: (<ImageAvatar label={'Filter editor'} value={filterLogo}/>),
        },
    ],
    settings: [
        {
            link: {to: APP_CONSTANTS.routes.import_export.root},
            label: 'Import / Export',
            icon: (<IconAvatar label={'Import / Export'} value={ImportExportIcon}/>),
        },
        {
            link: {to: APP_CONSTANTS.routes.settings.root},
            label: 'Settings',
            icon: (<IconAvatar label={'Settings'} value={SettingsIcon}/>),
        },
    ]
};
