import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withSnackbar} from 'notistack';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {incursionActions} from 'store/incursion/actions';
import {displaySnackbar} from 'utils/snackbar';
import {buttonStyles, mergeStyles} from 'utils/themes';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';


const styles = (theme) => (mergeStyles({
    root: {
        backgroundColor: theme.palette.background.paper,
        marginBottom: theme.spacing(2),
        top: 64,
        [theme.breakpoints.down('xs')]: {
            top: 56,
        },
    },
    search: {
        flex: '1 1 auto',
    },
    spacer: {
        flex: '0 0 auto',
        flexGrow: 1,
    },
    actions: {
        color: theme.palette.text.secondary,
        display: 'flex'
    },
}, buttonStyles(theme)));

class IncursionSummary extends React.Component {

    state = {
        menuAnchorRef: null
    };

    constructor(props) {
        super(props);
        this.searchField = React.createRef();
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

    handleToggleSearch = () => this.props.updateSearchText('');

    handleSearchTextUpdate = (event) => this.props.updateSearchText(event.target.value);

    handleMenuOpen = (event) => this.setState({menuAnchorEl: event.currentTarget});

    handleMenuClose = () => this.setState({menuAnchorEl: null});

    render() {
        const {classes, searchText} = this.props;
        const {menuAnchorEl} = this.state;
        return (
            <AppBar className={classes.root} elevation={2} position={'sticky'}>
                <Toolbar>
                    <Box className={classes.search}>
                        <FormControl fullWidth>
                            <TextField
                                className={classes.margin}
                                inputRef={this.searchField}
                                onChange={this.handleSearchTextUpdate}
                                value={searchText}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon/>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <React.Fragment>
                                            {searchText && (<InputAdornment position="end">
                                                <IconButton aria-label="Delete" onClick={this.handleToggleSearch}>
                                                    <ClearIcon/>
                                                </IconButton>
                                            </InputAdornment>)}
                                        </React.Fragment>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box className={classes.spacer}/>
                    <Box className={classes.actions}>
                        <IconButton
                            aria-controls={'incursion-menu'}
                            aria-haspopup="true"
                            onClick={this.handleMenuOpen}
                            color="inherit"
                        >
                            <MoreVertIcon/>
                        </IconButton>
                        <Menu
                            id="incursion-menu"
                            anchorEl={menuAnchorEl}
                            variant={'menu'}
                            keepMounted
                            open={Boolean(menuAnchorEl)}
                            onClose={this.handleMenuClose}
                        >
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
                                <Typography color={'error'}>{'Reset Current Incursion'}</Typography>
                            </MenuItem>
                        </Menu>
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