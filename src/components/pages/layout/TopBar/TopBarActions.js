import React from 'react';
import {withWidth} from '@material-ui/core';
import {isWidthDown} from '@material-ui/core/withWidth';
import {TopBarActionsDesktop, TopBarActionsMobile} from 'components/pages/layout/TopBar';

class TopBarActions extends React.Component {
    render() {
        const {width} = this.props;
        return (
            <React.Fragment>
                {isWidthDown('xs', width)
                    ? <TopBarActionsMobile/>
                    : <TopBarActionsDesktop/>
                }
            </React.Fragment>
        );
    }
}

export default withWidth()(TopBarActions);
