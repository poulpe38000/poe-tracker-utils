import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
};

class ImageAvatar extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    };

    render() {
        const {classes, label, value} = this.props;
        return (
            <Avatar className={classes.avatar} alt={label} src={value}/>
        );
    }
}

export default withStyles(styles)(ImageAvatar);