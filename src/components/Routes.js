import React from 'react';
import {compose} from 'redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import ContentWrapper from 'layout/ContentWrapper';
import ROUTES from 'constants/routes.constants';


const styles = ({breakpoints}) => ({
    root: {
        position: 'absolute',
        top: 64,
        left: 0,
        bottom: 0,
        right: 0,
        [breakpoints.down('xs')]: {
            top: 56,
        }
    },
});

class Routes extends React.Component {
    render() {
        const {classes, location} = this.props;
        return (
            <Box className={classes.root}>
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
