import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import AppConstants from 'app-constants';
import MenuButton from 'components/layout/components/TopBar/MenuButton';

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
        title: AppConstants.title,
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
