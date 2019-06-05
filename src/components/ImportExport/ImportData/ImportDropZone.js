import React from 'react'
import {TextField, withStyles, withWidth} from '@material-ui/core';
import {isWidthDown} from '@material-ui/core/withWidth';
import Dropzone from 'react-dropzone';
import {compose} from 'redux';
import {ImportDragZone} from 'components/ImportExport/ImportData';
import Box from '@material-ui/core/Box';
import * as PropTypes from 'prop-types';

const styles = {
    dragContainer: {
        position: 'relative'
    },
    inputErrorText: {textAlign: 'center'},
};

class ImportDropZone extends React.Component {
    static propTypes = {
        dropzoneRef: PropTypes.object.isRequired,
        importText: PropTypes.string.isRequired,
        onDrop: PropTypes.func.isRequired,
        onContentChange: PropTypes.func.isRequired,
    };

    render() {
        const {classes, width, dropzoneRef, importText, onDrop, onContentChange} = this.props;
        return (
            <Dropzone ref={dropzoneRef} noClick={true} onDrop={onDrop} multiple={false}>
                {({getRootProps, getInputProps, isDragActive}) => (
                    <Box {...getRootProps({className: classes.dragContainer})}>
                        <input {...getInputProps()} />
                        <TextField
                            placeholder="Copy your import data here, or drag a tracker file to import it."
                            fullWidth
                            multiline
                            rows={isWidthDown('xs', width) ? 8 : 16}
                            value={importText}
                            onChange={onContentChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <ImportDragZone isDragActive={isDragActive}/>
                    </Box>
                )}
            </Dropzone>
        );
    }
}

export default compose(
    withStyles(styles),
    withWidth()
)(ImportDropZone);