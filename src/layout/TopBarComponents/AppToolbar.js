import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import MenuButton from 'layout/TopBarComponents/MenuButton';
import AppStats from 'layout/TopBarComponents/AppStats';
import AppTitle from 'layout/TopBarComponents/AppTitle';

const styles = ({zIndex, breakpoints, spacing}) => ({
    root: {
        [breakpoints.down('sm')]: {
            paddingLeft: spacing(1),
            paddingRight: spacing(1),
        },
    },
});

class AppToolbar extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    render() {
        const {classes, title} = this.props;
        return (
            <Toolbar className={classes.root}>
                <MenuButton/>
                <AppTitle title={title}/>
                <AppStats/>
            </Toolbar>
        );
    }
}

export default withStyles(styles)(AppToolbar);
