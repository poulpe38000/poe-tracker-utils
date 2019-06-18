import React from 'react';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import HideoutLabel from 'components/Hideout/List/Details/HideoutLabel';
import HideoutRarity from 'components/Hideout/List/Details/HideoutRarity';
import HideoutLocation from 'components/Hideout/List/Details/HideoutLocation';

const styles = ({breakpoints}) => ({
    root: {display: 'flex',},
    container: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'row',
        [breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
});

class HideoutDetails extends React.Component {
    static propTypes = {
        hideout: PropTypes.object.isRequired,
    };

    render() {
        const {classes, hideout} = this.props;
        return (
            <Box className={classes.container}>
                <HideoutLabel label={hideout.name}/>
                <HideoutRarity rarity={hideout.rarity}/>
                <HideoutLocation location={hideout.location}/>
            </Box>
        );
    }
}

export default withStyles(styles)(HideoutDetails);