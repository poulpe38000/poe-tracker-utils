import React from 'react';
import {createStyles, Theme, withStyles} from '@material-ui/core';

import PageTitle from 'components/layout/Page/PageTitle';

interface Props {
    classes: any,
    title?: string,
}

const styles = ({spacing}: Theme) => createStyles({
    root: {
        paddingTop: spacing(2),
        paddingBottom: spacing(2),
        flexGrow: 1,
    },
});

class Page extends React.Component<Props> {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {classes, title, children} = this.props;
        return (
            <div className={classes.root}>
                {!!title && <PageTitle title={title}/>}
                {children}
            </div>
        );
    }
}

export default withStyles(styles)(Page);