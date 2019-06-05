import React from 'react'
import {Switch, FormControlLabel} from '@material-ui/core';
import * as PropTypes from 'prop-types';

class ImportExportSettingsItem extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const {label, value, onClick} = this.props;
        return (
            <FormControlLabel
                control={
                    <Switch checked={value} onChange={onClick}/>
                }
                label={label}
            />
        );
    }
}

export default ImportExportSettingsItem;
