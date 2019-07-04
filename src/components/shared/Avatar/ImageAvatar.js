import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {styles} from 'components/shared/Avatar/shared';

class ImageAvatar extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    };

    render() {
        const {classes, label, value} = this.props;
        return (
            <Avatar className={classes.root} alt={label} src={value}/>
        );
    }
}

export default withStyles(styles)(ImageAvatar);