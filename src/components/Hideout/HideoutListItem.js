import React from 'react';
import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import {connect} from 'react-redux';
import {hideoutActions} from 'store/hideout/actions';
import {Checkbox, ListItem, Typography, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {compose} from 'redux';

const styles = theme => ({
    root: {display: 'flex',},
    itemTextContainer: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    itemText: {
        flex: '1 1 100%',
        alignSelf: 'center',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
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
                <div className={classes.itemTextContainer}>
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
                </div>
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