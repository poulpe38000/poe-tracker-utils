import React from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';

import {hideoutActions} from 'store/hideout/actions';
import HideoutListFilter from 'components/Hideout/Header/Toolbar/HideoutListFilter';
import ActionToolbar from 'components/shared/ActionToolbar/ActionToolbar';
import SearchField from 'components/shared/Search/SearchField';
import {filterOptions} from 'components/Hideout/constants';

class HideoutListToolbar extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        searchable: PropTypes.bool,
    };

    static defaultProps = {
        title: 'Hideouts list',
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
        const {title, searchable, searchText} = this.props;
        const filterable = filterOptions.length > 0;
        return (
            <ActionToolbar title={title}>
                {searchable && (
                    <SearchField value={searchText}
                                 onOpen={this.handleToggleSearch}
                                 onClose={this.handleToggleSearch}
                                 onChange={this.handleSearchTextUpdate}/>
                )}
                {filterable && <HideoutListFilter/>}
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
)(HideoutListToolbar);