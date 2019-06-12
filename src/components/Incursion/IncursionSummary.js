import React from 'react';
import {Button, FormControl, IconButton, InputAdornment, Paper, TextField, withStyles} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {connect} from 'react-redux';
import {
    incursionResetInProgressData,
    incursionRoomValidateInProgress,
    incursionUpdateSearchText
} from 'store/incursion/actions';
import {buttonStyles, mergeStyles} from 'utils/themes';
import {compose} from 'redux';
import {withSnackbar} from 'notistack';
import {displaySnackbar} from 'utils/snackbar';

const styles = theme => (mergeStyles({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'stretch'
        }
    },
}, buttonStyles(theme)));

class IncursionSummary extends React.Component {

    constructor(props) {
        super(props);
        this.searchField = React.createRef();
    }

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);

    handleValidateInProgress = () => {
        this.props.incursionRoomValidateInProgress();
        this.displaySnackbar('Current incursion rooms added to the completed incursion rooms');
    };
    handleResetInProgress = () => {
        this.props.incursionResetInProgressData();
        this.displaySnackbar('Current incursion rooms successfully reset');
    };

    handleToggleSearch = () => this.props.incursionUpdateSearchText('');

    handleSearchTextUpdate = (event) => this.props.incursionUpdateSearchText(event.target.value);

    render() {
        const {classes, searchText} = this.props;
        return (
            <Paper className={classes.root} elevation={2}>
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
                <div className={classes.actions}>
                    <Button variant="outlined" onClick={this.handleResetInProgress} className={classes.button}>
                        <SettingsBackupRestoreIcon className={classes.leftIcon}/>
                        Reset Current Incursion
                    </Button>
                    <Button variant="outlined" onClick={this.handleValidateInProgress} className={classes.button}>
                        <CheckIcon className={classes.leftIcon}/>
                        Complete Current Incursion
                    </Button>
                </div>
            </Paper>
        );
    }
}

export default compose(
    connect(
        state => ({
            searchText: state.incursion.searchText,
        }),
        {
            incursionUpdateSearchText: incursionUpdateSearchText,
            incursionRoomValidateInProgress: incursionRoomValidateInProgress,
            incursionResetInProgressData: incursionResetInProgressData,
        },
    ),
    withStyles(styles),
    withSnackbar,
)(IncursionSummary);