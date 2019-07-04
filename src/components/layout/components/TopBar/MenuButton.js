import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import withStyles from '@material-ui/core/styles/withStyles';

import {rootActions} from 'store/root/actions';

const styles = ({palette, spacing}) => ({
    button: {
        marginRight: spacing(2),
        color: palette.primary.contrastText,
    },
});

class MenuButton extends React.Component {

    handleOpenMenu = () => {
        this.props.toggleSidenav();
    };

    render() {
        const {classes} = this.props;
        return (
            <Hidden mdUp>
                <IconButton aria-label={'Menu'}
                            onClick={this.handleOpenMenu}
                            className={classes.button}>
                    <MenuIcon/>
                </IconButton>
            </Hidden>
        );
    }
}

export default compose(
    connect(
        null,
        {
            toggleSidenav: rootActions.toggleSidenav,
        },
    ),
    withStyles(styles),
)(MenuButton);
