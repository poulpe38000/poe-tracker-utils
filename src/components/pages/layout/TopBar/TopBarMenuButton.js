import React from 'react';
import {IconButton, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    menuButton: {marginRight: theme.spacing.unit * 2},
});

class TopBarMenuButton extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const {classes, onClick} = this.props;
        return (
            <IconButton aria-label="Menu" onClick={() => onClick()} className={classes.menuButton}>
                <MenuIcon/>
            </IconButton>
        );
    }
}

export default withStyles(styles)(TopBarMenuButton);
