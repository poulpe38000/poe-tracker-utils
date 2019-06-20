import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import Condition from 'components/Filter/Display/Block/Element/Condition';
import Action from 'components/Filter/Display/Block/Element/Action';
import Avatar from '@material-ui/core/Avatar';

const styles = ({spacing}) => ({
    root: {
        marginTop: spacing(1),
        marginBottom: spacing(1),
    },
    grid: {
        flexGrow: 1,
    },
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

    renderBlockType = (blockType) => {
        const Visibility = blockType === 'Show' ? VisibilityIcon : VisibilityOffIcon;
        return (
            <Avatar aria-label="Visibility">
                <Visibility/>
            </Avatar>
        );
    };

    render() {
        const {classes, blockType, description, conditions, actions} = this.props;
        return (
            <Card className={classes.root}>
                <CardHeader
                    avatar={this.renderBlockType(blockType)}
                    title={blockType}
                    subheader={description}
                />
                <CardContent>
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
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(ConditionBlock);