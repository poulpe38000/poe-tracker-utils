import React from 'react';
import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import {connect} from 'react-redux';
import {hideoutToggleUnlocked} from 'store/hideout/actions';
import {Checkbox, ListItem, Typography, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    root: {display: 'flex',},
    hideoutTextContainer: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    hideoutText: {
        flex: '1 1 100%',
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
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
        this.props.hideoutToggleUnlocked(hideoutId);
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
                <div className={classes.hideoutTextContainer}>
                    <Typography variant="subtitle2" className={classes.hideoutText}>
                        {hideout.name}
                    </Typography>
                    <Typography variant="caption" className={classes.hideoutText}>
                        <em>
                            Rarity: <span className={classes[`rarity${hideout.rarity}`]}>{hideoutRarity}</span>
                        </em>
                    </Typography>
                    <Typography variant="caption" className={classes.hideoutText}>
                        {!!hideoutLocation && <em>Location: {hideoutLocation}</em>}
                    </Typography>
                </div>
            </ListItem>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        hideoutToggleUnlocked: hideoutId => (dispatch(hideoutToggleUnlocked(hideoutId))),
    }),
)(withStyles(styles)(HideoutListItem));