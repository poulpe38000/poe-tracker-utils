import React from 'react';
import {withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';

import PageTitle from 'components/pages/layout/Page/PageTitle';

const styles = theme => ({
    root: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(2),
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

    componentDidMount() {
        window.scrollTo(0, 0);
    }

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