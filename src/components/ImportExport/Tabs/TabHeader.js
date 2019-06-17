import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import withWidth, {isWidthDown} from '@material-ui/core/withWidth';
import * as PropTypes from 'prop-types';

import {tabs} from 'components/ImportExport/constants';

class TabHeader extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    render() {
        const {onChange, value, width} = this.props;
        return (
            <React.Fragment>
            <Tabs value={value} centered variant={isWidthDown('xs', width) ? 'fullWidth' : 'standard'} onChange={onChange}>
                {tabs.map(({label, hash}, key) => (
                    <Tab key={key} label={label} value={hash}/>
                ))}
            </Tabs>
            </React.Fragment>
        );
    }
}

export default withWidth()(TabHeader);
