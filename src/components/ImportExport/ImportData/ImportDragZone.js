import React from 'react'
import {Grid, Paper, Typography, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: theme.spacing(2),
    },
    dragActive: {
        borderStyle: 'dashed',
        borderWidth: theme.spacing(.5),
        borderRadius: theme.spacing(2),
        height: '100%',
        opacity: .3
    },
});

class ImportDragZone extends React.Component {
    static propTypes = {
        isDragActive: PropTypes.bool,
    };

    static defaultProps = {
        isDragActive: false,
    };

    render() {
        const {classes, isDragActive} = this.props;
        return (
            <React.Fragment>
                {isDragActive && (
                    <Paper elevation={0} className={classes.root}>
                        <Grid container direction="column" alignItems="center" justify="center"
                              className={classes.dragActive}>
                            <Grid item>
                                <Typography variant="h4">Drop your file here</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                )}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ImportDragZone);
