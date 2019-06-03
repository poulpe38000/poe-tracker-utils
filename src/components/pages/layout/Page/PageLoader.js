import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Backdrop from '@material-ui/core/Backdrop';
import withStyles from '@material-ui/core/styles/withStyles';
import {compose} from 'redux';
import {connect} from 'react-redux';

const styles = theme => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: theme.zIndex.tooltip + 1
    },
});

class PageLoader extends React.Component {

    render() {
        const {classes, isLoading} = this.props;
        return (
            <React.Fragment>
                {isLoading && (
                    <div className={classes.root}>
                        <Backdrop open={true}/>
                        <LinearProgress/>
                    </div>
                )}
            </React.Fragment>
        );
    };
}

export default compose(
    connect(state => ({isLoading: state.main.isLoading})),
    withStyles(styles),
)(PageLoader);