import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';

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
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {element[1].map(el => `"${el}"`).join(' ')}
            </Typography>
        );
    };
    renderSocketGroup = (element) => {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {element[1].join(' ')}
            </Typography>
        );
    };
    renderBoolean = (element) => {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {element[1].join('')}
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

export default Condition;