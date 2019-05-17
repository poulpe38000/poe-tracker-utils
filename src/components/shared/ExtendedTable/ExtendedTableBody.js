import React from 'react';
import {connect} from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import * as PropTypes from 'prop-types';

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function findText(text, row, cols) {
    return text === ''
        || cols
            .filter(col => (!col.hasOwnProperty('options') || !col.options.hasOwnProperty('searchable') || col.options.searchable === true))
            .find(col => {
                if (row.hasOwnProperty(col.id)) {
                    const renderValue = !!col.options && !!col.options.renderValue
                        ? col.options.renderValue(row).toLowerCase()
                        : row[col.id].toString().toLowerCase();
                    return renderValue.search(text.toLowerCase()) !== -1;
                }
                return false;
            });
}

function applyFilters(filters, row) {
    const filterKeys = Object.keys(filters);
    return filterKeys.length === 0
        || filterKeys
            .every(filterKey => {
                const values = filters[filterKey];
                return (values.length === 0)
                    || (Array.isArray(values) && values.findIndex(val => val === row[filterKey].toString()) !== -1)
                    || (row[filterKey].toString() === values.toString());
            });
}

class ExtendedTableBody extends React.Component {
    stableSort = (array, cmp) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = cmp(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
    };

    render() {
        const {order, orderBy, data, cols, filters} = this.props;
        return (
            <TableBody>
                {this.stableSort(data, getSorting(order, orderBy))
                    .filter(row => applyFilters(filters, row, cols))
                    .filter(row => findText(this.props.searchText, row, cols))
                    .map(row => {
                        return (
                            <TableRow key={row.id}>
                                {cols
                                    .filter(col => !col.hasOwnProperty('options') || !col.options.hasOwnProperty('displayed') || col.options.displayed === true)
                                    .map(col => {
                                    const renderValue = !!col.options && !!col.options.renderValue
                                        ? col.options.renderValue(row)
                                        : row[col.id].toString();
                                    const renderCell = !!col.options && !!col.options.renderCell
                                        ? col.options.renderCell(row)
                                        : renderValue;
                                    return (
                                        <TableCell {...col.cellOptions} key={col.id}>
                                            {renderCell}
                                        </TableCell>
                                    )
                                })
                                }
                            </TableRow>
                        );
                    })}
            </TableBody>
        );
    }
}

ExtendedTableBody.propTypes = {
    data: PropTypes.array.isRequired,
    cols: PropTypes.array.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
};

export default connect(
    state => ({
        searchText: state.hideout.searchText,
        filters: state.hideout.filters,
    }),
)(ExtendedTableBody);
