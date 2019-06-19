import React from 'react';
import {compose} from 'redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import ROUTES from 'constants/routes.constants';
import ContentWrapper from 'layout/ContentWrapper';


const styles = ({breakpoints}) => ({
    root: {
        position: 'absolute',
        overflowY: 'auto',
        left: 0,
        bottom: 0,
        right: 0,
        top: 64,
        [breakpoints.down('xs')]: {
            top: 56,
            '@media (orientation: landscape)': {
                top: 48,
            },
        }
    },
});

class Routes extends React.Component {
    static propTypes = {
        scrollableRef: PropTypes.object
    };
    static defaultProps = {
        scrollableRef: React.createRef(),
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {scrollableRef} = this.props;
        scrollableRef && scrollableRef.current && scrollableRef.current.scrollTo(0, 0);
    }

    render() {
        const {classes, location, scrollableRef} = this.props;
        return (
            <Box className={classes.root} ref={scrollableRef}>
                <TransitionGroup>
                    <CSSTransition timeout={300} key={location.key} classNames="fade">
                        <ContentWrapper>
                            <Switch location={location}>
                                {ROUTES.routes.map((route, key) => (<Route key={key} {...route.route}/>))}
                            </Switch>
                        </ContentWrapper>
                    </CSSTransition>
                </TransitionGroup>
            </Box>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(Routes);
