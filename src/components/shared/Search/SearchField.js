import React from 'react';
import clsx from 'clsx';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import withStyles from '@material-ui/core/styles/withStyles';
import noop from 'lodash/noop';
import * as PropTypes from 'prop-types';

import {buttonStyles, mergeStyles, transitionFor} from 'utils/themes';


const styles = (theme) => (mergeStyles({
    searchZone: {
        display: 'flex',
        overflow: 'hidden',
        borderRadius: theme.spacing(3),
        width: theme.spacing(6),
    },
    searchExpanded: {
        backgroundColor: theme.palette.background.popper,
        flex: '1 1 100%',
        transition: transitionFor(theme, ['flex', 'background-color'], 'complex'),
    },
    searchCollapsed: {
        minWidth: theme.spacing(6),
        flex: 0,
        transition: transitionFor(theme, ['flex', 'background-color'], 'complex'),
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

class SearchField extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
    };

    static defaultProps = {
        onChange: noop,
        onOpen: noop,
        onClose: noop,
    };

    state = {
        expanded: false,
    };

    constructor(props) {
        super(props);
        this.searchField = React.createRef();
    }

    handleExpandSearch = () => {
        this.setState({expanded: true});
        this.props.onOpen();
    };

    handleCollapseSearch = () => {
        this.setState({expanded: false});
        this.props.onClose();
    };

    handleOnChange = (event) => this.props.onChange(event);

    render() {
        const {classes, value} = this.props;
        const {expanded} = this.state;
        return (
            <Box className={clsx(classes.searchZone, {
                [classes.searchExpanded]: expanded,
                [classes.searchCollapsed]: !expanded,
            })}>
                <IconButton aria-label="Search" onClick={this.handleExpandSearch} disabled={expanded}>
                    <SearchIcon/>
                </IconButton>
                {expanded && (
                    <React.Fragment>
                        <InputBase
                            placeholder="Search"
                            value={value}
                            inputRef={this.searchField}
                            inputProps={{'aria-label': 'Search Google Maps'}}
                            onChange={this.handleOnChange}
                            className={classes.input}
                            autoFocus
                        />
                        <IconButton aria-label="Delete"
                                    disableRipple
                                    disableFocusRipple
                                    className={classes.inputButton}
                                    onClick={this.handleCollapseSearch}>
                            <ClearIcon/>
                        </IconButton>
                    </React.Fragment>
                )}
            </Box>
        );
    }
}

export default withStyles(styles)(SearchField);