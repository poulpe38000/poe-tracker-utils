import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withSnackbar} from 'notistack';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {incursionActions} from 'store/incursion/actions';
import {displaySnackbar} from 'utils/snackbar';
import {buttonStyles, mergeStyles, transitionFor} from 'utils/themes';
import clsx from 'clsx';
import InputBase from '@material-ui/core/InputBase';


const styles = (theme) => (mergeStyles({
    root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(2),
        top: 64,
        [theme.breakpoints.down('xs')]: {
            top: 56,
        },
    },
    title: {
        flex: '1 1 auto',
        overflow: 'hidden',
        width: 0,
    },
    spacer: {
        flex: '0 0 auto',
        flexGrow: 1,
    },
    actions: {
        color: theme.palette.text.secondary,
        display: 'flex'
    },
    popper: {
        backgroundColor: theme.palette.background.popper
    },
    searchZone: {
        display: 'flex',
        overflow: 'hidden',
    },
    searchOpen: {
        backgroundColor: theme.palette.background.popper,
        borderRadius: theme.spacing(3),
        width: 240,
        maxWidth: '100%',
        transition: transitionFor(theme, ['width', 'background-color'], 'complex'),
    },
    searchClose: {
        backgroundColor: 'inherit',
        borderRadius: theme.spacing(2),
        width: theme.spacing(6),
        minWidth: '0%',
        transition: transitionFor(theme, ['width', 'background-color'], 'complex'),
    },
    input: {
        flexGrow: 1,
    },
    inputButton: {
        '&:hover': {
            backgroundColor: 'inherit',

        }
    }
}, buttonStyles(theme)));

class IncursionSummary extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: '',
    };

    state = {
        showSearchBar: false,
        menuOpen: false,
    };

    constructor(props) {
        super(props);
        this.searchField = React.createRef();
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
        this.setState((prevState) => ({showSearchBar: !prevState.showSearchBar}));
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
        const {showSearchBar, menuOpen} = this.state;
        return (
            <AppBar className={classes.root} elevation={2} position={'sticky'}>
                <Toolbar>
                    <Box className={classes.title}>
                        <Typography variant="h6">{title}</Typography>
                    </Box>
                    <Box className={classes.spacer}/>
                    <Box className={classes.actions}>
                        <Box className={clsx(classes.searchZone, {
                            [classes.searchOpen]: showSearchBar,
                            [classes.searchClose]: !showSearchBar,
                        })}>
                            <IconButton aria-label="Search" onClick={this.handleToggleSearch} disabled={showSearchBar}>
                                <SearchIcon/>
                            </IconButton>
                            {showSearchBar && (
                                <React.Fragment>
                                    <InputBase
                                        placeholder="Search"
                                        inputRef={this.searchField}
                                        inputProps={{ 'aria-label': 'Search Google Maps' }}
                                        onChange={this.handleSearchTextUpdate}
                                        className={classes.input}
                                        autoFocus
                                    />
                                    <IconButton aria-label="Delete"
                                                disableRipple
                                                disableFocusRipple
                                                className={classes.inputButton}
                                                onClick={this.handleToggleSearch}>
                                        <ClearIcon/>
                                    </IconButton>
                                </React.Fragment>
                            )}

                        </Box>
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
                    </Box>
                </Toolbar>
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