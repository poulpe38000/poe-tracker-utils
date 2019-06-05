import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import * as PropTypes from 'prop-types';
import withWidth, {isWidthDown} from '@material-ui/core/withWidth';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import {compose} from 'redux';

const styles = theme => ({
    button: {
        marginRight: theme.spacing(2),
        color: theme.palette.primary.contrastText,
    },
});

class TopBarMenuButton extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const {classes, width, onClick} = this.props;
        return (
            <React.Fragment>
                {isWidthDown('xs', width) && (
                    <IconButton aria-label="Menu" onClick={onClick} className={classes.button}>
                        <MenuIcon/>
                    </IconButton>
                )}
            </React.Fragment>
        );
    }
}

export default compose(
    withStyles(styles),
    withWidth()
)(TopBarMenuButton);
