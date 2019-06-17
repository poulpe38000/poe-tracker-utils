import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withSnackbar} from 'notistack';
import CheckIcon from '@material-ui/icons/Check';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {incursionActions} from 'store/incursion/actions';
import {displaySnackbar} from 'utils/snackbar';


const styles = ({palette}) => ({
    popper: {
        backgroundColor: palette.background.popper
    },
});

class MoreMenu extends React.Component {
    state = {
        menuOpen: false,
    };

    constructor(props) {
        super(props);
        this.menuAnchorRef = React.createRef();
    }

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);

    handleValidateInProgress = () => {
        this.props.validateInProgress();
        this.displaySnackbar('Current incursion rooms added to the completed incursion rooms');
        this.handleMenuClose();
    };
    handleResetInProgress = () => {
        this.props.resetInProgressData();
        this.displaySnackbar('Current incursion rooms successfully reset');
        this.handleMenuClose();
    };

    handleMenuOpen = () => {
        this.setState((prevState) => ({
            menuOpen: !prevState.menuOpen,
        }));
    };

    handleMenuClose = (event) => {
        if (this.menuAnchorRef.current && event && this.menuAnchorRef.current.contains(event.target)) {
            return;
        }
        this.setState({menuOpen: false});
    };

    render() {
        const {classes} = this.props;
        const {menuOpen} = this.state;
        return (
            <React.Fragment>
                <IconButton
                    ref={this.menuAnchorRef}
                    aria-label={'More actions'}
                    aria-controls="incursion-menu"
                    aria-haspopup="true"
                    onClick={this.handleMenuOpen}
                >
                    <MoreVertIcon/>
                </IconButton>
                <Popper open={menuOpen}
                        anchorEl={this.menuAnchorRef.current}
                        placement={'bottom-end'}
                        transition disablePortal>
                    {({TransitionProps}) => (
                        <Grow {...TransitionProps} style={{transformOrigin: 'right top'}}>
                            <Paper id="incursion-menu" className={classes.popper}>
                                <ClickAwayListener onClickAway={this.handleMenuClose}>
                                    <MenuList disablePadding>
                                        <MenuItem onClick={this.handleValidateInProgress}>
                                            <ListItemIcon>
                                                <CheckIcon/>
                                            </ListItemIcon>
                                            <Typography>{'Complete Current Incursion'}</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={this.handleResetInProgress}>
                                            <ListItemIcon>
                                                <SettingsBackupRestoreIcon color={'error'}/>
                                            </ListItemIcon>
                                            <Typography
                                                color={'error'}>{'Reset Current Incursion'}</Typography>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        null,
        {
            validateInProgress: incursionActions.validateInProgress,
            resetInProgressData: incursionActions.resetInProgressData,
        },
    ),
    withStyles(styles),
    withSnackbar,
)(MoreMenu);