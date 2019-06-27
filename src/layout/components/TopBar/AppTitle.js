import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import APP_CONSTANTS from 'constants/app.constants';
import MenuButton from 'layout/components/TopBar/MenuButton';
import Box from '@material-ui/core/Box';

const styles = ({spacing}) => ({
    root: {
        flex: '1 1 auto',
        overflow: 'hidden',
        width: 0,
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        paddingLeft: spacing(1),
    }
});

class AppTitle extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };
    static defaultProps = {
        title: APP_CONSTANTS.title,
    };

    render() {
        const {classes, title} = this.props;
        return (
            <Box className={classes.root}>
                <MenuButton/>
                <Typography variant="h6" color="inherit" className={classes.title}>
                    {title}
                </Typography>
            </Box>
        );
    }
}

export default withStyles(styles)(AppTitle);
