import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';

import SettingsList from 'components/Settings/List/SettingsList';


class SettingsListContainer extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        const {title, ...listProps} = this.props;
        return (
            <React.Fragment>
                <Typography variant="h6">{title}</Typography>
                <SettingsList {...listProps}/>
            </React.Fragment>
        );
    }
}

export default SettingsListContainer;