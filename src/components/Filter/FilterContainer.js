import React, {createRef} from 'react';

import FilterDropZone from 'components/Filter/FilterDropZone';
import {parseFilter} from 'utils/filter/parser';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {displaySnackbar} from 'utils/snackbar';
import {withSnackbar} from 'notistack';
import ConditionBlock from 'components/Filter/Display/Block/ConditionBlock';
import {compose} from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({spacing}) => ({
    description: {
        padding: spacing(2),
    }
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
                    <Paper className={classes.description}>
                        <Typography variant={'body1'} component={'pre'}>
                            {filterStruct.description}
                        </Typography>
                    </Paper>
                )}
                {filterStruct.blocks
                    .map((item, key) => (
                            <ConditionBlock
                                key={key}
                                blockType={item.type}
                                description={item.description}
                                conditions={item.conditions}
                                actions={item.actions}
                            />
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