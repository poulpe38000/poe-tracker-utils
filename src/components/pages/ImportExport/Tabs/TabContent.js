import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {tabs} from 'components/pages/ImportExport/constants';

const styles = ({spacing}) => ({
    root: {
        padding: spacing(2),
    },
});

class TabContent extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    render() {
        const {classes, value, onChange} = this.props;
        return (
            <SwipeableViews index={value} onChangeIndex={onChange}>
                {tabs.map(({component}, key) => (
                    <Box key={key} className={classes.root}>
                        {component}
                    </Box>
                ))}
            </SwipeableViews>
        );
    }
}

export default withStyles(styles)(TabContent);