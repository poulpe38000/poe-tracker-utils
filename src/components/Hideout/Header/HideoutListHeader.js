import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import Toolbar from 'components/Hideout/Header/Toolbar';
import HideoutFilterStatus from 'components/Hideout/Header/HideoutFilterStatus';

const styles = ({breakpoints}) => ({
    root: {
        lineHeight: 'inherit',
        top: 64,
        [breakpoints.down('xs')]: {
            top: 56,
        }
    },
});

class HideoutListHeader extends React.Component {
    static propTypes = {
        noDivider: PropTypes.bool,
    };

    static defaultProps = {
        noDivider: false,
    };

    render() {
        const {classes, noDivider} = this.props;
        return (
            <ListSubheader disableGutters className={classes.root}>
                <Paper elevation={0}>
                    <Toolbar/>
                    <HideoutFilterStatus/>
                    {!noDivider && <Divider/>}
                </Paper>
            </ListSubheader>
        );
    }
}

export default withStyles(styles)(HideoutListHeader);