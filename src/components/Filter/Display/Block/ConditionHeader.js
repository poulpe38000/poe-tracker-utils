import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {ListItemText} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import groundBg from 'components/Filter/shared/groundtile.png';
import {defaultValues} from 'components/Filter/shared/constants';

const styles = ({spacing}) => ({
    root: {
        display: 'flex'
    },
    title: {
        flexGrow: 1,
    },
    preview: {
        width: 330,
        height: 60,
        margin: spacing(1),
        background: `url(${groundBg}) 150%`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class ConditionHeader extends React.Component {
    static propTypes = {
        blockType: PropTypes.string.isRequired,
        description: PropTypes.string,
        actions: PropTypes.array,
    };
    static defaultProps = {
        description: '',
        actions: [],
    };

    getColor = (colorArray) => {
        const colorCopy = colorArray.slice();
        if (colorCopy.length < 4) {
            colorCopy.push(255);
        }
        const opacity = colorCopy[3]/255;
        colorCopy.pop();
        return `rgba(${colorCopy.join(',')},${opacity})`;
    };

    renderBlockType = (blockType) => {
        const Visibility = blockType === 'Show' ? VisibilityIcon : VisibilityOffIcon;
        return (
            <Avatar aria-label="Visibility">
                <Visibility/>
            </Avatar>
        );
    };

    renderPreview = (actions) => {
        let previewStyle = {
            fontSize: 24,
            lineHeight: '24px',
            fontWeight: 'bold',
            color: this.getColor(defaultValues.textColor),
            backgroundColor: this.getColor(defaultValues.backgroundColor),
            border: '1px solid ' + this.getColor(defaultValues.textColor),
            padding: 5,
        };
        const customFontSize = actions.find(elt => elt.element[0] === 'SetFontSize');
        if (customFontSize) {
            previewStyle.fontSize = customFontSize.element[1]*2/3;
            previewStyle.lineHeight = `${customFontSize.element[1]*2/3}px`;
        }
        const customTextColor = actions.find(elt => elt.element[0] === 'SetTextColor');
        if (customTextColor) {
            previewStyle.color = this.getColor(customTextColor.element[1]);
        }
        const customBackgroundColor = actions.find(elt => elt.element[0] === 'SetBackgroundColor');
        if (customBackgroundColor) {
            previewStyle.backgroundColor = this.getColor(customBackgroundColor.element[1]);
        }
        const customBorderColor = actions.find(elt => elt.element[0] === 'SetBorderColor');
        if (customBorderColor) {
            previewStyle.border = this.getColor(customBorderColor.element[1]);
        }
        return (
            <Typography style={previewStyle}>Item Preview</Typography>
        );
    };

    render() {
        const {classes, blockType, description, actions} = this.props;
        return (
            <ListItem>
                <ListItemAvatar>
                    {this.renderBlockType(blockType)}
                </ListItemAvatar>
                <ListItemText>
                    <Box className={classes.root}>
                        <Box className={classes.title}>
                            <Typography variant={'body1'}>{blockType}</Typography>
                            <Typography variant={'caption'}>{description}</Typography>
                        </Box>
                        <Box className={classes.preview}>
                            {this.renderPreview(actions)}
                        </Box>
                    </Box>
                </ListItemText>
            </ListItem>
        );
    }
}

export default withStyles(styles)(ConditionHeader);