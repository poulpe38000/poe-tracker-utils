import React from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';

import {hideoutActions} from 'store/hideout/actions';
import ListFilter from 'components/Hideout/Toolbar/ListFilter';
import SearchField from 'components/shared/Search/SearchField';
import AppToolbar from 'components/layout/components/TopBar/AppToolbar';

class HideoutToolbar extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: 'Hideouts list',
    };

    componentWillUnmount() {
        this.props.updateSearchText('');
    }

    handleToggleSearch = () => {
        this.props.updateSearchText('');
    };

    handleSearchTextUpdate = (event) => {
        this.props.updateSearchText(event.target.value);
    };

    render() {
        const {title, searchText} = this.props;
        return (
            <AppToolbar title={title}>
                <SearchField value={searchText}
                             onOpen={this.handleToggleSearch}
                             onClose={this.handleToggleSearch}
                             onChange={this.handleSearchTextUpdate}/>
                <ListFilter/>
            </AppToolbar>
        );
    }
}

export default connect(
    state => ({
        searchText: state.hideout.searchText,
    }),
    {
        updateSearchText: hideoutActions.updateSearchText,
    },
)(HideoutToolbar);