import React from "react";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {tabs} from 'components/ImportExport/constants';

const styles = ({spacing}) => ({
    root: {
        padding: spacing(2),
    },
});

class TabContent extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
    };

    render() {
        const {classes, value} = this.props;
        return (
            <TransitionGroup>
                <CSSTransition timeout={300} key={value} classNames="fade">
                    <Box className={classes.root}>
                        {tabs.map(({hash, component}, key) => (
                            <React.Fragment key={key}>
                                {value === hash && (
                                    <React.Fragment>
                                        {component}
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default withStyles(styles)(TabContent);