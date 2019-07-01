import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = ({spacing}) => ({
    description: {
        padding: spacing(2),
    },
    descLine: {
        whiteSpace: 'pre-wrap',
    },
});

class FilterDescription extends React.Component {
    static propTypes = {
        description: PropTypes.string.isRequired,
    };

    render() {
        const {classes, description} = this.props;
        const lines = description.split('\n');
        return (
            <Paper className={classes.description}>
                <Typography variant={'body1'}>
                    {lines
                        .map((line, key) => (
                                <span key={key} className={classes.descLine}>{line}<br/></span>
                            )
                        )}
                </Typography>
            </Paper>
        );
    }
}

export default withStyles(styles)(FilterDescription);