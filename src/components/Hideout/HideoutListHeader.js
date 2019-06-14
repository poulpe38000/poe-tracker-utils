import React from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';

import {hideoutActions} from 'store/hideout/actions';
import HideoutListFilter from 'components/Hideout/HideoutListFilter';
import ActionToolbar from 'components/shared/ActionToolbar/ActionToolbar';
import SearchField from 'components/shared/Search/SearchField';

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
        const {title, filterOptions, searchable, searchText} = this.props;
        const filterable = filterOptions.length > 0;
        return (
            <ActionToolbar title={title}>
                {searchable && (
                    <SearchField value={searchText}
                                 onOpen={this.handleToggleSearch}
                                 onClose={this.handleToggleSearch}
                                 onChange={this.handleSearchTextUpdate}/>
                )}
                {filterable && <HideoutListFilter filterOptions={filterOptions}/>}
            </ActionToolbar>
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
)(HideoutListHeader);