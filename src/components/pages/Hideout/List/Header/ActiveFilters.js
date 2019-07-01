import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import withStyles from '@material-ui/core/styles/withStyles';

import {hideoutActions} from 'store/hideout/actions';
import {filterOptions} from 'components/pages/Hideout/shared/constants';

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

class ActiveFilters extends React.Component {
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
        const {classes, filters} = this.props;

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
                    <Box className={classes.root}>
                        {chipList.map((chip, key) => (
                            <Chip
                                key={key}
                                color="secondary"
                                label={chip.label}
                                onDelete={this.handleFilterRemove(chip.key, chip.value, chip.type)}
                                className={classes.chip}
                            />
                        ))}
                    </Box>
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
)(ActiveFilters);