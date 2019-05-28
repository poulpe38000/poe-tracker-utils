import React from 'react';
import {connect} from 'react-redux';
import {hideoutUpdateFilters} from 'store/hideout/actions';
import {Chip, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {compose} from 'redux';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        padding: theme.spacing(.5),
    },
    chip: {
        margin: theme.spacing(.5),
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
                this.props.hideoutUpdateFilters(filters);
                break;
            case 'array':
                filters[key] = filters[key].filter(item => item !== value);
                this.props.hideoutUpdateFilters(filters);
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
        dispatch => ({
            hideoutUpdateFilters: filters => (dispatch(hideoutUpdateFilters(filters))),
        })
    ),
    withStyles(styles)
)(HideoutFilterStatus);