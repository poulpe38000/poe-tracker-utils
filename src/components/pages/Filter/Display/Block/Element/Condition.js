import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({spacing}) => ({
    chip: {
        margin: spacing(.5),
    },
    r: {color: 'red'},
    g: {color: 'green'},
    b: {color: 'blue'},
});

class Condition extends React.Component {
    static propTypes = {
        element: PropTypes.array.isRequired,
        type: PropTypes.string.isRequired,
    };

    getRenderer(type) {
        switch (type) {
            case 'NumericOperator':
                return this.renderNumericOperator;
            case 'Rarity':
                return this.renderRarity;
            case 'Text':
                return this.renderText;
            case 'SocketGroup':
                return this.renderSocketGroup;
            case 'Boolean':
                return this.renderBoolean;
            default:
                return this.renderText;
        }
    }

    renderNumericOperator = (element) => {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {element[1].join(' ')}
            </Typography>
        );
    };
    renderRarity = (element) => {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {element[1].join(' ')}
            </Typography>
        );
    };
    renderText = (element) => {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Typography variant={'body1'} component={'span'}>
                    <strong>{element[0]}</strong>
                </Typography>
                {element[1]
                    .map((el, key) => (
                        <Chip key={key} label={el} className={classes.chip}/>
                    ))
                }
            </React.Fragment>
        );
    };
    renderSocketGroup = (element) => {
        const {classes} = this.props;
        const coloredElements = element[1]
            .map((elt) => {
                return (
                    <React.Fragment>
                        {elt
                            .split('')
                            .map((color, key) => (
                                <span key={key} className={classes[color.toLowerCase()]}>{color}</span>))}
                    </React.Fragment>
                );
            });
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {coloredElements
                .map((elt, key) => {
                    return (
                        <React.Fragment key={key}>
                            {elt}
                        </React.Fragment>
                    );
                })}
            </Typography>
        );
    };
    renderBoolean = (element) => {
        const BooleanIcon = element[1][0] === 'True' ? CheckIcon : ClearIcon;
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> <BooleanIcon/>
            </Typography>
        );
    };

    render() {
        const {element, type} = this.props;
        return (
            <React.Fragment>
                {this.getRenderer(type)(element)}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Condition);