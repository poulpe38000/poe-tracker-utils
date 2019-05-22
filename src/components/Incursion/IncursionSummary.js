import React from 'react';
import {Button, Paper, withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {incursionRoomValidateInProgress} from 'store/incursion/actions';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
});

class IncursionSummary extends React.Component {

    handleValidateInProgress = () => this.props.incursionRoomValidateInProgress();

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <Button variant="outlined" onClick={this.handleValidateInProgress}>Validate Progression</Button>
            </Paper>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        incursionRoomValidateInProgress: () => dispatch(incursionRoomValidateInProgress()),
    })
)(withStyles(styles)(IncursionSummary));