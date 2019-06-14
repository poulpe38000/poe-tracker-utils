import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = {
    title: {
        flex: '1 1 auto',
        overflow: 'hidden',
        width: 0,
        whiteSpace: 'nowrap',
    }
};

class ActionToolbar extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: '',
    };

    render() {
        const {classes, title, children} = this.props;
        return (
            <Toolbar>
                <Typography variant="h6" className={classes.title}>{title}</Typography>
                {children}
            </Toolbar>
        );
    }
}

export default withStyles(styles)(ActionToolbar);