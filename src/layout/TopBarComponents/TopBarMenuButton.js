import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = ({palette, spacing}) => ({
    button: {
        marginRight: spacing(2),
        color: palette.primary.contrastText,
    },
});

class TopBarMenuButton extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const {classes, onClick} = this.props;
        return (
            <IconButton aria-label="Menu" onClick={onClick} className={classes.button}>
                <MenuIcon/>
            </IconButton>
        );
    }
}

export default withStyles(styles)(TopBarMenuButton);
