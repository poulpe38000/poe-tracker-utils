import React from 'react';
import {TableCell, TableHead, TableRow, TableSortLabel} from '@material-ui/core';
import * as PropTypes from 'prop-types';

class ExtendedTableHead extends React.Component {

    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const {orderBy, order, cols} = this.props;

        return (
            <TableHead>
                <TableRow>
                    {cols
                        .filter(col => !col.hasOwnProperty('options') || !col.options.hasOwnProperty('displayed') || col.options.displayed === true)
                        .map(col => (
                            <TableCell
                                {...col.headerOptions}
                                variant="head"
                                sortDirection={orderBy === col.id ? order : false}
                                key={col.id}
                            >
                                <TableSortLabel
                                    active={orderBy === col.id}
                                    direction={order}
                                    onClick={this.createSortHandler(col.id)}
                                >
                                    {col.label}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                </TableRow>
            </TableHead>
        );
    }
}

ExtendedTableHead.propTypes = {
    cols: PropTypes.array.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
};

export default ExtendedTableHead;