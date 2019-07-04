import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as PropTypes from 'prop-types';

import {tabs} from 'components/pages/ImportExport/constants';

class TabHeader extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    render() {
        const {onChange, value} = this.props;
        return (
            <React.Fragment>
                <Tabs value={value} centered variant={'fullWidth'} onChange={onChange}>
                    {tabs.map(({label}, index) => (
                        <Tab key={index} label={label} value={index}/>
                    ))}
                </Tabs>
            </React.Fragment>
        );
    }
}

export default TabHeader;