import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

import {ImportPage} from 'components/ImportExport/ImportData';
import {ExportPage} from 'components/ImportExport/ExportData';

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
            <TransitionGroup>
                <CSSTransition timeout={300} key={value} classNames="fade">
                    <div className={classes.root}>
                        {value === 0 && <ImportPage/>}
                        {value === 1 && <ExportPage/>}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default withStyles(styles)(ImportExportTabContent);