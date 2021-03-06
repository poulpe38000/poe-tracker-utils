import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import FilterListIcon from '@material-ui/icons/FilterList';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {hideoutActions} from 'store/hideout/actions';
import {filterOptions} from 'components/pages/Hideout/shared/constants';
import {buttonStyles, mergeStyles} from 'utils/themes';
import Tooltip from '@material-ui/core/Tooltip';

const styles = (theme) => (mergeStyles({
    popper: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.popper
    },
    gridList: {
        width: 500,
        maxWidth: '100%',
        justifyContent: 'center',
    },
    selectRoot: {
        display: 'flex',
        marginTop: '16px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '80%',
        justifyContent: 'space-between',
    },
    selectFormControl: {
        flex: '1 1 calc(50% - 24px)',
        marginBottom: '24px',
    },
    gridListActions: {
        textAlign: 'right',
    },
    actions: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
        },
    },
}, buttonStyles(theme)));

class ListFilter extends React.Component {
    state = {
        anchorEl: null,
        showPopper: false,
    };

    handleOpenFilterPopper = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
            showPopper: !this.state.showPopper
        });
    };


    handleChange = filterKey => event => {
        this.props.updateFilters({
            [filterKey]: event.target.value
        });
    };


    handleResetFilters = () => {
        this.props.resetFilters();
    };

    renderDropDown(filter, index, fallback = '') {
        const {classes, filters} = this.props;
        const filterKeys = Object.keys(filter.filterOptions);
        return (
            <GridListTile key={index}>
                <Box className={classes.selectRoot}>
                    <FormControl className={classes.selectFormControl} key={index}>
                        <InputLabel shrink htmlFor={filter.id}>{filter.label}</InputLabel>
                        <Select
                            displayEmpty
                            value={filters[filter.id] || fallback}
                            onChange={this.handleChange(filter.id)}
                            name={filter.id}
                        >
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            {filterKeys.map(filterKey => (
                                <MenuItem value={filterKey} key={filterKey}>
                                    {filter.filterOptions[filterKey]}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </GridListTile>
        );
    }

    renderMultiselect(filter, index, fallback = []) {
        const {classes, filters} = this.props;
        const filterKeys = Object.keys(filter.filterOptions);
        const renderValue = selected => {
            return selected.length > 0 ? selected.map(elt => filter.filterOptions[elt]).join(', ') : (<em>All</em>)
        };
        return (
            <GridListTile key={index}>
                <Box className={classes.selectRoot}>
                    <FormControl className={classes.selectFormControl} key={index}>
                        <InputLabel shrink htmlFor={filter.id}>{filter.label}</InputLabel>
                        <Select
                            style={{flexGrow: 1}}
                            multiple
                            displayEmpty
                            value={filters[filter.id] || fallback}
                            renderValue={renderValue}
                            onChange={this.handleChange(filter.id)}
                            name={filter.id}
                        >
                            {filterKeys.map(filterKey => (
                                <MenuItem value={filterKey} key={filterKey}>
                                    <Checkbox
                                        checked={!!(filters[filter.id] && filters[filter.id].indexOf(filterKey) >= 0)}/>
                                    <ListItemText primary={filter.filterOptions[filterKey]}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </GridListTile>
        );
    }

    render() {
        const {classes} = this.props;
        const {anchorEl, showPopper} = this.state;
        return (
            <React.Fragment>
                <Tooltip title={'Filter list'}>
                    <IconButton
                        aria-label={'Filter list'}
                        onClick={this.handleOpenFilterPopper}
                        color="inherit"
                    >
                        <FilterListIcon/>
                    </IconButton>
                </Tooltip>
                <Popover
                    open={showPopper}
                    anchorEl={anchorEl}
                    onClose={this.handleOpenFilterPopper}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
                    transformOrigin={{vertical: 'top', horizontal: 'right',}}
                    elevation={24}
                >
                    <Paper className={classes.popper} elevation={0}>
                        <Typography variant="h6">Filters</Typography>
                        <GridList cellHeight="auto" cols={2} spacing={16} className={classes.gridList}>
                            {filterOptions
                                .map((filter, index) => {
                                    const filterType = filter.hasOwnProperty('filterType')
                                        ? filter.filterType
                                        : 'dropdown';
                                    return filterType === 'multiselect'
                                        ? this.renderMultiselect(filter, index)
                                        : this.renderDropDown(filter, index);
                                })
                            }
                            <GridListTile className={classes.gridListActions} cols={2}>
                                <Box className={classes.actions}>
                                    <Button className={classes.button} size={'large'}
                                            onClick={this.handleResetFilters}>
                                        <SettingsBackupRestoreIcon color={'error'} className={classes.leftIcon}/>
                                        <Typography variant={'button'} color={'error'}>{'Reset filters'}</Typography>
                                    </Button>
                                    <Button variant={'outlined'} className={classes.button} size={'large'}
                                            onClick={this.handleOpenFilterPopper}>
                                        {'Close'}
                                    </Button>
                                </Box>
                            </GridListTile>
                        </GridList>
                    </Paper>
                </Popover>
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        state => ({
            filters: state.hideout.filters,
        }),
        {
            updateFilters: hideoutActions.updateFilters,
            resetFilters: hideoutActions.resetFilters,
        },
    ),
    withStyles(styles)
)(ListFilter);