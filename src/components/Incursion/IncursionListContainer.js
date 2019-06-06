import React from 'react';
import {List, Paper, Typography, withStyles} from '@material-ui/core';
import {IncursionListHeader} from 'components/Incursion';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
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
