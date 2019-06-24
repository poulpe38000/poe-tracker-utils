import React from 'react';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
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
        maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    };
    static defaultProps = {
        title: '',
        maxWidth: false,
    };

    render() {
        const {classes, title, children, ...containerProps} = this.props;
        return (
            <Container {...containerProps}>
                <Box className={classes.root}>
                    {!!title && <PageTitle title={title}/>}
                    {children}
                </Box>
            </Container>
        );
    }
}

export default withStyles(styles)(Page);