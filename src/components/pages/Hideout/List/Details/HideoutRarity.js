import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {hideoutRarity} from 'components/pages/Hideout/shared/constants';

const styles = ({breakpoints, spacing}) => ({
    root: {
        flex: '1 1 100%',
        alignSelf: 'center',
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        [breakpoints.down('xs')]: {
            alignSelf: 'flex-start'
        }
    },
    rarity: {
        fontWeight: 'bold',
    },
    rarity1: {},
    rarity10: {color: '#ffcd38'},
    rarity99: {color: '#f44336'},
});

class HideoutRarity extends React.Component {
    static propTypes = {
        rarity: PropTypes.number.isRequired,
    };

    render() {
        const {classes, rarity} = this.props;
        const rarityLabel = hideoutRarity[rarity];
        return (
            <Typography variant="caption" className={classes.root}>
                <em>
                    {'Rarity: '}<span className={clsx(classes.rarity, classes[`rarity${rarity}`])}>{rarityLabel}</span>
                </em>
            </Typography>
        );
    }
}

export default withStyles(styles)(HideoutRarity);