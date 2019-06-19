import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';

class Action extends React.Component {
    static propTypes = {
        element: PropTypes.object.isRequired,
        type: PropTypes.string.isRequired,
    };

    getRenderer(type) {
        switch (type) {
            case 'Color':
                return this.renderColor;
            case 'FontSize':
                return this.renderFontSize;
            case 'AlertSound':
                return this.renderAlertSound;
            case 'Simple':
                return this.renderSimple;
            case 'AlertSoundFile':
                return this.renderAlertSoundFile;
            case 'Icon':
                return this.renderIcon;
            case 'Effect':
                return this.renderEffect;
            default:
                return this.renderColor;
        }
    }

    renderColor(element) {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> <span style={{
                    width: '16px',
                    height: '16px',
                    display: 'inline-block',
                    backgroundColor: `rgb(${element[1].join(',')})`,
                    opacity: element[1][3] >= 0 ? element[1][3]/255 : 1,
            }}/>
            </Typography>
        );
    }
    renderFontSize(element) {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> <em style={{fontSize: `${element[1][0]*100/32}%`}}>{element[1][0]}</em>
            </Typography>
        );
    }
    renderAlertSound(element) {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {element[1].map(el => `"${el}"`).join(' ')}
            </Typography>
        );
    }
    renderSimple(element) {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong>
            </Typography>
        );
    }
    renderAlertSoundFile(element) {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {element[1].join(' ')}
            </Typography>
        );
    }
    renderIcon(element) {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {element[1].join(' ')}
            </Typography>
        );
    }
    renderEffect(element) {
        return (
            <Typography variant={'body1'}>
                <strong>{element[0]}</strong> {element[1].join(' ')}
            </Typography>
        );
    }

    render() {
        const {element, type} = this.props;
        return (
            <React.Fragment>
                {this.getRenderer(type)(element)}
            </React.Fragment>
        );
    }
}

export default Action;