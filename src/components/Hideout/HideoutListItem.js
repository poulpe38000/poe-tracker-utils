import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import {hideoutActions} from 'store/hideout/actions';

const styles = ({breakpoints, spacing}) => ({
    root: {display: 'flex',},
    itemTextContainer: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'row',
        [breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    itemText: {
        flex: '1 1 100%',
        alignSelf: 'center',
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        [breakpoints.down('xs')]: {
            alignSelf: 'flex-start'
        }
    },
    rarity1: {},
    rarity10: {color: 'yellow'},
    rarity99: {color: 'red'},
});

class HideoutListItem extends React.Component {
    static propTypes = {
        hideout: PropTypes.object.isRequired
    };

    hideoutToggleUnlocked = (hideoutId) => () => {
        this.props.toggleUnlocked(hideoutId);
    };

    render() {
        const {classes, hideout} = this.props;
        const hideoutLocation = hideout.location.join(', ');
        const hideoutRarity = HIDEOUT_CONSTANTS.rarity[hideout.rarity];
        return (
            <ListItem dense className={classes.root}>
                <Checkbox
                    checked={hideout.unlocked}
                    onChange={this.hideoutToggleUnlocked(hideout.id)}
                    value="checked"
                />
                <Box className={classes.itemTextContainer}>
                    <Typography variant="subtitle2" className={classes.itemText}>
                        {hideout.name}
                    </Typography>
                    <Typography variant="caption" className={classes.itemText}>
                        <em>
                            Rarity: <span className={classes[`rarity${hideout.rarity}`]}>{hideoutRarity}</span>
                        </em>
                    </Typography>
                    <Typography variant="caption" className={classes.itemText}>
                        {!!hideoutLocation && <em>Location: {hideoutLocation}</em>}
                    </Typography>
                </Box>
            </ListItem>
        );
    }
}

export default compose(
    connect(
        null,
        {
            toggleUnlocked: hideoutActions.toggleUnlocked,
        },
    ),
    withStyles(styles)
)(HideoutListItem);