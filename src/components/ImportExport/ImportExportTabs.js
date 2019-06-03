import React from 'react';
import {AppBar, Tab, Tabs, withStyles} from '@material-ui/core';

const styles = theme => ({
    root: {
        zIndex: theme.zIndex.appBar -1,
        top: 64,
        [theme.breakpoints.down('xs')]: {
            top: 56,
        }
    },
});

class ImportExportTabs extends React.Component {
    render() {
        const {onChange, value, classes, tabs} = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" className={classes.root}>
                    <Tabs value={value} variant="fullWidth" onChange={onChange}>
                        {tabs.map((tab, key) => (
                            <Tab key={key} label={tab.label}/>
                        ))}
                    </Tabs>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ImportExportTabs);
