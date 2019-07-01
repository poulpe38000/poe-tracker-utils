import React from 'react'
import Dropzone from 'react-dropzone';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import FilterDragZone from 'components/pages/Filter/Import/FilterDragZone';

const styles = {
    dragContainer: {
        position: 'relative'
    },
};

class FilterDropZone extends React.Component {
    static propTypes = {
        dropzoneRef: PropTypes.object.isRequired,
        importText: PropTypes.string.isRequired,
        onDrop: PropTypes.func.isRequired,
        onContentChange: PropTypes.func.isRequired,
    };

    render() {
        const {classes, dropzoneRef, importText, onDrop, onContentChange} = this.props;
        return (
            <Dropzone ref={dropzoneRef} noClick={true} onDrop={onDrop} multiple={false}>
                {({getRootProps, getInputProps, isDragActive}) => (
                    <Box {...getRootProps({className: classes.dragContainer})}>
                        <input {...getInputProps()} />
                        <TextField
                            placeholder="Copy your filter data here, or drag a filter file to import it."
                            fullWidth
                            multiline
                            rows={8}
                            value={importText}
                            onChange={onContentChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <FilterDragZone isDragActive={isDragActive}/>
                    </Box>
                )}
            </Dropzone>
        );
    }
}

export default withStyles(styles)(FilterDropZone);
