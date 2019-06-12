import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withSnackbar} from 'notistack';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {incursionActions} from 'store/incursion/actions';
import {displaySnackbar} from 'utils/snackbar';
import {buttonStyles, mergeStyles} from 'utils/themes';

const styles = (theme) => (mergeStyles({
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
        this.props.validateInProgress();
        this.displaySnackbar('Current incursion rooms added to the completed incursion rooms');
    };
    handleResetInProgress = () => {
        this.props.resetInProgressData();
        this.displaySnackbar('Current incursion rooms successfully reset');
    };

    handleToggleSearch = () => this.props.updateSearchText('');

    handleSearchTextUpdate = (event) => this.props.updateSearchText(event.target.value);

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
                <Box className={classes.actions}>
                    <Button size={'large'} onClick={this.handleResetInProgress} className={classes.button}>
                        <SettingsBackupRestoreIcon color={'error'} className={classes.leftIcon}/>
                        <Typography variant={'button'} color={'error'}>{'Reset Current Incursion'}</Typography>
                    </Button>
                    <Button variant={'contained'} color={'primary'} size={'large'} onClick={this.handleValidateInProgress} className={classes.button}>
                        <CheckIcon className={classes.leftIcon}/>
                        Complete Current Incursion
                    </Button>
                </Box>
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
            updateSearchText: incursionActions.updateSearchText,
            validateInProgress: incursionActions.validateInProgress,
            resetInProgressData: incursionActions.resetInProgressData,
        },
    ),
    withStyles(styles),
    withSnackbar,
)(IncursionSummary);