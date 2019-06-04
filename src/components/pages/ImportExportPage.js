import React from "react";
import SwipeableViews from 'react-swipeable-views';
import withStyles from '@material-ui/core/styles/withStyles';
import {ImportExportTabs} from 'components/ImportExport';
import {ImportPage} from 'components/ImportExport/ImportData';
import {ExportPage} from 'components/ImportExport/ExportData';
import {compose} from 'redux';

const styles = {
    root: {
        paddingTop: 48,
        flexGrow: 1,
    },
};

class ImportExportPage extends React.Component {
    state = {
        value: 0
    };

    constructor(props) {
        super(props);
        this.tabs = [
            {label: 'Import Data'},
            {label: 'Export Data'},
        ];
    }

    handleTabChange = (event, value) => {
        this.setState({
            value: value
        });
    };

    handleTabChangeIndex = (index) => {
        this.setState({
            value: index
        });
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        return (
            <React.Fragment>
                <ImportExportTabs tabs={this.tabs} value={value} onChange={this.handleTabChange}/>
                <div className={classes.root}>
                    <SwipeableViews
                        axis="x"
                        index={value}
                        onChangeIndex={this.handleTabChangeIndex}
                    >
                    <ImportPage/>
                    <ExportPage/>
                    </SwipeableViews>
                </div>
            </React.Fragment>
        );
    }
}

export default compose(
    withStyles(styles),
)(ImportExportPage);