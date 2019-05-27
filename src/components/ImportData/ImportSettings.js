import React from 'react'
import {List, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {ImportSettingsItem} from 'components/ImportData';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    list: {
        width: '100%',
        maxWidth: 360,
    },
};

class ImportSettings extends React.Component {
    static propTypes = {
        opts: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        opts: {
            ignoreHideouts: false,
            ignoreInProgressIncursions: false,
            ignoreCompletedIncursions: false,
        },
    };

    handleSettingsSwitch = (value) => () => {
        this.props.onClick(value);
    };

    render() {
        const {classes, opts} = this.props;
        return (
            <div className={classes.root}>
                <List className={classes.list}>
                    <ImportSettingsItem label="Import Hideouts" value={!opts.ignoreHideouts}
                                        onClick={this.handleSettingsSwitch('ignoreHideouts')}/>
                    <ImportSettingsItem label="Import In-Progress Incursions" value={!opts.ignoreInProgressIncursions}
                                        onClick={this.handleSettingsSwitch('ignoreInProgressIncursions')}/>
                    <ImportSettingsItem label="Import Completed Incursions" value={!opts.ignoreCompletedIncursions}
                                        onClick={this.handleSettingsSwitch('ignoreCompletedIncursions')}/>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(ImportSettings);
