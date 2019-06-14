import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withSnackbar} from 'notistack';
import CheckIcon from '@material-ui/icons/Check';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import AppBar from '@material-ui/core/AppBar';
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
import * as PropTypes from 'prop-types';

import {incursionActions} from 'store/incursion/actions';
import {displaySnackbar} from 'utils/snackbar';
import ActionToolbar from 'components/shared/ActionToolbar/ActionToolbar';
import SearchField from 'components/shared/Search/SearchField';


const styles = ({breakpoints, palette, spacing}) => ({
    root: {
        backgroundColor: palette.background.paper,
        color: palette.text.primary,
        marginBottom: spacing(2),
        top: 64,
        [breakpoints.down('xs')]: {
            top: 56,
        },
    },
    title: {
        flex: '1 1 auto',
        overflow: 'hidden',
        width: 0,
        whiteSpace: 'nowrap',
    },
    popper: {
        backgroundColor: palette.background.popper
    },
});

class IncursionSummary extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: '',
    };

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
        this.handleMenuClose();
        this.displaySnackbar('Current incursion rooms added to the completed incursion rooms');
    };
    handleResetInProgress = () => {
        this.props.resetInProgressData();
        this.handleMenuClose();
        this.displaySnackbar('Current incursion rooms successfully reset');
    };

    handleToggleSearch = () => {
        this.props.updateSearchText('');
    };

    handleSearchTextUpdate = (event) => this.props.updateSearchText(event.target.value);

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
        const {classes, searchText, title} = this.props;
        const {menuOpen} = this.state;
        return (
            <AppBar className={classes.root} elevation={2} position={'sticky'}>
                <ActionToolbar title={title}>
                    <SearchField value={searchText}
                                 onOpen={this.handleToggleSearch}
                                 onClose={this.handleToggleSearch}
                                 onChange={this.handleSearchTextUpdate}/>
                    <IconButton
                        ref={this.menuAnchorRef}
                        aria-label={'More actions'}
                        aria-controls="incursion-menu"
                        aria-haspopup="true"
                        onClick={this.handleMenuOpen}
                    >
                        <MoreVertIcon/>
                    </IconButton>
                    <Popper open={menuOpen} anchorEl={this.menuAnchorRef.current}
                            placement={'bottom-end'} transition disablePortal>
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
                </ActionToolbar>
            </AppBar>
        );
    }
}

export default compose(
    connect(
        state => ({
            searchText: state.incursion.searchText,
        }),
        {
            updateSearchText: incursionActions.updateSearchText,
            validateInProgress: incursionActions.validateInProgress,
            resetInProgressData: incursionActions.resetInProgressData,
        },
    ),
    withStyles(styles),
    withSnackbar,
)(IncursionSummary);