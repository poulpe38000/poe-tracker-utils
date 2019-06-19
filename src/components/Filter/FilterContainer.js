import React, {createRef} from 'react';

import FilterDropZone from 'components/Filter/FilterDropZone';
import {parseFilter} from 'utils/filter/parser';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {displaySnackbar} from 'utils/snackbar';
import {withSnackbar} from 'notistack';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {compose} from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Condition from 'components/Filter/Element/Condition';
import Action from 'components/Filter/Element/Action';

const styles = ({spacing}) => ({
    paneContainer: {
        flexGrow: 1,
    },
    pane: {
        flex: '1 1 100%',
        marginLeft: spacing(1),
        marginRight: spacing(1),
    },
});

class FilterContainer extends React.Component {
    state = {
        filterTextData: '',
        filterStruct: {
            description: '',
            blocks: [],
        },
    };

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);

    changeTextData = (text) => {
        this.setState({
            filterTextData: text,
        });
    };

    changeStruct = (struct) => {
        this.setState({
            filterStruct: struct,
        });
    };

    onDrop = acceptedFiles => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const fileData = reader.result.toString();
                this.changeTextData(fileData);
                const fileStruct = parseFilter(fileData);
                this.changeStruct(fileStruct);
            } catch (e) {
                this.displaySnackbar('Unable to read tracker file.');
            }
        };

        acceptedFiles.forEach(file => reader.readAsText(file, 'utf-8'));
    };

    handleContentDataChange = () => {
    };

    render() {
        const {classes} = this.props;
        const {filterTextData, filterStruct} = this.state;
        const dropzoneRef = createRef();
        return (
            <React.Fragment>
                <FilterDropZone dropzoneRef={dropzoneRef}
                                importText={filterTextData}
                                onDrop={this.onDrop}
                                onContentChange={this.handleContentDataChange}/>
                {filterStruct.description && (
                    <Paper>
                        <Typography variant={'body1'}>
                            <pre>{filterStruct.description}</pre>
                        </Typography>
                    </Paper>
                )}
                {filterStruct.blocks
                    .map((item) => (
                            <Card>
                                <CardHeader
                                    title={(<Typography variant={'h6'}>{item.type}</Typography>)}
                                    subheader={(<Typography variant={'body2'}>{item.description}</Typography>)}
                                />
                                <CardContent>
                                    <Grid container className={classes.paneContainer} spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant={'h6'}>{'Conditions'}</Typography>
                                            {item.conditions.map(({element, type}) => (
                                                <Condition element={element} type={type}/>
                                            ))}
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant={'h6'}>{'Actions'}</Typography>
                                            {item.actions.map(({element, type}) => (
                                                <Action element={element} type={type}/>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        )
                    )}
            </React.Fragment>
        );
    }
}

export default compose(
    withStyles(styles),
    withSnackbar,
)(FilterContainer);