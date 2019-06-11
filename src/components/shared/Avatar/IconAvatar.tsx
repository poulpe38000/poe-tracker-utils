import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import {Props, styles} from './common';

const IconAvatar: React.FunctionComponent<Props> = ({classes, label, value}) => {
    const AvatarIcon = value as React.ComponentType;
    return (
        <Avatar className={classes.avatar} alt={label}>
            <AvatarIcon/>
        </Avatar>
    )
};

export default withStyles(styles)(IconAvatar);