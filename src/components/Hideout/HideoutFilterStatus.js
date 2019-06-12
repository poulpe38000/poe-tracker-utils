import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Chip from '@material-ui/core/Chip';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {hideoutActions} from 'store/hideout/actions';

const styles = ({spacing}) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        padding: spacing(.5),
    },
    chip: {
        margin: spacing(.5),
    },
});

class HideoutFilterStatus extends React.Component {
    static propTypes = {
        filterOptions: PropTypes.array.isRequired,
    };

    handleFilterRemove = (key, value, type) => () => {
        const filters = Object.assign({}, this.props.filters);
        switch (type) {
            case 'string':
                filters[key] = '';
                this.props.updateFilters(filters);
                break;
            case 'array':
                filters[key] = filters[key].filter(item => item !== value);
                this.props.updateFilters(filters);
                break;
            default:
                break;
        }
    };

    render() {
        const {classes, filters, filterOptions} = this.props;

        const chipList = Object
            .keys(filters)
            .reduce((result, filterKey) => {
                const filterOption = filterOptions.find(item => item.id === filterKey);
                const filter = filters[filterKey];
                if (filter.length > 0) {
                    if (Array.isArray(filter)) {
                        filter.forEach(item => {
                                result.push({
                                    key: filterKey,
                                    value: item,
                                    label: `${filterOption.label}: ${filterOption.filterOptions[item]}`,
                                    type: 'array',
                                });
                            }
                        );
                    } else {
                        result.push({
                            key: filterKey,
                            value: filter,
                            label: `${filterOption.label}: ${filterOption.filterOptions[filter]}`,
                            type: 'string',
                        });
                    }
                }
                return result;
            }, []);
        return (
            <React.Fragment>
                {chipList.length > 0 && (
                    <div className={classes.root}>
                        {chipList.map(chip => (
                            <Chip
                                color="primary"
                                label={chip.label}
                                onDelete={this.handleFilterRemove(chip.key, chip.value, chip.type)}
                                className={classes.chip}
                            />
                        ))}
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default compose(
    connect(
        state => ({
            filters: state.hideout.filters,
        }),
        {
            updateFilters: hideoutActions.updateFilters,
        },
    ),
    withStyles(styles)
)(HideoutFilterStatus);