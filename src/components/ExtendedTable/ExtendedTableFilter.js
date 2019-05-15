import {
    Checkbox,
    FormControl,
    Grid, GridList, GridListTile,
    IconButton, InputLabel, ListItemText, ListSubheader,
    MenuItem,
    Paper,
    Popper,
    Select,
    Typography,
    withStyles
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import React from 'react';
import {connect} from 'react-redux';
import {hideoutUpdateSearchText} from 'store/hideout/actions';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    popper: {
        padding: theme.spacing.unit * 2
    },
    gridList: {
        width: 500,
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
        marginRight: '24px',
        marginBottom: '24px',
    },
});

class ExtendedTableFilter extends React.Component {
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
        this.props.onFilterUpdate(filterKey, event.target.value);
    };

    renderDropDown(col, index) {
        const {classes, filters} = this.props;
        const filterKeys = Object.keys(col.options.filterOptions);
        const filterLabel = col.hasOwnProperty('options') && col.options.hasOwnProperty('filterLabel')
            ? col.options.filterLabel
            : col.label;
        return (
            <GridListTile key={index}>
                <div className={classes.selectRoot}>
                    <FormControl className={classes.selectFormControl} key={index}>
                        <InputLabel shrink htmlFor={col.id}>{filterLabel}</InputLabel>
                        <Select
                            displayEmpty
                            value={filters[col.id] || ""}
                            onChange={this.handleChange(col.id)}
                            name={col.id}
                        >
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            {filterKeys.map(filterKey => (
                                <MenuItem value={filterKey} key={filterKey}>
                                    {col.options.filterOptions[filterKey]}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </GridListTile>
        );
    }

    renderMultiselect(col, index) {
        const {classes, filters} = this.props;
        const filterKeys = Object.keys(col.options.filterOptions);
        const filterLabel = col.hasOwnProperty('options') && col.options.hasOwnProperty('filterLabel')
            ? col.options.filterLabel
            : col.label;
        return (
            <GridListTile key={index}>
                <div className={classes.selectRoot}>
                    <FormControl className={classes.selectFormControl} key={index}>
                        <InputLabel shrink htmlFor={col.id}>{filterLabel}</InputLabel>
                        <Select
                            style={{flexGrow: 1}}
                            multiple
                            displayEmpty
                            value={filters[col.id] || []}
                            renderValue={selected => selected.map(elt => col.options.filterOptions[elt]).join(', ')}
                            onChange={this.handleChange(col.id)}
                            name={col.id}
                        >
                            {filterKeys.map(filterKey => (
                                <MenuItem value={filterKey} key={filterKey}>
                                    <Checkbox
                                        checked={!!(filters[col.id] && filters[col.id].indexOf(filterKey) >= 0)}/>
                                    <ListItemText primary={col.options.filterOptions[filterKey]}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </GridListTile>
        );
    }

    render() {
        const {classes, cols} = this.props;
        const {anchorEl, showPopper} = this.state;
        return (
            <React.Fragment>
                <IconButton aria-label="Filter list" onClick={this.handleOpenFilterPopper}>
                    <FilterListIcon/>
                </IconButton>
                <Popper
                    id="simple-popper"
                    open={showPopper}
                    anchorEl={anchorEl}
                    placement="bottom-end"
                >
                    <Paper className={classes.popper}>
                        <Typography variant="h6">Filters</Typography>
                        <GridList cellHeight="auto" cols={2} className={classes.gridList}>
                            {cols
                                .filter(col => (!col.hasOwnProperty('options') || !col.options.hasOwnProperty('filtrable') || col.options.filtrable === true))
                                .map((col, index) => {
                                    const filterType = col.hasOwnProperty('options') && col.options.hasOwnProperty('filterType')
                                        ? col.options.filterType
                                        : 'dropdown';
                                    return filterType === 'multiselect'
                                        ? this.renderMultiselect(col, index)
                                        : this.renderDropDown(col, index);
                                })
                            }

                        </GridList>
                    </Paper>
                </Popper>
            </React.Fragment>
        );
    }
}

ExtendedTableFilter.propTypes = {
    cols: PropTypes.array.isRequired,
    onFilterUpdate: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        searchText: state.hideout.searchText,
    }),
    dispatch => ({
        hideoutUpdateSearchText: searchText => (dispatch(hideoutUpdateSearchText(searchText))),
    })
)(withStyles(styles)(ExtendedTableFilter));