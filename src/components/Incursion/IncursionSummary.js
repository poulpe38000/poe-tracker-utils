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

const styles = theme => (mergeStyles({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
}, buttonStyles(theme)));

class IncursionSummary extends React.Component {

    constructor(props) {
        super(props);
        this.searchField = React.createRef();
    }

    handleValidateInProgress = () => this.props.incursionRoomValidateInProgress();
    handleResetInProgress = () => this.props.incursionResetInProgressData();

    handleToggleSearch = () => this.props.incursionUpdateSearchText('');

    handleSearchTextUpdate = (event) => this.props.incursionUpdateSearchText(event.target.value);

    render() {
        const {classes, searchText} = this.props;
        return (
            <Paper className={classes.root}>
                <Button variant="outlined" onClick={this.handleValidateInProgress} className={classes.button}>
                    <CheckIcon className={classes.leftIcon}/>
                    Complete Current Rooms
                </Button>
                <Button variant="outlined" onClick={this.handleResetInProgress} className={classes.button}>
                    <SettingsBackupRestoreIcon className={classes.leftIcon}/>
                    Reset Current Rooms
                </Button>
                <FormControl fullWidth>
                    <TextField
                        className={classes.margin}
                        autoFocus={true}
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
                                <InputAdornment position="end">
                                    <IconButton aria-label="Delete" onClick={this.handleToggleSearch}>
                                        <ClearIcon/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </FormControl>
            </Paper>
        );
    }
}

export default connect(
    state => ({
        searchText: state.incursion.searchText,
    }),
    dispatch => ({
        incursionUpdateSearchText: (payload) => dispatch(incursionUpdateSearchText(payload)),
        incursionRoomValidateInProgress: () => dispatch(incursionRoomValidateInProgress()),
        incursionResetInProgressData: () => dispatch(incursionResetInProgressData()),
    })
)(withStyles(styles)(IncursionSummary));