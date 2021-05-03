import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import HelpIcon from '@material-ui/icons/Help';
import GroupWorkIcon from '@material-ui/icons/GroupWork';


export const Sidebar = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link: '/home'

    },
    {
        title: 'RFQs',
        icon: <GroupWorkIcon />,
        link: '/rfq'
    },
    {
        title: 'Vendors',
        icon: <GroupIcon />,
        link: '/vendor'
    },
    {
        title: 'Operators',
        icon: <SupervisedUserCircleIcon />,
        link: '/operator'
    },
    {
        title: 'Help',
        icon: <HelpIcon />,
        link: '/help'
    }
];

