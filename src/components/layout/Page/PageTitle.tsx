import React from 'react';
import {createStyles, Typography, withStyles} from '@material-ui/core';

interface Props {
    classes: any,
    title: string,
}

const styles = createStyles({
    pageTitle: {textAlign: 'center'},
});

class PageTitle extends React.Component<Props> {
    render() {
        const {classes, title} = this.props;
        return (
            <Typography variant="h2" className={classes.pageTitle}>
                {title}
            </Typography>
        );
    }
}

export default withStyles(styles)(PageTitle);