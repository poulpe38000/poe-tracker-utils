import React from 'react';
import {withStyles} from '@material-ui/core';
import {PageTitle} from 'components/pages/layout/Page';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 2,
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
            <div className={classes.root}>
                {!!title && <PageTitle title={title}/>}
                {children}
            </div>
        );
    }
}

export default withStyles(styles)(Page);