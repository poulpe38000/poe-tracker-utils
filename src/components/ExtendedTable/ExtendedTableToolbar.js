import {TextField, InputAdornment, Toolbar, IconButton, withStyles, Typography} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import React from 'react';
import {connect} from 'react-redux';
import {hideoutUpdateSearchText} from 'store/hideout/actions';

const styles = theme => ({
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
        display: 'flex'
    },
    title: {
        flex: '0 0 auto',
    },
});

class ExtendedTableToolbar extends React.Component {

    constructor(props) {
        super(props);
        this.searchField = React.createRef();
    }

    state = {
        showSearchBar: false,
    };

    handleToggleSearch = () => {
        this.setState({
            showSearchBar: !this.state.showSearchBar,
        });
        this.props.hideoutUpdateSearchText('');
    };

    handleSearchTextUpdate = (event) => {
        this.props.hideoutUpdateSearchText(event.target.value);
    };


    render() {
        const {classes} = this.props;
        return (
            <Toolbar>
                <div className={classes.title}>
                    {this.state.showSearchBar ? (
                        <TextField
                            className={classes.margin}
                            autoFocus={true}
                            label="Search"
                            inputRef={this.searchField}
                            onChange={this.handleSearchTextUpdate}
                            value={this.props.searchText}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="Delete" onClick={this.handleToggleSearch}>
                                            <ClearIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    ) : (
                        <Typography variant="h6">
                            Hideouts list
                        </Typography>
                    )}
                </div>
                <div className={classes.spacer} />
                <div className={classes.actions}>
                    <IconButton aria-label="Search" onClick={this.handleToggleSearch}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton aria-label="Filter list">
                        <FilterListIcon />
                    </IconButton>
                </div>
            </Toolbar>
        );
    }
}

export default connect(
    state => ({
        searchText: state.hideout.searchText,
    }),
    dispatch => ({
        hideoutUpdateSearchText: searchText => (dispatch(hideoutUpdateSearchText(searchText))),
    })
)(withStyles(styles)(ExtendedTableToolbar));