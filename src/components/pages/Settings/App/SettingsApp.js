import React from 'react';
import {connect} from 'react-redux';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import StorageIcon from '@material-ui/icons/Storage';

import {rootActions} from 'store/root/actions';
import {clearStorage, getLocalStorageSettings, toggleLocalStorageSettings} from 'utils/storage';
import SettingsAppItem from 'components/pages/Settings/App/SettingsAppItem';
import SettingsListContainer from 'components/pages/Settings/List/SettingsListContainer';

class SettingsApp extends React.Component {
    state = {
        allowStorage: getLocalStorageSettings()
    };

    componentWillUnmount() {
        if (!this.state.allowStorage) {
            clearStorage();
        } else {
            this.props.setAll();
        }
    }

    handleToggleTheme = () => {
        this.props.toggleTheme();
    };

    handleToggleStorage = () => {
        this.setState({
            allowStorage: toggleLocalStorageSettings()
        });
    };

    render() {
        const {useLightTheme} = this.props;
        const {allowStorage} = this.state;
        return (
            <SettingsListContainer title={'Application Settings'}>
                <SettingsAppItem primaryText={'Use light theme'}
                                 icon={InvertColorsIcon}
                                 value={useLightTheme}
                                 onClick={this.handleToggleTheme}/>
                <SettingsAppItem primaryText={'Allow local storage'}
                                 icon={StorageIcon}
                                 value={allowStorage}
                                 onClick={this.handleToggleStorage}
                                 noDivider/>
            </SettingsListContainer>
        );
    }
}

export default connect(
    state => ({
        useLightTheme: state.useLightTheme,
    }),
    {
        toggleTheme: rootActions.toggleTheme,
        setAll: rootActions.setAll,
    },
)(SettingsApp);