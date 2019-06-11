import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import {styles, Props} from './common';

const ImageAvatar: React.FunctionComponent<Props> = ({classes, label, value}) => (
    <Avatar className={classes.avatar} alt={label} src={value as string}/>
);

export default withStyles(styles)(ImageAvatar);