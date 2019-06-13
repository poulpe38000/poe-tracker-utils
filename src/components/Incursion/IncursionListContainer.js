import React from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import IncursionListHeader from 'components/Incursion/IncursionListHeader';

const styles = ({spacing}) => ({
    root: {
        marginTop: spacing(2),
        marginBottom: spacing(2),
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0,
    },
});

class IncursionListContainer extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        const {classes, title, children} = this.props;
        return (
            <React.Fragment>
                <Typography variant="h6">{title}</Typography>
                <Paper className={classes.root} elevation={2}>
                    <List className={classes.list}>
                        <IncursionListHeader/>
                        {children}
                    </List>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(IncursionListContainer);