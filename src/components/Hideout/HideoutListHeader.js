import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {hideoutActions} from 'store/hideout/actions';
import HideoutListFilter from 'components/Hideout/HideoutListFilter';

const styles = ({palette}) => ({
    spacer: {
        flex: '0 0 auto',
        flexGrow: 1,
    },
    actions: {
        color: palette.text.secondary,
        display: 'flex'
    },
    title: {
        flex: '1 1 auto',
    },
});

class HideoutListHeader extends React.Component {
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

    state = {
        showSearchBar: false,
    };

    constructor(props) {
        super(props);
        this.searchField = React.createRef();
    }

    componentWillUnmount() {
        this.props.updateSearchText('');
    }

    handleToggleSearch = () => {
        this.setState({showSearchBar: !this.state.showSearchBar});
        this.props.updateSearchText('');
    };

    handleSearchTextUpdate = (event) => {
        this.props.updateSearchText(event.target.value);
    };

    render() {
        const {classes, title, filterOptions, searchable, searchText} = this.props;
        const {showSearchBar} = this.state;
        const filtrable = filterOptions.length > 0;
        return (
            <Toolbar>
                <Box className={classes.title}>
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
                </Box>
                <Box className={classes.spacer}/>
                <Box className={classes.actions}>
                    {searchable && (
                        <IconButton aria-label="Search" onClick={this.handleToggleSearch}>
                            <SearchIcon/>
                        </IconButton>
                    )}
                    {filtrable && <HideoutListFilter filterOptions={filterOptions}/>}
                </Box>
            </Toolbar>
        );
    }
}

export default compose(
    connect(
        state => ({
            searchText: state.hideout.searchText,
        }),
        {
            updateSearchText: hideoutActions.updateSearchText,
        },
    ),
    withStyles(styles)
)(HideoutListHeader);