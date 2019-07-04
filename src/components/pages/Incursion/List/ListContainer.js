import React from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import ListHeader from 'components/pages/Incursion/List/Header/ListHeader';
import RoomTier from 'components/pages/Incursion/List/Room/RoomTier';

const styles = ({spacing}) => ({
    root: {
        marginTop: spacing(2),
        marginBottom: spacing(2),
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0,
    },
});

class ListContainer extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.object,
        noDivider: PropTypes.bool,
    };

    static defaultProps = {
        items: {},
        noDivider: false,
    };

    render() {
        const {classes, title, items, noDivider} = this.props;
        const roomsKeys = Object.keys(items);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <React.Fragment>
                        <Typography variant="h6">{title}</Typography>
                        <Paper className={classes.root} elevation={2}>
                            <List className={classes.list}>
                                <ListHeader/>
                                {roomsKeys
                                    .map((roomsKey, idx) => (
                                            <RoomTier
                                                roomKey={roomsKey}
                                                rooms={items[roomsKey]}
                                                noDivider={noDivider || idx === roomsKeys.length - 1}
                                            />
                                        )
                                    )
                                }
                            </List>
                        </Paper>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ListContainer);
