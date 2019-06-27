import React from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';

import {incursionActions} from 'store/incursion/actions';
import SearchField from 'components/shared/Search/SearchField';
import MoreMenu from 'components/Incursion/Toolbar/MoreMenu';
import AppToolbar from 'components/layout/components/TopBar/AppToolbar';


class IncursionToolbar extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: 'Incursion Tracker',
    };

    handleToggleSearch = () => {
        this.props.updateSearchText('');
    };

    handleSearchTextUpdate = (event) => this.props.updateSearchText(event.target.value);

    render() {
        const {searchText, title} = this.props;
        return (
            <AppToolbar title={title}>
                <SearchField value={searchText}
                             onOpen={this.handleToggleSearch}
                             onClose={this.handleToggleSearch}
                             onChange={this.handleSearchTextUpdate}/>
                <MoreMenu/>
            </AppToolbar>
        );
    }
}

export default connect(
    state => ({
        searchText: state.incursion.searchText,
    }),
    {
        updateSearchText: incursionActions.updateSearchText,
    },
)(IncursionToolbar);