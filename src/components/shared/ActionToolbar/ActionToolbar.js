import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import * as PropTypes from 'prop-types';
import AppTitle from 'layout/TopBarComponents/AppTitle';

class ActionToolbar extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: '',
    };

    render() {
        const {title, children} = this.props;
        return (
            <Toolbar>
                <AppTitle title={title}/>
                {children}
            </Toolbar>
        );
    }
}

export default ActionToolbar;