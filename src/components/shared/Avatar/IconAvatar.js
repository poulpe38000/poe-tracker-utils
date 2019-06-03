import React from 'react';
import {Icon} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
};

class IconAvatar extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.object.isRequired,
    };

    render() {
        const {classes, label, value} = this.props;
        return (
            <Avatar className={classes.avatar} alt={label}>
                <Icon component={value}/>
            </Avatar>
        );
    }
}

export default withStyles(styles)(IconAvatar);