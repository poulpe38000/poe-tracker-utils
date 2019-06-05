import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import {ImportPage} from 'components/ImportExport/ImportData';
import {ExportPage} from 'components/ImportExport/ExportData';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

const styles = {
    root: {
        paddingTop: 48,
        flexGrow: 1,
    },
};

class ImportExportTabContent extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    };

    render() {
        const {classes, value} = this.props;
        return (
            <Container maxWidth="lg" className={classes.root}>
                {value === 0 && <ImportPage/>}
                {value === 1 && <ExportPage/>}
            </Container>
        );
    }
}

export default compose(
    withStyles(styles),
)(ImportExportTabContent);