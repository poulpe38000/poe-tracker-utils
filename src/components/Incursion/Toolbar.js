import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {incursionActions} from 'store/incursion/actions';
import ActionToolbar from 'components/shared/ActionToolbar/ActionToolbar';
import SearchField from 'components/shared/Search/SearchField';
import MoreMenu from 'components/Incursion/Toolbar/MoreMenu';


const styles = ({breakpoints, palette, spacing}) => ({
    root: {
        backgroundColor: palette.background.paper,
        color: palette.text.primary,
        marginBottom: spacing(2),
        top: 64,
        [breakpoints.down('xs')]: {
            top: 56,
        },
    },
});

class Toolbar extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: '',
    };

    handleToggleSearch = () => {
        this.props.updateSearchText('');
    };

    handleSearchTextUpdate = (event) => this.props.updateSearchText(event.target.value);

    render() {
        const {classes, searchText, title} = this.props;
        return (
            <AppBar className={classes.root} elevation={2} position={'sticky'}>
                <ActionToolbar title={title}>
                    <SearchField value={searchText}
                                 onOpen={this.handleToggleSearch}
                                 onClose={this.handleToggleSearch}
                                 onChange={this.handleSearchTextUpdate}/>
                    <MoreMenu/>
                </ActionToolbar>
            </AppBar>
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
        },
    ),
    withStyles(styles),
)(Toolbar);