import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import withWidth, {isWidthDown} from '@material-ui/core/withWidth';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import {createStyles, Theme} from '@material-ui/core';
import {Breakpoint} from '@material-ui/core/styles/createBreakpoints';

interface Props {
    classes: any,
    width: Breakpoint,
    onClick(event: React.MouseEvent<HTMLElement>): void,
}

const styles = ({palette, spacing}: Theme) => createStyles({
    button: {
        marginRight: spacing(2),
        color: palette.primary.contrastText,
    },
});

class TopBarMenuButton extends React.Component<Props> {
    render() {
        const {classes, width, onClick} = this.props;
        return (
            <React.Fragment>
                {isWidthDown('xs', width) && (
                    <IconButton aria-label="Menu" onClick={onClick} className={classes.button}>
                        <MenuIcon/>
                    </IconButton>
                )}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(withWidth()(TopBarMenuButton));
