import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import * as PropTypes from 'prop-types';

import {tabs} from 'components/pages/ImportExport/shared/constants';

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
                    {tabs.map(({id, label}) => (
                        <Tab key={id} label={label} value={id}/>
                    ))}
                </Tabs>
            </React.Fragment>
        );
    }
}

export default TabHeader;
