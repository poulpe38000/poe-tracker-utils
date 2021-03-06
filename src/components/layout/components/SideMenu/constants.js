import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import homeLogo from 'components/layout/components/SideMenu/home_logo.png';
import IconAvatar from 'components/shared/Avatar/IconAvatar';
import ImageAvatar from 'components/shared/Avatar/ImageAvatar';
import hideoutLogo from 'components/layout/components/SideMenu/hideout_logo.png';
import incursionLogo from 'components/layout/components/SideMenu/incursion_logo.png';
import ROUTES from 'data/routes';

export const sideMenuElements = [
    {
        link: ROUTES.sideNav.root,
        label: 'Home',
        icon: (<ImageAvatar label={'Home'} value={homeLogo}/>),
    },
    {
        link: ROUTES.sideNav.hideouts,
        label: 'Hideouts unlocks',
        icon: (<ImageAvatar label={'Hideouts unlocks'} value={hideoutLogo}/>),
    },
    {
        link: ROUTES.sideNav.incursions,
        label: 'Incursion rooms',
        icon: (<ImageAvatar label={'Incursion rooms'} value={incursionLogo}/>),
    },
    {
        type: 'spacer',
    },
    {
        link: ROUTES.sideNav.import_export,
        label: 'Import / Export',
        icon: (<IconAvatar label={'Import / Export'} value={ImportExportIcon}/>),
    },
    {
        link: ROUTES.sideNav.settings,
        label: 'Settings',
        icon: (<IconAvatar label={'Settings'} value={SettingsIcon}/>),
    },
];
