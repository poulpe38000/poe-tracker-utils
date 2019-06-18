import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import {hideoutActions} from 'store/hideout/actions';
import Divider from '@material-ui/core/Divider';
import HideoutCheckbox from 'components/Hideout/List/Details/HideoutCheckbox';
import HideoutDetails from 'components/Hideout/List/Details/HideoutDetails';

const styles = {
    root: {display: 'flex',},
};

class HideoutListItem extends React.Component {
    static propTypes = {
        hideout: PropTypes.object.isRequired,
        noDivider: PropTypes.bool,
    };
    static defaultProps = {
        noDivider: false,
    };

    hideoutToggleUnlocked = (hideoutId) => () => {
        this.props.toggleUnlocked(hideoutId);
    };

    render() {
        const {classes, hideout, noDivider} = this.props;
        return (
            <React.Fragment>
                <ListItem dense disableGutters className={classes.root}>
                    <HideoutCheckbox checked={hideout.unlocked}
                                     onChange={this.hideoutToggleUnlocked(hideout.id)}/>
                    <HideoutDetails hideout={hideout}/>
                </ListItem>
                {!noDivider && <Divider/>}
            </React.Fragment>
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