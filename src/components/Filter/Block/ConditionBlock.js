import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Condition from 'components/Filter/Element/Condition';
import Action from 'components/Filter/Element/Action';

const styles = ({spacing}) => ({
    root: {
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

    render() {
        const {classes, blockType, description, conditions, actions} = this.props;
        return (
            <Card>
                <CardHeader
                    title={(<Typography variant={'h6'}>{blockType}</Typography>)}
                    subheader={(<Typography variant={'body2'}>{description}</Typography>)}
                />
                <CardContent>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant={'h6'}>{'Conditions'}</Typography>
                            {conditions.map(({element, type}) => (
                                <Condition element={element} type={type}/>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant={'h6'}>{'Actions'}</Typography>
                            {actions.map(({element, type}) => (
                                <Action element={element} type={type}/>
                            ))}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(ConditionBlock);