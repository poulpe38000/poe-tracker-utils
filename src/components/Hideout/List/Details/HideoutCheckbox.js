import React from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = {
    root: {
        minWidth: '64px',
        width: '64px',
        textAlign: 'center',
    },
};

class HideoutCheckbox extends React.Component {
    static propTypes = {
        checked: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    render() {
        const {classes, checked, onChange} = this.props;
        return (
            <Box className={classes.root}>
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    value="checked"
                />
            </Box>
        );
    }
}

export default withStyles(styles)(HideoutCheckbox);
