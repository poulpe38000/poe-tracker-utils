import React from 'react';
import {connect} from 'react-redux';
import {FormControl, IconButton, InputAdornment, TextField, Toolbar, Typography, withStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import {hideoutUpdateSearchText} from 'store/hideout/actions';
import * as PropTypes from 'prop-types';
import {HideoutListFilter} from 'components/Hideout';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
    spacer: {
        flex: '0 0 auto',
        flexGrow: 1,
    },
    actions: {
        color: theme.palette.text.secondary,
        display: 'flex'
    },
    title: {
        flex: '1 1 auto',
    },
});

class HideoutListHeader extends React.Component {
    state = {showSearchBar: false};

    static propTypes = {
        title: PropTypes.string,
        filterOptions: PropTypes.array,
        searchable: PropTypes.bool,
    };

    static defaultProps = {
        title: '',
        filterOptions: [],
        searchable: true,
    };

    constructor(props) {
        super(props);
        this.searchField = React.createRef();
    }

    handleToggleSearch = () => {
        this.setState({showSearchBar: !this.state.showSearchBar});
        this.props.hideoutUpdateSearchText('');
    };

    handleSearchTextUpdate = (event) => {
        this.props.hideoutUpdateSearchText(event.target.value);
    };

    render() {
        const {classes, title, filterOptions, searchable, searchText} = this.props;
        const {showSearchBar} = this.state;
        const filtrable = filterOptions.length > 0;
        return (
            <Toolbar>
                <div className={classes.title}>
                    {(searchable && showSearchBar) ? (
                        <Fade in={showSearchBar}>
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
                        </Fade>
                    ) : (
                        <Typography variant="h6">{title}</Typography>
                    )}
                </div>
                <div className={classes.spacer}/>
                <div className={classes.actions}>
                    {searchable && (
                        <IconButton aria-label="Search" onClick={this.handleToggleSearch}>
                            <SearchIcon/>
                        </IconButton>
                    )}
                    {filtrable && <HideoutListFilter filterOptions={filterOptions}/>}
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
)(withStyles(styles)(HideoutListHeader));