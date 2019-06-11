import React from 'react';
import {Avatar} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {styles} from './shared';

class IconAvatar extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.object.isRequired,
    };

    render() {
        const {classes, label, value} = this.props;
        const AvatarIcon = value;
        return (
            <Avatar className={classes.avatar} alt={label}>
                <AvatarIcon/>
            </Avatar>
        );
    }
}

export default withStyles(styles)(IconAvatar);