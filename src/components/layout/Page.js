import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import PageTitle from 'components/layout/PageComponents/PageTitle';

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