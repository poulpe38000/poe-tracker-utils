import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import Condition from 'components/Filter/Display/Block/Element/Condition';
import Action from 'components/Filter/Display/Block/Element/Action';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ConditionHeader from "./ConditionHeader";
import Paper from "@material-ui/core/Paper";

const styles = ({spacing}) => ({
    root: {
        marginTop: spacing(1),
        marginBottom: spacing(1),
    },
    grid: {
        flexGrow: 1,
    },
    listHeader: {
        display: 'flex'
    },
    listTitle: {
        flexGrow: 1,
    }
});

class ConditionBlock extends React.Component {
    static propTypes = {
        blockType: PropTypes.string.isRequired,
        description: PropTypes.string,
        conditions: PropTypes.array,
        actions: PropTypes.array,
    };
    static defaultProps = {
        description: '',
        conditions: [],
        actions: [],
    };

    render() {
        const {classes, blockType, description, conditions, actions} = this.props;
        return (
            <Paper>
                <List className={classes.root}>
                    <ConditionHeader blockType={blockType} description={description} actions={actions}/>
                    <ListItem>
                        <Grid container className={classes.grid} spacing={2}>
                            <Grid item xs={12} sm={6}>
                                {conditions.map(({element, type}, key) => (
                                    <Condition key={key} element={element} type={type}/>
                                ))}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {actions.map(({element, type}, key) => (
                                    <Action key={key} element={element} type={type}/>
                                ))}
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </Paper>
        );
    }
}

export default withStyles(styles)(ConditionBlock);