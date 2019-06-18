import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import ActiveFilters from 'components/Hideout/List/Header/ActiveFilters';
import HeaderColumns from 'components/Hideout/List/Header/HeaderColumns';

const styles = ({breakpoints}) => ({
    root: {
        lineHeight: 'inherit',
    },
});

class HeaderContainer extends React.Component {
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
                    <ActiveFilters/>
                    <HeaderColumns/>
                    {!noDivider && <Divider/>}
                </Paper>
            </ListSubheader>
        );
    }
}

export default withStyles(styles)(HeaderContainer);