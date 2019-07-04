import React from 'react';
import clsx from 'clsx';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import withStyles from '@material-ui/core/styles/withStyles';
import noop from 'lodash/noop';
import * as PropTypes from 'prop-types';

import {buttonStyles, mergeStyles} from 'utils/themes';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';


const styles = (theme) => (mergeStyles({
    searchZone: {
        display: 'flex',
        overflow: 'hidden',
        borderRadius: theme.spacing(3),
        width: theme.spacing(6),
    },
    searchExpanded: {
        flex: '1 1 100%',
        alignItems: 'center',
    },
    searchCollapsed: {
        minWidth: theme.spacing(6),
        flex: 0,
    },
    searchContainer: {
        display: 'flex',
    },
    baseInput: {
        ...theme.typography.h6,
        paddingLeft: theme.spacing(1),
        color: 'inherit',
        flexGrow: 1,
    },
    input: {
        padding: 0,
        color: 'inherit',
    },
    inputButton: {
        marginRight: theme.spacing(2),
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
        label: PropTypes.string,
    };

    static defaultProps = {
        onChange: noop,
        onOpen: noop,
        onClose: noop,
        label: 'Search',
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
        const {classes, value, label} = this.props;
        const {expanded} = this.state;
        return (
            <Box className={clsx(classes.searchZone, {
                [classes.searchExpanded]: expanded,
                [classes.searchCollapsed]: !expanded,
            })}>
                {!expanded ? (
                    <Tooltip title={label}>
                        <IconButton aria-label={label}
                                    onClick={this.handleExpandSearch}
                                    color={'inherit'}>
                            <SearchIcon/>
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Fade in>
                        <Box className={classes.searchContainer}>
                            <IconButton aria-label={'Back'}
                                        disableRipple
                                        disableFocusRipple
                                        className={classes.inputButton}
                                        color={'inherit'}
                                        onClick={this.handleCollapseSearch}>
                                <ArrowBackIcon/>
                            </IconButton>
                            <InputBase
                                placeholder={label}
                                value={value}
                                inputRef={this.searchField}
                                inputProps={{'aria-label': label}}
                                onChange={this.handleOnChange}
                                className={classes.baseInput}
                                classes={{input: classes.input}}
                                autoFocus/>
                        </Box>
                    </Fade>
                )}
            </Box>
        );
    }
}

export default withStyles(styles)(SearchField);