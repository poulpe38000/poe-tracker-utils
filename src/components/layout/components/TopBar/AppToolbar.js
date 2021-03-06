import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import AppTitle from 'components/layout/components/TopBar/AppTitle';

const styles = ({spacing}) => ({
    root: {
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
    },
});

class AppToolbar extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    render() {
        const {classes, title, children} = this.props;
        return (
            <Toolbar className={classes.root}>
                <AppTitle title={title}/>
                {children}
            </Toolbar>
        );
    }
}

export default withStyles(styles)(AppToolbar);
