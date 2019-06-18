import React from 'react';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import PageTitle from 'layout/PageComponents/PageTitle';

const styles = ({spacing}) => ({
    root: {
        paddingTop: spacing(2),
        paddingBottom: spacing(2),
        flexGrow: 1,
    },
});

class Page extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };
    static defaultProps = {
        title: '',
    };

    render() {
        const {classes, title, children} = this.props;
        return (
            <Box className={classes.root}>
                {!!title && <PageTitle title={title}/>}
                {children}
            </Box>
        );
    }
}

export default withStyles(styles)(Page);