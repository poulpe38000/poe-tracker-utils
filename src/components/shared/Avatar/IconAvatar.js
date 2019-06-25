import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {styles} from 'components/shared/Avatar/shared';

class IconAvatar extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.object.isRequired,
    };

    render() {
        const {classes, label, value} = this.props;
        const AvatarIcon = value;
        return (
            <Avatar className={classes.root} alt={label}>
                <AvatarIcon/>
            </Avatar>
        );
    }
}

export default withStyles(styles)(IconAvatar);